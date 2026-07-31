import { featuredProjects } from "@/data/featuredProjects";

export async function getGithubProjects() {
  const query = `
    {
      user(login: "${process.env.GITHUB_USERNAME}") {
        repositories(
          first: 30
          orderBy: {
            field: UPDATED_AT
            direction: DESC
          }
          privacy: PUBLIC
          ownerAffiliations: OWNER
        ) {
          nodes {
            name
            description
            url
            homepageUrl
            isArchived
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      console.error("GitHub API error:", res.status);
      return [];
    }

    const json = await res.json();

    if (!json.data?.user?.repositories?.nodes) {
      console.error("Invalid GitHub response:", json);
      return [];
    }

    const repos = json.data.user.repositories.nodes;

    return featuredProjects
      .map((featured) => {
        // PROJECT TANPA GITHUB REPOSITORY
        if (!featured.repo) {
          return {
            slug: featured.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, ""),

            frontmatter: {
              title: featured.title,
              type: featured.type,
              category: featured.category,
              featured: featured.featured,
              description: featured.description,
              image: featured.image,
              tags: featured.tags ?? [],
              github: "",
              link: featured.demo ?? "",
            },
          };
        }

        // PROJECT DARI GITHUB
        const repo = repos.find(
          (item: { name: string }) => item.name === featured.repo,
        );

        if (!repo || repo.isArchived) {
          return null;
        }

        return {
          slug: repo.name,

          frontmatter: {
            title: featured.title,
            type: featured.type,
            category: featured.category,
            featured: featured.featured,
            description: featured.description,
            image: featured.image,

            tags:
              featured.tags ??
              repo.repositoryTopics?.nodes?.map(
                (item: { topic: { name: string } }) => item.topic.name,
              ) ??
              [],

            github: repo.url,

            link: featured.demo || repo.homepageUrl || "",
          },
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.error("Failed to fetch GitHub projects:", error);
    return [];
  }
}

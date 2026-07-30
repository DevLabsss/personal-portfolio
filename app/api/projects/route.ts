export async function GET() {
  const query = `
  {
    user(login: "${process.env.GITHUB_USERNAME}") {

      repositories(
        first: 30
        orderBy: {
          field: UPDATED_AT
          direction: DESC
        }
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {

        nodes {

          id
          name
          description
          url
          homepageUrl
          updatedAt
          stargazerCount
          forkCount
          isArchived
          openGraphImageUrl

          primaryLanguage{
            name
            color
          }

          repositoryTopics(first:10){
            nodes{
              topic{
                name
              }
            }
          }

        }

      }

    }
  }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
    next: {
      revalidate: 3600,
    },
  });

  const json = await response.json();

  const repos = json.data.user.repositories.nodes;

  return Response.json(
    repos
      .filter((repo: any) => !repo.isArchived)
      .map((repo: any) => ({
        slug: repo.name,

        frontmatter: {
          title: repo.name,
          description: repo.description || "No description available.",

          image: repo.openGraphImageUrl,

          github: repo.url,

          link: repo.homepageUrl,

          tags: repo.repositoryTopics.nodes.map((t: any) => t.topic.name) || [],

          stars: repo.stargazerCount,

          forks: repo.forkCount,

          language: repo.primaryLanguage?.name,

          updatedAt: repo.updatedAt,
        },
      })),
  );
}

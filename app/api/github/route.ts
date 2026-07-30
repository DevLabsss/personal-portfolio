export async function GET() {
  const query = `
  {
    user(login: "${process.env.GITHUB_USERNAME}") {
      avatarUrl

      bio

      followers {
        totalCount
      }

      following {
        totalCount
      }

      repositories(ownerAffiliations: OWNER) {
        totalCount
      }

      contributionsCollection {
        contributionCalendar {
          totalContributions
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
    body: JSON.stringify({ query }),
    next: {
      revalidate: 3600,
    },
  });

  const json = await response.json();

  return Response.json(json.data.user);
}

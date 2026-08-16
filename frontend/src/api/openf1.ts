const OPENF1_BASE_URL = "https://api.openf1.org/v1";

export async function getUpcomingSessions() {
  const now = new Date().toISOString();

  const response = await fetch(`${OPENF1_BASE_URL}/sessions?date_start>${now}`);

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming sessions");
  }

  return response.json();
}

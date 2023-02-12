export async function getRandomUsers() {
  try {
    const data = await fetch('https://random-data-api.com/api/v2/users?size=3');
    return data.json();
  } catch (err) {
    console.log('error: ', err);
  }
}

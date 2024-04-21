async function getRepos(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}/repos`);

    return res.json();
}

const RepoList = async ({ slug }: any) => {
  const dataRepo = await getRepos(slug);

  return (
    <ul>
      {dataRepo.map((repo: any) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
};

export default RepoList;

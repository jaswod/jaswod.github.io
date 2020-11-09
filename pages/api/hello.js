// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json(
    [{ title: "Documentation", link: "https://nextjs.org/docs",body: "Find in-depth information about Next.js features and API."},
    { title: "Test", link: "https://nextjs.org/", body: "Blablabalbala balalbala bla"}]
    )
}

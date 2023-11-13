// api/persons-api.js dosyası

import userServices from "@/services/user";

export async function getStaticPaths() {
  const users = await userServices.getAllUsers();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false, // veya true olarak ayarlayabilirsiniz
  };
}

export async function getStaticProps({ params }) {
  const user = await userServices.getUserById(params.id);

  return {
    props: {
      user,
    },
  };
}

import config from "app/config";

export default function () {
  return {
    //
    username: config.username,
    repository: config.repository,
    repositorySlug: `${config.username}/${config.repository}`,
    accessToken: config.accessToken,
    blogName: config.blogName
  }
}

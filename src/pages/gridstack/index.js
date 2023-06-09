import template from "./template/index.marko";
export default async (app) => {
  app.get("/", (request, reply) => {
    reply.marko(template, {});
  });
};

module.exports = (options, app) => {
  return async function nuxtRender(ctx, next) {
    await next();
    ctx.status = 200; // koa defaults to 404 when it sees that status is unset
    ctx.res.data = ctx.body;
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', reject);
      app.nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  };
};


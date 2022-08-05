// /bear

export default {
  //const bearer = context.CF_API_Key;
  async fetch(r, env, context) {
    /*return new Response("ok", {
      status: 200,
      statusText: "ok"
    });*/ //https://blog.cloudflare.com/service-bindings-ga/
    const http = { Origin: r.headers.get("Origin") };
    if (r.method === "OPTIONS") {
      return http.Origin.includes("sausage.saltbank.org")
        ? new Response("yeah alright", {
            status: 200,
            statusText: "ok",
            headers: {
              "Content-Type": "Application/JSON",
              "Access-Control-Allow-Origin": http.Origin,
              "Access-Control-Allow-Methods": r.headers.get(
                "Access-Control-Request-Method"
              ) //rq.headers["Access-Control-Request-Method"]
              //...Object.keys(JSON.parse(rq.headers))
            }
            //"sausage.saltbank.org",
          })
        : new Response("no access for " + http.Origin, {
            status: 403,
            statusText: "not ok"
            //"Access-Control-Allow-Origin": rq.http.Origin,
            //"sausage.saltbank.org",
          });
    }
    //https://developers.cloudflare.com/workers/examples/modify-response/
    //var response =
    //https://developers.cloudflare.com/workers/examples/modify-request-property/

    //request = new Response(rq.body, rq);
    //https://developers.cloudflare.com/workers/runtime-apis/request/
    //const request = rq.clone().json();
    //https://developers.cloudflare.com/workers/examples/alter-headers/
    // Clone the response so that it's no longer immutable
    //maxAge: 3600

    // Rewrite request to point to API URL. This also makes the request mutable
    // so you can add the correct Origin header to make the API server think
    // that this request is not cross-site.
    try {
      //https://community.cloudflare.com/t/how-to-bind-services-in-wrangler-toml/386369
      //const rq = r.clone();
      //bearer/.github/workflows/main.yml https://github.com/NickCarducci/bear/blob/maintenance/.github/workflows/main.yml
      //wranglerVersion = "2.0.24" //https://github.com/cloudflare/workers-rs/pull/183

      //const urlObject = new URL("https://sausage.saltbank.org/api"); //r.url
      //const href = urlObject.searchParams.get("name");
      return await ((eo = env.BANK) => eo.get(eo.idFromName("https://sausage.saltbank.org/api")))();
      //return await env.BANK.fetch(new Request("./api")); //r
      /*return await fetch(
        new Request(
          new URL("https://sausage.saltbank.org/api").toString(),
          new Request(r, {
            //USED BEAR PATH for actual api path (differnet zone)
            //https://community.cloudflare.com/t/is-a-worker-allowed-to-make-requests-to-another-worker/194733/5
            //mastercard-backbank.backbank.workers.dev
            //origin: true,
            //cors: "origin",
            // Change method
            method: r.method,
            // Change body
            body: JSON.stringify(
              r.body
            ) /*JSON.stringify({
            pageOffset: "0",
            pageLength: "10",
            postalCode: "77777"
          })* /,
            // Change the redirect mode.
            redirect: "follow",
            headers: {
              Origin: new URL(r.url).origin, //"https://i7l8qe.csb.app",
              //"Access-Control-Request-Headers": ["Allow", "Origin"],
              //"Referrer-Policy": "cross-origin",
              //https://developers.cloudflare.com/firewall/api/cf-firewall-rules/post/
              "X-Auth-Email": "nmcarducci@gmail.com",
              "X-Auth-Key": /*context.* / env.CF_API_KEY, // cloudflare pages>settings>environment_variables
              ...r.headers //"Content-Type": "Application/JSON",
              //"Access-Control-Request-Method": request.method
            }
            // Change a Cloudflare feature on the outbound response
            //cf: { apps: false }
          })
        )
      )
        .then(async (rs) => await rs.json())
        .then((pro = (result) => JSON.stringify(result)) => new Response(pro))
        .catch((pro = (err) => JSON.stringify(err)) => new Response(pro));
      //return new Response("Hello World!");
    */
    } catch (e) {
      //const pro = JSON.stringify(e);
      return new Response(e, {
        status: 403,
        statusText: "ok"
      });
    }
  }
};

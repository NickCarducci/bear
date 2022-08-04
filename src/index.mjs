// /bear
export default { 
    //const bearer = context.CF_API_Key;
    async fetch(rq, env, context) {
      return new Response("ok", {
        status: 200,
        statusText: "ok"
      });
      /*if (rq.method === "OPTIONS")
        return rq.http.Origin.includes("sausage.saltbank.org")
          ? new Response("yeah alright", {
              status: 200,
              statusText: "ok",
              headers: {
                "Content-Type": "Application/JSON",
                "Access-Control-Allow-Origin": rq.http.Origin,
                "Access-Control-Allow-Methods":
                  rq.headers["Access-Control-Request-Method"]
                //...Object.keys(JSON.parse(rq.headers))
              }
              //"sausage.saltbank.org",
            })
          : new Response("no access for " + rq.http.Origin, {
              status: 403,
              statusText: "not ok"
              //"Access-Control-Allow-Origin": rq.http.Origin,
              //"sausage.saltbank.org",
            });
      //https://developers.cloudflare.com/workers/examples/modify-response/
      //var response =
      //https://developers.cloudflare.com/workers/examples/modify-request-property/
  
      //request = new Response(rq.body, rq);
      //https://developers.cloudflare.com/workers/runtime-apis/request/
      //const request = rq.clone().json();
      //https://developers.cloudflare.com/workers/examples/alter-headers/
      // Clone the response so that it's no longer immutable
      //maxAge: 3600
  
      try {
        return await fetch(
          new Request(
            new URL("https://sausage.saltbank.org/api").toString(),
            new Request(rq, {
              //USED BEAR PATH for actual api path (differnet zone)
              //https://community.cloudflare.com/t/is-a-worker-allowed-to-make-requests-to-another-worker/194733/5
              //mastercard-backbank.backbank.workers.dev
              //origin: true,
              //cors: "origin",
              // Change method
              method: rq.method,
              // Change body
              body: JSON.stringify(
                rq.body
              ) /*JSON.stringify({
              pageOffset: "0",
              pageLength: "10",
              postalCode: "77777"
            })* /,
              // Change the redirect mode.
              redirect: "follow",
              headers: {
                //Origin: "https://i7l8qe.csb.app",
                //"Access-Control-Request-Headers": ["Allow", "Origin"],
                //"Referrer-Policy": "cross-origin",
                //https://developers.cloudflare.com/firewall/api/cf-firewall-rules/post/
                "X-Auth-Email": "nmcarducci@gmail.com",
                "X-Auth-Key": /*context.* / env.CF_API_KEY, // cloudflare pages>settings>environment_variables
                ...rq.headers //"Content-Type": "Application/JSON",
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
      } catch (e) {
        const pro = JSON.stringify(e);
        return new Response(pro, {
          status: 200,
          statusText: "ok"
        });
      }*/
    }
  };
  

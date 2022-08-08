### Using [Wrangler 2](https://github.com/NickCarducci/mastercard-backbank) (5/2022) fails [for service](https://developers.cloudflare.com/workers/platform/environments/) bindings[' environments](https://developers.cloudflare.com/workers/wrangler/environments/)

````
  ...
  apiToken: ${{ secrets.CF_API_TOKEN }}
env:
  CF_ZONE_ID:
  CF_ACCOUNT_ID:
````

bearer authorization service worker to work in conjunction with (cloudflare) pages authorized ([firebase](https://github.com/NickCarducci/sausage/tree/maintenance/bear)) /api (resource hostname)path/referer firewall

[Service binding](https://blog.cloudflare.com/service-bindings-ga/) cloudflare protocol

request.clone() when a single path in your router, if any, is fetched twice

the module as opposed to service worker format for service workers have a function declaration fetch that does not count

as such a fetch as inside, where two readings would require a clone, again, per path (to even compile?)

[legacy](https://github.com/NickCarducci/mastercard-backbank-wrangler-1)

## Subdomain to subdomain (path notwithstanding) is that which does NOT pass pages CF's internal CORS (page web app firewall rules> abstracted CORS)

if rust can only run on service worker, and service binding is not yet ready between workers, how to authenticate without environment variables are shown to endpoints but for a custom domain per worker... maybe a bearer isn't even needed...?

Actually, using subdomain as custom domain of worker (rust, functions cannot) allows for firewall rules to be applied from the top level

this means your firewall rules can block referer origins of not <bear.top.com> when uri path eq and hostname eq <api.top.com>, in which the latter is actually a service worker with a custom domain that is a subdomain of your pages' tld

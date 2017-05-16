/* global hexo */
hexo.extend.generator.register('robotstxt', function () {
  const config = this.config.robotstxt

  return {
    path: 'robots.txt',
    data () {
      let body = ''

      config.uas.forEach(cfg => {
        body += "User-agent: " + (cfg.useragent ? cfg.useragent : '*' ) + "\n"

        if (cfg.disallow) {
          cfg.disallow.forEach(function (entry) {
            body += "Disallow: " + entry + "\n"
          })
        }

        if (cfg.allow) {
          cfg.allow.forEach(function (entry) {
            body += "Allow: " + entry + "\n"
          })
        }

        if (cfg.host) {
          body += "Host: " + cfg.host + "\n"
        }

        body += "\n"
      })

      if (config.sitemap) {
        body += "Sitemap: " + config.sitemap + "\n"
      }

      return body
    }
  }
})

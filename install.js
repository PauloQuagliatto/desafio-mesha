const fs = require('fs')
const resolve = require('path').resolve
const join = require('path').join
const cp = require('child_process')
const os = require('os')

// get library path
const server = resolve(__dirname, './server/')

// get client path
const client = resolve(__dirname, './client/')

const installInDirectories = (server, client) => {
  const paths = [server, client]
  paths.map((usePath) => {
    fs.readdirSync(usePath).forEach(function(mod) {
      const modPath = join(usePath, mod)
      
      // ensure path has package.json
      if (!fs.existsSync(join(modPath, 'package.json'))) {
          return;
      }
    
      // npm binary based on OS
      const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';
      // install folder
      cp.spawn(npmCmd, ['i'], {
          env: process.env,
          cwd: modPath,
          stdio: 'inherit'
      })
    })
  })
}

installInDirectories(server, client)
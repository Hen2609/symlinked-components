import path from "path"
import fs from "fs"


const client_components_folder_path = `./test-folder`
const client_components_path = path.resolve(client_components_folder_path)
const components = fs.readdirSync(client_components_path, {withFileTypes: true}).filter(file => file.isDirectory()).map(dir => dir.name)
console.log('comp', components)
components.forEach(component => {
    const site_components_path   = path.resolve(`./src/components/${component}`)
    const client_component_path  = path.resolve(client_components_folder_path.concat("/",component))
    if(fs.existsSync(site_components_path)){
        fs.rmSync(site_components_path)
    }  
    fs.symlinkSync(client_component_path,site_components_path,"dir")
})

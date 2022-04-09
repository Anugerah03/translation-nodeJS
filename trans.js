const translate = require ('translate')

const translation = async(origin,str, transTo) =>{
    
    translate.from = origin
    translate.url = "https://libretranslate.com/";
    const transStr = await translate(str, transTo)
    console.log(transStr)
}



module.exports ={
    translation: translation
}
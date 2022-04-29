let userStr = "Hello world";

wrapTags(userStr, "div");

function wrapTags(str, tagName){
    console.log(`<${tagName}> ${str} </${tagName}>`);
}
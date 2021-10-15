# iReady-Overload
iReady is awful. It's the worst education tool anyone could ever use. I'm fed up with being forced to mindlessly watch the result of a greedy corporation that doesn't try in the SLIGHTEST to make their product enjoyable, or even acceptable, for an hour every single week. This repository is a collection of hacks that ensure nobody has to suffer through iReady ever again. The current version has a lesson and quiz skipper and a minutes hack, planning on adding more soon but its like 2 am as im typing this and i cant be bothered to add anything else right now


# How to use/install
Download the chrome extension by clicking [here](https://github.com/cupiditys/iReady-Overload/blob/main/chromeExtension.zip?raw=true)

Go to "chrome://extensions/", and on the top right make sure "Developer mode" is turned on
then just unzip chromeExtension.zip and drag folder onto the page and ur good

# How to avoid being AFK-kicked
press ctrl + shift + i, press console tab at top and paste the stuff below in and press obviously press enter
```
function lol() {
document.getElementById("btn-footer-MY_PROGRESS").click()
document.getElementById("btn-footer-TO_DO").click()
setTimeout(() => lol(), 60000);
}
lol()
```

#Extra
credit to ArjhanToteck for originally making this but since his got deleted and he never updated anyways i decided to steal it

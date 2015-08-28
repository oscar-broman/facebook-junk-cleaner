# facebook-junk-cleaner

Mark Zuckerberg announced today that 1 billion users used facebook to "connect with" eachother in one day. That's great.

However, our definition of *connecting* may vary; personally, I don't consider looking at clickbait articles and funny vines/pictures a way of connecting with my friends.

## Usage

Create a bookmark with the code below and click on it when you visit facebook.

## Limitations

At the moment this only works if you view facebook in English.

## Bookmarklet
Create a bookmark with the following link (generated from `fb-cleaner.js`):
```
javascript:(function()%7Bvar%20deleteTexts%20%3D%20%5B'%20shared%20'%2C'%20shared%20a%20'%2C'%20commented%20on%20this.'%2C'%20via%20'%2C'%20liked%20this.'%2C'%20was%20mentioned%20in%20a%20'%2C'%20replied%20to%20a%20'%5D%3Bvar%20deletePatterns%20%3D%20%5B%2F%5E%20liked%20this%20post%20from%20.%2B%3F%5C.%24%2F%2C%2F%5E%5Cd%2Bk%20(Likes%7CShares%7CComments)%24%2F%5D%3Bvar%20deletedCounter%20%3D%20document.createElement('div')%3Bvar%20deletedCount%20%3D%200%3BdeletedCounter.style.position%20%3D%20'fixed'%3BdeletedCounter.style.zIndex%20%3D%201e10%3BdeletedCounter.style.font%20%3D%20'1.2em%20sans-serif'%3BdeletedCounter.style.color%20%3D%20'white'%3BdeletedCounter.style.top%20%3D%20'10px'%3BdeletedCounter.style.left%20%3D%20'10px'%3BdeletedCounter.innerText%20%3D%20'Junk%20hidden%3A%200'%3Bdocument.body.appendChild(deletedCounter)%3Bfunction%20hideNewsfeedStory(el)%20%7Bwhile%20(el)%20%7Bif%20(el.dataset%20%26%26%20el.dataset.story_below_count)%20%7Bbreak%3B%7Del%20%3D%20el.parentNode%3B%7Dif%20(el%20%26%26%20el.style.display%20!%3D%3D%20'none')%20%7Bel.style.display%20%3D%20'none'%3BdeletedCount%20%2B%3D%201%3B%7D%7Dfunction%20cleanElement(el)%20%7Bvar%20it%20%3D%20document.createNodeIterator(el%2CNodeFilter.SHOW_TEXT%2C%7BacceptNode%3A%20function(node)%20%7Bif%20(deleteTexts.indexOf(node.data)%20!%3D%3D%20-1)%20%7Breturn%20NodeFilter.FILTER_ACCEPT%3B%7D%20else%20%7Bfor%20(var%20i%20%3D%200%3B%20i%20%3C%20deletePatterns.length%3B%20i%2B%2B)%20%7Bif%20(deletePatterns%5Bi%5D.test(node.data))%20%7Breturn%20NodeFilter.FILTER_ACCEPT%3B%7D%7D%7D%7D%7D%2Cfalse)%3Bwhile%20((node%20%3D%20it.nextNode()))%20%7BhideNewsfeedStory(node)%3B%7Dvar%20els%20%3D%20el.querySelectorAll('%5Btarget%3D%22_blank%22%5D')%3Bfor%20(var%20i%20%3D%200%3B%20i%20%3C%20els.length%3B%20i%2B%2B)%20%7BhideNewsfeedStory(els%5Bi%5D)%3B%7DdeletedCounter.innerText%20%3D%20'Junk%20hidden%3A%20'%20%2B%20deletedCount%3B%7Ddocument.body.addEventListener('DOMNodeInserted'%2C%20function%20(evt)%20%7Bvar%20el%20%3D%20evt.target%3Bif%20(el.nodeName%20%3D%3D%3D%20'DIV')%20%7BcleanElement(el)%3B%7D%7D%2C%20true)%3BcleanElement(document.body)%7D)()
```

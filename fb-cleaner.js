var deleteTexts = [
  ' shared ',
  ' shared a ',
  ' commented on this.',
  ' via ',
  ' liked this.',
  ' was mentioned in a ',
  ' replied to a '
];

var deletePatterns = [
  /^ liked this post from .+?\.$/,
  /^\d+k (Likes|Shares|Comments)$/
];

var deletedCounter = document.createElement('div');
var deletedCount = 0;

deletedCounter.style.position = 'fixed';
deletedCounter.style.zIndex = 1e10;
deletedCounter.style.font = '1.2em sans-serif';
deletedCounter.style.color = 'black';
deletedCounter.style.bottom = '10px';
deletedCounter.style.left = '10px';
deletedCounter.innerText = 'Junk hidden: 0';

document.body.appendChild(deletedCounter);

function hideNewsfeedStory(el) {
	while (el) {
		if (el.dataset && el.dataset.story_below_count) {
			break;
		}
	
		el = el.parentNode;
	}

	if (el && el.style.display !== 'none') {
		el.style.display = 'none';
    deletedCount += 1;
	}
}

function cleanElement(el) {
  var it = document.createNodeIterator(
    el,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        if (deleteTexts.indexOf(node.data) !== -1) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          for (var i = 0; i < deletePatterns.length; i++) {
            if (deletePatterns[i].test(node.data)) {
              return NodeFilter.FILTER_ACCEPT;
            }
          }
        }
      }
    },
    false
  );

  while ((node = it.nextNode())) {
    hideNewsfeedStory(node);
  }
  
  var els = el.querySelectorAll('[target="_blank"]');

  for (var i = 0; i < els.length; i++) {
    hideNewsfeedStory(els[i]);
  }
  
  deletedCounter.innerText = 'Junk hidden: ' + deletedCount;
}

document.body.addEventListener('DOMNodeInserted', function (evt) {
  var el = evt.target;
  
  if (el.nodeName === 'DIV') {
    cleanElement(el);
  }
}, true);

cleanElement(document.body);
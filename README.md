This tool is deprecated in favor of rawbytz's fantastic sortWF bookmarklet: https://rawbytz.wordpress.com/

# workflowy-sort

This is a small userscript for sorting Workflowy bullets via TamperMonkey.
From the user's perspective, all bullets appear in alphabetical + numerical order in all places.
Custom/manually ordering bullets cannot be done in combination with this script, since it will just reorder bullets anytime you try to change the order.


### Installation

Like any other Tampermonkey Script, you will first need to install the [TamperMonkey Extension](https://tampermonkey.net/).
Then you can either copy the `workflowy-sort.js` script from this repository, or simply install it from [GreasyFork](https://greasyfork.org/en/scripts/39239-workflowy-sort).

### Usage

All visible bullets are automatically displayed in alphabetical and numerical order.
If needed, you can press **`Ctrl+Shift+S`** to manually re-sort all visible bullets (for example after adding a new bullet).

### Logic

 Sorting occurs on the following events: 

  - Whenever the page loads
  - Whenever a bullet is clicked
  - Whenever a bullet is expanded (+/-)
  - Whenever a trace link at the top is clicked (only visible when you click into a bullet)
  - Whenever the user presses the "sort" hotkey (**`Ctrl+Shift+S`**)

The user should almost never see bullets out of order (only known exception is when a new bullet is added).

### Saving the Sort Order

For now, all sorting is done on the client side only and does not save to the backend. This means that bullets remain unsorted on Workflowy's servers, and sorting does not carry over across platforms (mobile <-> desktop, multiple machines, etc).

One quirk is that if you are in a sorted list, and you add a new bullet (e.g. by hitting "Enter"), the bullet will sometimes appear in a different place in the list because of the "true order" of the bullets on the backend. When this happens you can simply re-sort your list by pressing **`Ctrl+Shift+S`**.

# workflowy-sort

This is a small userscript for sorting Workflowy bullets via the [TamperMonkey Extension](https://tampermonkey.net/). From the user's perspective, all bullets appear to be always sorted alphabetically + numerically everywhere.

### Usage

All visible bullets are automatically displayed in alphabetical and numerical order.
You can press **`Ctrl+Shift+Space`** to manually re-sort all visible bullets (for example after adding a new bullet).

### Logic

 To create the illusion that every list is always sorted, sorting occurs on the following events: 

  - Whenever the page loads
  - Whenever a bullet is clicked
  - Whenever a bullet is expanded (+/-)
  - Whenever a trace link at the top is clicked (only visible when you click into a bullet)
  - Whenever the user presses the "sort" hotkey (**`Ctrl+Shift+Space`**)

### Saving

For now, all sorting is done client-side only and does not save to the backend. This means that bullets remain unsorted on Workflowy's servers, and sorting does not carry over across platforms (mobile, desktop, etc).

One quirk is that if you are in a sorted list, and you add a new bullet (e.g. by hitting "Enter"), the bullet will appear in a different place because of the "true order" of the bullets on the backend. When this happens you can simply re-sort your list by pressing **`Ctrl+Shift+Space`**.


### ToDo:

  - Enable saving of sorted data, which should eliminate bullet creation quirk
    - Looked into WorkFlowy's AJAX save function + endpoint (push_poll), the minified code is difficult to decipher and seems to use a randomly generated key for each save (CSRF token?). I don't know the logic behind this key or if I can even mimic it via custom script.
    - Better idea:
     - save all visible bullets to the clipboard in sorted format
     - delete original bullets
     - paste the sorted bullets in place of the original list
    - This cut + paste triggers a Worflowy save, and also allows users to undo a sort with simple Ctrl+Z.
    - Deleting a bullet: $('#selector').getProject().deleteIt();


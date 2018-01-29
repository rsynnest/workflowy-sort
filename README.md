# workflowy-sort
This is a small userscript for sorting Workflowy bullets via the TamperMonkey Extension.  
From the user's perspective, all bullets appear to be always sorted alphabetically everywhere.
This is achieved by sorting on the following events: 
  - on page load
  - whenever a bullet is clicked into
  - whenever a bullet is expanded
  - if one of the hierarchy nav links at the top is clicked 
  - on hotkey press (default hotkey is Ctrl+Shift+Space)

I haven't figured out how to save sorting to the workflowy backend (looking into it). For now all sorting is client-side only. This means that the original bullet order is preserved on the backend, which can be seen if you disable the script. The only quirk from this is that when you add a new bullet (e.g. by hitting "Enter") the bullet will appear in a different place and move your cursor there because of the "true order" of the bullets on the backend.
This isn't a huge deal since you can just re-sort by hitting the sort hotkey, but it is a bit jarring the first time it happens.


### ToDo:

  - Enable saving of sorted data, which should eliminate bullet location quirk
    - Looked into WorkFlowy's AJAX save function + endpoint (push_poll). The minified code is difficult to decipher and seems to use a randomly generated key for each save. I don't know the logic behind this key or if I can even mimic it via custom script.
    - Better idea: when applying a sort, first save the list to the clipboard in sorted format, then delete the original list, then paste sorted list in place of original list. The action of cut + paste triggers a Worflowy save, and also allows users to undo a sort with simple Ctrl+Z.
      - Deleting a bullet: $('#selector').getProject().deleteIt();


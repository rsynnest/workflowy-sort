# workflowy-sort
This is a small userscript for sorting Workflowy bullets via the TamperMonkey Extension.  
From the user's perspective, all bullets appear to be always sorted alphabetically everywhere.
This is achieved by sorting on the following events: 
  - on page load
  - whenever a bullet is clicked into
  - whenever a bullet is expanded
  - if one of the hierarchy nav links at the top is clicked 
  - on hotkey press (default hotkey is Ctrl+Shift+S)

I have not yet figured out how to save sorting to the backend (looking into it), so for now all sorting is only happening on the client side.  
This means that the original ordering is preserved on the backend, so if you disable the script the order goes back to the way it was.
One quirk I've seen as a result is that if you add a new bullet it will appear in a different place because of the "true order" of the bullets on the backend.
This isn't a huge deal since you can just sort via hotkey at any time, but it is a bit jarring the first time it happens.


### ToDo:

  - Enable saving of sorted data, which should eliminate bullet location quirk
    - Already looked into WorkFlowy's AJAX save function (push_poll), minified code difficult to decipher, might be usable but looks very difficult.
    - Better idea! save selected list to clipboard in sorted format, delete selected list, then paste sorted list in its place. This provides reliable saving and also allows undo.
      - Deleting a bullet: $('#selector').getProject().deleteIt();


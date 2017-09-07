# workflowy-sort
This is an experimental userscript for sorting workflowy lists via TamperMonkey.  
By default, the script will sort all visible expanded lists on the following events, creating the illusion that everything is always sorted:
  - on page load
  - whenever a bullet is clicked
  - whenever a bullet is expanded
  - if one of the hierarchy nav links at the top is clicked 
  - on hotkey press (default hotkey is Ctrl+Shift+S)


I have not yet figured out how to save changes for all bullets (looking into it), so all sorting is only provided in the client side view.  
The original locations are still preserved behind the scenes. The only noticeable quirk I've seen from this is that if you add a new bullet, it will be added below the original location of the parent bullet, instead of where the bullet currently appears to sit. This isn't a huge deal since you can just sort via hotkey at any time, but it is a bit jarring.


### ToDo:

  - Enable saving of sorted data, which should elimnate bullet location quirk
    - Already looked into WorkFlowy's AJAX save function (push_poll), minified code difficult to decipher, might be usable but looks very difficult.
    - Better idea! save selected list to clipboard in sorted format, delete selected list, then paste sorted list in its place. This provides reliable saving and also allows undo.
      - Deleting a bullet: $('#selector').getProject().deleteIt();


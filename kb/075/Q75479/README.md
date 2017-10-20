---
layout: page
title: "Q75479: Windows 3.0 Notepad Search and Replace Macro"
permalink: /kb/075/Q75479/
---

## Q75479: Windows 3.0 Notepad Search and Replace Macro

{% raw %}

	Article: Q75479
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 3.0 Notepad has no search-and-replace function. You can,
	however, make a small macro to get around this by using the macro recorder
	included with the Windows retail package.
	
	MORE INFORMATION
	================
	
	Creating the Macro
	------------------
	
	The steps to create this macro are as follows:
	
	1. Load Recorder as an icon by pressing SHIFT while double-clicking your mouse
	  on the Recorder icon within the Program Manager.
	
	2. Open the file you want to edit within Notepad.
	
	3. Type a string that you would like to use to replace the current string in the
	  file. (For example, if you want to replace "Rename" with "REM," type REM ).
	  After typing the string, select it with the mouse or press SHIFT+<an ARROW
	  key>.
	
	4. From the Edit menu, choose Cut.
	
	5. Move to the point in the file that you want to start the search (normally at
	  the top).
	
	6. From the Search menu, choose Find.
	
	7. Type the string that you want to replace.
	
	8. Press ENTER (this should highlight the first occurrence of the string).
	
	9. Double-click the Recorder icon.
	
	  a. From the File menu, choose New.
	
	  b. From the Macro menu, choose Record.
	
	  c. Enter a name for the macro.
	
	  d. Choose a hot key that will not conflict with other keys used by Notepad
	     (for example, ALT+BACKSPACE).
	
	  e. Select Start.
	
	10. Recorder will record keystrokes only by default, unless you change it.
	
	11. Press DEL, then SHIFT+INSERT, and then F3 (this should replace the first
	  occurrence of the word and find the next).
	
	12. Press CTRL+BREAK (this will stop the recorder).
	
	13. Choose Save.
	
	14. Use the hot key to play back the macro and replace the rest of the
	  occurrences of the string.
	
	Using the Macro
	---------------
	
	When you want to use the macro later, do the following:
	
	1. Run Recorder.
	
	2. From the File menu, choose Open, and select the macro you created.
	
	3. Run Notepad and open the file.
	
	4. Type a replacement string.
	
	5. From the Edit menu, choose Cut to place the string in the Clipboard.
	
	6. Go to the place in the file that you want to start the search.
	
	7. From the Search menu, choose Find and select the string you want to replace.
	
	8. Type the hot key that you used in step 9d in the "Creating the Macro" section
	  (each time that you press this, it will find the next occurrence of the
	  string and replace it).
	
	REFERENCES
	==========
	
	"PC Magazine," April 16, 1991, page 356, "Search-and-Replace Mission"
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}

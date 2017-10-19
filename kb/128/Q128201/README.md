---
layout: page
title: "Q128201: How to Put a Null Value in a Field"
permalink: /kb/128/Q128201/
---

## Q128201: How to Put a Null Value in a Field

	Article: Q128201
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several methods you can use to place a .NULL. value in a field at the
	language level. However, there is only one pre-designated method for adding
	.NULL. to fields through the interface.
	
	MORE INFORMATION
	================
	
	The only predefined method for adding .NULL. to a field manually is by using the
	CTRL+0 (control+zero) key combination. The zero key must be the zero key on the
	main keyboard, not the zero key on the numeric keypad. In Visual FoxPro for
	Macintosh, you must use the zero on the numeric keypad. The zero on the main
	keypad does not work.
	
	If you'd prefer to use another key combination, use the ON KEY LABEL command. For
	Example, you could use the following command when interacting with a BROWSE:
	
	     ON KEY LABEL F12 DO ADD_NULL
	
	After creating a procedure or program called ADD_NULL that contains this code:
	
	     ON KEY LABEL F12                && Temporarily turn off routine.
	     REPLACE (SYS(18)) WITH .NULL.   && Replace current field with .NULL.
	     ON KEY LABEL F12 DO ADD_NULL    && Turn On Key Label back on.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300
	Version           : MACINTOSH:3.0; WINDOWS:3.0
	
	=============================================================================
	

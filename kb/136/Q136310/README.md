---
layout: page
title: "Q136310: How to Expand a Combo Box Programmatically"
permalink: kb/136/Q136310/
---

## Q136310: How to Expand a Combo Box Programmatically

	Article: Q136310
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to expand a combo box programmatically. This may
	be useful when a user presses the TAB key to move into the combo box or when a
	command button Click event procedure gives the focus to the combo box. It is
	assumed that you have a combo box on a form and are looking for ways to activate
	it programmatically.
	
	MORE INFORMATION
	================
	
	Following are two methods for expanding a combo box programmatically:
	
	Method One: Using Pixel Coordinates
	-----------------------------------
	
	Place the following code in the GotFocus method of the combo box:
	
	     tCol=THISFORM.Combo1.Left + THISFORM.Combo1.Width - 4
	     tRow=THISFORM.Combo1.Top + 2
	     MOUSE CLICK AT tRow, tCol PIXELS WINDOW (THISFORM.Name)
	
	The combo box expands every time it receives the focus.
	
	Method Two: Using Keyboard Buffer
	---------------------------------
	
	Place the following code in the GotFocus method of the combo box:
	
	     KEYBOARD '{ALT+DnArrow}'
	
	The combo box expands every time it receives the focus.
	
	Additional query words: VFoxWin drop down dropdown list
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

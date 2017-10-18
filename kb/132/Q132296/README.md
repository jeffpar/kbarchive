---
layout: page
title: "Q132296: DOC: Bad Reference to Style Property with Command Button"
permalink: kb/132/Q132296/
---

## Q132296: DOC: Bad Reference to Style Property with Command Button

	Article: Q132296
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a form in Visual FoxPro, it is possible to place bitmap or icon
	images on command buttons. However, the Visual FoxPro Help file gives the wrong
	setting for the Style property of the command button.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	Help gives this incorrect information:
	
	  ...the Style property must be set to 1 (Graphical) for the bitmap to be
	  displayed on the control.
	
	In fact, when a command button is the active object, the two choices available
	for the Style property are 0 (Standard) or 1 (Invisible). For the bitmap or icon
	image to be visible, you must set the Style property to 0 (Standard).
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Add a command button to the form.
	
	3. In the property sheet of the form, choose context-sensitive help (by pressing
	  the F1 key) for the Picture, DisabledPicture, or DownPicture property of the
	  command button. Note the incorrect reference to the setting of the Style
	  property.
	
	Additional query words: VFoxWin 5.00 docerr
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

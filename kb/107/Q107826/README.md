---
layout: page
title: "Q107826: PRB: COMMAND+W and CTRL+W Do Not Close All Windows"
permalink: kb/107/Q107826/
---

## Q107826: PRB: COMMAND+W and CTRL+W Do Not Close All Windows

	Article: Q107826
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing COMMAND+W or CTRL+W does not close every window that has a close box,
	as the ESC key does.
	
	For example, clicking the close box or choosing Close from the File menu in a
	screen, menu, or report invokes the following dialog box if any changes were
	made:
	
	  
	
	  Do you want to save changes to XXX.SCX?
	
	  Yes        No        Cancel
	
	Pressing COMMAND+W or CTRL+W immediately saves any changes and closes the file,
	bypassing the "Do you want to save changes?" dialog box. If a new report or
	screen is being created, a second "Save Environment?" dialog box will appear
	regardless of the method used to close the file.
	
	However, if COMMAND+W or CTRL+W is pressed in other windows, such as the Debug
	window, a character will appear in the window and the window will remain open.
	
	STATUS
	======
	
	This behavior is by design. The intent of the COMMAND+W or CTRL+W key
	combination is to allow you to bypass the "Do you want to save changes?" dialog
	box. This key combination cannot be used to close windows that do not invoke
	this dialog box.
	
	Additional query words: vFoxMac FoxMac control
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

---
layout: page
title: "Q76860: Removing Defined Application Shortcut Key Assignment from PIF"
permalink: /kb/076/Q76860/
---

## Q76860: Removing Defined Application Shortcut Key Assignment from PIF

	Article: Q76860
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	If an application shortcut key has been assigned to an application
	through the application's program information file (PIF), leaving the
	Application Shortcut Key field blank does not remove the shortcut key
	sequence.
	
	To remove the application shortcut key assigned to an application, do
	the following:
	
	1. Double-click PIF EDITOR located in the Accessories group.
	
	2. Open the PIF file for that application.
	
	3. Go to the Application Shortcut Key field in the Advanced Options dialog box
	  and press SHIFT+BACKSPACE. The word "None" will now appear in this field.
	  (Note: The word "None" cannot be typed into the field by using the keyboard).
	
	4. Save the revised PIF file.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

---
layout: page
title: "Q126102: Paintbrush Causes GP Fault with VGA or SVGA Display Driver"
permalink: kb/126/Q126102/
---

## Q126102: Paintbrush Causes GP Fault with VGA or SVGA Display Driver

	Article: Q126102
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using either the VGA or SVGA display driver and make the following
	changes in Paintbrush, you receive a
	
	  general protection (GP) fault
	
	error message in Paintbrush:
	
	- Change the Units option in the Image Attributes dialog box to Pels.
	
	- Set the Height setting to 833 and the Width setting to a value between 929
	  and 944 in the Image Attributes dialog box.
	
	Once you have made these changes you cannot restart Paintbrush.
	
	WORKAROUND
	==========
	
	There are two ways to work around this problem.
	
	Method 1
	--------
	
	Set the Height and Width values so they do not match the values listed above. If
	you cannot start Paintbrush to make these changes, use any text editor (such as
	Notepad) to edit the [Paintbrush] section of the WIN.INI file. Change the
	"width=" and "height=" lines to values that do not match those listed above, and
	then save and close the WIN.INI file. For example, you could use the following
	settings in the WIN.INI file:
	
	  [Paintbrush]
	  width=928
	  height=833
	
	Method 2
	--------
	
	You may be able to work around this problem by using a display driver other than
	the VGA or SVGA display driver.
	
	Additional query words: 3.10 3.11 gpf paintbrush.exe pbrush.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

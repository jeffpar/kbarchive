---
layout: page
title: "Q63583: Altering Icons for MS-DOS Applications in Windows"
permalink: kb/063/Q63583/
---

## Q63583: Altering Icons for MS-DOS Applications in Windows

	Article: Q63583
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you make a new program item by "dragging" the PIF or .EXE from the File
	Manager to the Program Manager, the default MS-DOS BOX icon is used. Any attempt
	to change this icon by using the View Next button results in an error message
	that states that there are no icons in this file.
	
	WORKAROUND
	==========
	
	The following procedure allows you to alter the icon:
	
	1. Select the icon and from the File menu choose Properties.
	
	2. From the first dialog, choose the Change Icon button.
	
	3. On the next dialog there is an entry for FILENAME. Change this to
	  PROGMAN.EXE. This gives you access to the icons in PROGMAN.EXE (you can use
	  icons from any Windows application for another application by putting its
	  name in this field).
	
	4. Now use the View Next button to choose the icon you want. Note: The icon used
	  when the application is running on the desktop will still be the MS-DOS BOX.
	
	Additional query words: 3.00 3.10 3.00a 3.11 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

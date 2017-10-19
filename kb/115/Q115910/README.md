---
layout: page
title: "Q115910: Moving Windows TrueType Fonts to Another Directory"
permalink: /kb/115/Q115910/
---

## Q115910: Moving Windows TrueType Fonts to Another Directory

	Article: Q115910
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows and Windows for Workgroups copy TrueType font files to the Windows
	SYSTEM subdirectory by default. Installing multiple TrueType fonts can cause the
	Windows SYSTEM subdirectory to become very large.
	
	Although the only limitation on the size of the SYSTEM subdirectory is free disk
	space, you may want to reduce the size of the Windows SYSTEM subdirectory by
	changing the location in which the .TTF files are stored. The procedure below
	describes how to move the currently installed TrueType fonts to a directory
	other than the default Windows SYSTEM subdirectory.
	
	MORE INFORMATION
	================
	
	TrueType font files (.TTF) are used to create fonts in all point sizes at all
	resolutions for all output devices. Although these files are placed in the
	Windows SYSTEM subdirectory by default, you can move the .TTF files to any
	subdirectory.
	
	To move TrueType fonts to a subdirectory other than the default, use the
	procedure below:
	
	1. List all the current TrueType fonts installed on the computer by
	  double-clicking the Fonts icon in Control Panel.
	
	2. Select all the TrueType fonts that you want to move and choose the Remove
	  button.
	
	3. In the Remove Font window, which asks for confirmation about deleting
	  <xxxx> TrueType font (where <xxxx> is the name of a selected
	  font), clear the Delete Font File From Disk check box and choose the Yes
	  button.
	
	4. Exit Windows and change to the Windows SYSTEM subdirectory at the MS-DOS
	  command prompt.
	
	5. Move all the .TTF files selected in step 2 to the new directory location. If,
	  for example, all the TrueType font files are to be stored in a newly created
	  directory called D:\TTFONTS, type the following at the MS-DOS command
	  prompt:
	
	  move *.ttf d:\ttfonts
	
	  -or-
	
	  copy *.ttf d:\ttfonts del *.ttf
	
	6. Restart Windows and double-click the Fonts icon in Control Panel.
	
	7. Choose the Add button and specify the D:\TTFONTS directory from the bottom of
	  the Add Fonts dialog box. Windows will begin retrieving all the font names
	  from that directory.
	
	8. Disable the "Copy Fonts to Windows Directory" option by clearing the check
	  box at the bottom of the Add Fonts dialog box and then choose the Select All
	  button. Choose OK.
	
	9. Close the Fonts dialog box and Control Panel, then restart Windows.
	
	NOTE: Since most programs install fonts in the Windows SYSTEM subdirectory by
	default, any fonts added to the system at a later time also must be manually
	moved with this procedure.
	
	Additional query words: 3.10 3.1 3.11 ttf tt font true type true-type
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

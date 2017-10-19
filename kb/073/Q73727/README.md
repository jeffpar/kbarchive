---
layout: page
title: "Q73727: Opening Editor with the File Last Edited in MS-DOS Shell"
permalink: /kb/073/Q73727/
---

## Q73727: Opening Editor with the File Last Edited in MS-DOS Shell

	Article: Q73727
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Within MS-DOS Shell, you can start MS-DOS Editor with the file last edited as
	the default file to edit.
	
	MORE INFORMATION
	================
	
	By default, when you open Editor from Shell, a File to Edit window (also called
	the %1 prompt dialog) appears and prompts you to enter the name of the file to
	edit. You must then type the name of the file and choose OK to edit an existing
	file, or you can choose OK to create a new file.
	
	When opening a file that is also the most recently edited file, you can open
	Editor with that file loaded by doing the following:
	
	1. From Shell, select Editor (do not open Editor).
	
	2. From the main Shell menu, choose File Properties.
	
	3. In the Default Parameters field of the Program Items Properties window, enter
	  "%1" (without the quotation marks).
	
	4. Choose OK to access the second Program Items Properties window and the %1
	  dialog.
	
	5. To open the currently selected file on the files list, enter "%F" (without
	  the quotation marks) in the Default Parameters field of this window.
	
	  If you want the Editor to open the last edited file, enter "%L" (without the
	  quotation marks).
	
	6. Choose OK to save your changes and exit to the previous window.
	
	7. Choose OK again to open the file that you selected in step 5.
	
	Additional query words: 5.00 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

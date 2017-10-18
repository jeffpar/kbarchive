---
layout: page
title: "Q73412: MS-DOS Shell Shortcut Key and the Help Menu"
permalink: kb/073/Q73412/
---

## Q73412: MS-DOS Shell Shortcut Key and the Help Menu

	Article: Q73412
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
	
	Using the MS-DOS Shell Help menu from within the File Properties dialog box
	immediately after setting a shortcut key appears to lock the shortcut key
	selection. In other words, the shortcut key does not seem to change when you
	type in another selection after having accessed the Help menu. However, the last
	key combination that you type is the one that is activated as the shortcut key.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, do the following:
	
	1. Select an item in the Main window (such as QBasic).
	
	2. From the File menu, choose Properties.
	
	3. Tab down to the Shortcut key selection.
	
	4. Enter a key combination.
	
	5. Choose the Help menu option.
	
	6. Close the Help Menu>
	
	7. Try to change the Shortcut key selection
	
	It will not appear to change. However, when you exit the Properties dialog box,
	Shell saves the last key combination you typed in.
	
	This can be shown by enabling Task Swapper, opening that program, using ALT+TAB
	to switch back to MS-DOS Shell. That particular program will appear in the Task
	Swapper listing with the shortcut key in parentheses.
	
	Additional query words: 5.00 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

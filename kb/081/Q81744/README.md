---
layout: page
title: "Q81744: No Way Around Corrupt Swap File on True Pen-Based Machine"
permalink: kb/081/Q81744/
---

## Q81744: No Way Around Corrupt Swap File on True Pen-Based Machine

	Article: Q81744
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Microsoft Windows is running on a pen-only machine without a keyboard, it is
	not possible to get past the text-based warning if a permanent swap file becomes
	corrupted.
	
	MORE INFORMATION
	================
	
	The corrupted swap file warning is a text-based warning that prompts you to
	respond with yes/no keyboard input. If this error message is received on a true
	pen-only machine with no keyboard, it is not possible to reply because the
	Windows 3.1 Pen Extensions are not loaded.
	
	To get past the warning message, turn off the machine, plug in a keyboard, and
	turn the machine back on. This allows the yes/no text-based warning to be
	answered. Once you have entered Windows 3.1, you can use the pen to delete the
	permanent swap file and create a new one.
	
	
	KBCategory: kbhw
	KBSubcategory: win31
	
	Additional query words: 3.10 win31 KBHW penwin 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

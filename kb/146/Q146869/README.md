---
layout: page
title: "Q146869: ALT+F6 Key Combination Does Not Work in Windows 95"
permalink: kb/146/Q146869/
---

## Q146869: ALT+F6 Key Combination Does Not Work in Windows 95

	Article: Q146869
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience any of the following symptoms:
	
	- You cannot use the ALT+F6 key combination to switch between a program's
	  non-document windows, although other programs seem to have this
	  functionality.
	
	- You cannot assign the ALT+F6 key combination to a macro in programs that
	  allow a keyboard shortcut to be assigned to a macro.
	
	- The F16 key on your Wang keyboard does not work.
	
	CAUSE
	=====
	
	The ALT+F6 key combination is reserved for use by Windows 95. Programs that try
	to control this key combination are unable to use it.
	
	On keyboards with 16 function keys (such as the Wang keyboard), keys F13-F16 are
	mapped to other key combinations. The F16 key is mapped to the ALT+F6 key
	combination.
	
	RESOLUTION
	==========
	
	Use the mouse to switch between windows in your program, or assign another key
	combination to the macro in your program.
	
	
	MORE INFORMATION
	================
	
	Reserved key combinations (ALT+TAB, CTRL+ESC, ALT+ESC, and ALT+F6) are captured
	by Windows 95. These key combinations are captured by Windows 95 to prevent
	programs from interfering with task switching, thereby improving overall system
	reliability.
	
	Additional query words: 4.0 hotkey
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	

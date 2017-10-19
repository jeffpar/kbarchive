---
layout: page
title: "Q69653: IdleWild Does Not Blank the Screen"
permalink: /kb/069/Q69653/
---

## Q69653: IdleWild Does Not Blank the Screen

	Article: Q69653
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IdleWild does not blank the screen if other applications or terminate-and-
	stay-resident (TSRs) programs have control of the computer's timer.
	
	CAUSE
	=====
	
	This behavior occurs because of the way IdleWild accesses the computer's timer.
	If any other applications take control of the timer, or if any memory-resident
	software is present, IdleWild may not blank.
	
	RESOLUTION
	==========
	
	Boot the system clean by doing the following:
	
	1. Remove any TSRs out of the CONFIG.SYS or AUTOEXEC.BAT files.
	
	2. Remove any additional hardware on the machine.
	
	3. Close any applications and then try IdleWild.
	
	Temporary Workaround
	--------------------
	
	If you move the mouse pointer to the upper right corner of the screen, IdleWild
	can blank the screen. Also, if you choose the Blank Now command from the Options
	menu, the screen can blank. However, IdleWild does not time out and blank the
	screen.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

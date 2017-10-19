---
layout: page
title: "Q88443: Using Terminal VT-100 Emulation in Windows"
permalink: /kb/088/Q88443/
---

## Q88443: Using Terminal VT-100 Emulation in Windows

	Article: Q88443
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses using Terminal VT-100 emulation in Microsoft Windows.
	
	MORE INFORMATION
	================
	
	Using Terminal in VT-100 Emulation in Windows 3.0, 3.0a
	-------------------------------------------------------
	
	When using Microsoft Terminal (TERMINAL.EXE) in VT-100 emulation mode, you should
	enable the SCROLL LOCK key on the keyboard. This allows proper operation of the
	arrow keys and the function keys.
	
	This is not mentioned in the "Microsoft Windows User's Guide" for version 3.0,
	but is discussed in the first screen of the Help index accessed by pressing F1
	if SCROLL LOCK is not enabled. If SCROLL LOCK is enabled, then the arrow keys
	function normally and the function keys are remapped so that F1=PF1, F2=PF2,
	F3=PF3, and F4=PF4.
	
	To access the Terminal Help Index with SCROLL LOCK enabled, press ALT+H, I or
	choose the Index command from the Help menu with your mouse.
	
	Using Terminal in VT-100 Emulation in Windows 3.1
	-------------------------------------------------
	
	In Windows 3.1, do the following to enable proper VT-100 operation:
	
	1. In Terminal, from the Settings menu, choose Terminal Preferences.
	
	2. Clear the Use Function, Arrow, And Ctrl Keys For Windows check box.
	
	The "Microsoft Windows User's Guide" for version 3.1 incorrectly states on page
	386:
	
	  To use the function keys for DEC VT-100 (ANSI) terminal emulation, SCROLL
	  LOCK must be turned on. If SCROLL LOCK is turned off, the function keys and
	  arrow keys have normal Windows (not VT-100) functionality.
	
	For correct DEC VT-100 (ANSI) emulation in Windows 3.1, SCROLL LOCK must be
	turned OFF, and Terminal Preferences must be set as previously mentioned.
	
	Additional query words: 3.00 3.00a 3.10 3.11 vt100
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

---
layout: page
title: "Q62649: HIMEM.SYS Locks Hyundai 286c Keyboard"
permalink: kb/062/Q62649/
---

## Q62649: HIMEM.SYS Locks Hyundai 286c Keyboard

	Article: Q62649
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It has been reported that HIMEM.SYS locks the Hyundai 286c keyboard.
	
	NOTE: It has also been reported that this switch setting works correctly on the
	Hyundai 286b.
	
	CAUSE
	=====
	
	HIMEM.SYS is installing the wrong handle for this type of machine. Using the
	/m:<number> switch, documented in the README.TXT, allows HIMEM.SYS to
	change the handle installed. Changing the handle to #7 corrects the
	keyboard-locking problem.
	
	The following is a sample HIMEM.SYS line for CONFIG.SYS:
	
	       DEVICE=c:\himem.sys /m:7
	
	MORE INFORMATION
	================
	
	This information also applies to the MS-DOS 5.0 version of HIMEM.SYS.
	
	The Hyundai products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 win30 3.00a 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

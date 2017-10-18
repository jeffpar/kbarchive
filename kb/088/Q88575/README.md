---
layout: page
title: "Q88575: Using the COMPAQ 286N with Windows 3.0"
permalink: kb/088/Q88575/
---

## Q88575: Using the COMPAQ 286N with Windows 3.0

	Article: Q88575
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows runs on the COMPAQ 286N laptop computer. However, there are
	two possible issues that may arise:
	
	- You may need a replacement KEYBOARD.DRV driver from COMPAQ.
	
	- A COMPAQ 286N with 1 megabyte of memory can only run in real mode.
	
	MORE INFORMATION
	================
	
	Replacement KEYBOARD.DRV from COMPAQ
	------------------------------------
	
	If you attempt to change the keyboard repeat rate in the Windows Control Panel on
	a COMPAQ 286N machine, communication between the system and keyboard may be
	lost.
	
	To correct this problem, contact COMPAQ and obtain an updated KEYBOARD.DRV.
	
	1 MB of Memory on 286N Only Allows You to Run Real Mode
	-------------------------------------------------------
	
	A COMPAQ 286N with 1 megabyte of memory can only run in real mode of Windows
	because 384K of the memory is used by shadowing system ROM into RAM. This is
	done to improve performance. There is no way to disable this functionality in
	this model.
	
	The COMPAQ products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.0 3.00 3.00a 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

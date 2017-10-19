---
layout: page
title: "Q74536: RBase 3.1, Windows Enhanced Mode, and EMM386 NOEMS"
permalink: /kb/074/Q74536/
---

## Q74536: RBase 3.1, Windows Enhanced Mode, and EMM386 NOEMS

	Article: Q74536
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running RBase version 3.1 from Microsoft Windows version 3.0 enhanced mode with
	EMM386.EXE loaded in the CONFIG.SYS file using the NOEMS switch may produce a
	"Fatal Error..." message.
	
	CAUSE
	=====
	
	This error can occur if the program information file (PIF) used to run RBase 3.1
	contains any non-zero value in the EMS KB Limit field of the Advanced PIF
	properties dialog box.
	
	WORKAROUND
	==========
	
	Set both the EMS KB Required and KB Limit fields to 0 (zero) to allow RBase 3.1
	to function properly.
	
	Setting both EMS fields to 0 forces RBase 3.1 to make use of XMS extended memory
	instead of EMS memory.
	
	Rbase is manufactured by Microrim, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 6.22 win3 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a
	
	=============================================================================
	

---
layout: page
title: "Q97606: MSAV Err Msg Under Windows 3.0 Real Mode: MWAVABSI.DLL Error"
permalink: kb/097/Q97606/
---

## Q97606: MSAV Err Msg Under Windows 3.0 Real Mode: MWAVABSI.DLL Error

	Article: Q97606
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Anti-Virus for Windows under Microsoft Windows version
	3.0 or 3.0a in real mode, you may receive one or both of the following error
	messages (depending on your system configuration):
	
	  MWAVABSI.DLL Error - Application failed to initialize the library.
	
	-or-
	
	  MWAVABSI.DLL Error
	  Insufficient extended (Windows) memory. Needed: 320000 byte(s).
	
	NOTE: This also happens with Windows 3.1 in standard or enhanced mode under very
	low memory situations (less than 500 kilobytes free).
	
	CAUSE
	=====
	
	These messages occur because Microsoft Anti-Virus for Windows requires expanded
	memory, which Microsoft Windows does not provide in real or standard modes.
	
	Additional query words: 6.22 6.00 MWAV 3.00 3.10 WIN30 WIN31 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

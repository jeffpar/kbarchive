---
layout: page
title: "Q103309: MWAV.EXE Err Msg: Drive Was Not Logged"
permalink: kb/103/Q103309/
---

## Q103309: MWAV.EXE Err Msg: Drive Was Not Logged

	Article: Q103309
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when you try to use Microsoft Anti-Virus
	for Windows (MWAV.EXE):
	
	  Drive was not logged.
	
	CAUSE
	=====
	
	This problem occurs if any of the following conditions exist:
	
	- A logical drive connected through Interlnk was scanned.
	
	-or-
	
	- A local drive with LANtastic network software loaded was scanned.
	
	-or-
	
	- A virus has destroyed the header on the floppy disk that Microsoft Anti-Virus
	  for Windows is attempting to clean. (If you are using the MS-DOS-based
	  version of the Microsoft Anti-Virus program, a message reports that the disk
	  is not recognized or that the drive is not ready. To confirm the header on
	  the floppy disk is damaged, try reading the disk from the MS-DOS command
	  prompt.)
	
	WORKAROUND
	==========
	
	Microsoft Anti-Virus for Windows does not have the ability to scan logical
	drives that have been connected using the Interlnk program that ships with
	MS-DOS 6.0 and 6.2. If you want to scan such drives using Microsoft Anti- Virus,
	you must use Microsoft Anti-Virus for MS-DOS (MSAV.EXE).
	
	If you have LANtastic network software loaded and you receive the error message
	noted above, reboot your computer without loading the LANtastic network software
	and then run Microsoft Anti-Virus for Windows.
	
	NOTE: Unloading the LANtastic network software does not allow you to run
	Microsoft Anti-Virus for Windows; you must reboot your computer without loading
	the LANtastic software.
	
	Additional query words: 6.22 6.00 6.20 interlink
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

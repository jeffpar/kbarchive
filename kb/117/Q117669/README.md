---
layout: page
title: "Q117669: Changing Video Drivers in 3.11--Repeated Prompts for Disk 1"
permalink: kb/117/Q117669/
---

## Q117669: Changing Video Drivers in 3.11--Repeated Prompts for Disk 1

	Article: Q117669
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change the video driver in Windows 3.11 to a driver that has not
	been previously installed (or when you select "New" for a previously installed
	driver), Setup prompts you to insert Disk 1. After you choose OK, it continues
	to prompt you to insert Disk 1 without completing the video driver change.
	
	CAUSE
	=====
	
	This problem occurs because the Windows portion of SETUP.EXE is coded to find
	the file WIN.CNF on Disk 1. With Windows 3.11, this file is on Disk 2 of the
	3.5-inch 1.44-megabyte (MB) disk set and Disk 3 of the 5.25-inch 1.2- MB disk
	set.
	
	RESOLUTION
	==========
	
	To finish Setup, insert Disk 2 of the 3.5-inch 1.44-MB disk set or Disk 3 of the
	5.25-inch 1.2-MB disk set instead of Disk 1, or run SETUP.EXE from the Windows
	directory at an MS-DOS command prompt.
	
	Additional query words: 3.11 vga svga
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

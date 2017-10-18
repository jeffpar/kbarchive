---
layout: page
title: "Q94963: File Manager Formats 512 Bytes Per Sector Geometry Only"
permalink: kb/094/Q94963/
---

## Q94963: File Manager Formats 512 Bytes Per Sector Geometry Only

	Article: Q94963
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	File Manager can format a hard disk drive partition only if the hard disk drive
	geometry supports 512 bytes per sector. You cannot use File Manager to format
	other hard disk drive metrics (such as 1024 bytes per sector).
	
	MORE INFORMATION
	================
	
	If you are unsure what your hard disk drive geometry is, you can find out by
	using the Microsoft Diagnostics (MSD) utility, which ships with Windows. To do
	this, type "msd" (without the quotation marks) at the command prompt and then
	choose Disk Drives from the Main menu.
	
	NOTE: File Manager does not rely on the MS-DOS FORMAT command to perform its disk
	formats. (It does not rely on any MS-DOS command to perform disk functions.)
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

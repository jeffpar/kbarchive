---
layout: page
title: "Q58275: Swapdisk=/E Switch Not Supported in Windows 3.0/3.1"
permalink: /kb/058/Q58275/
---

## Q58275: Swapdisk=/E Switch Not Supported in Windows 3.0/3.1

	Article: Q58275
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The /E parameter for the WIN.INI file swapdisk= setting is not supported by
	Microsoft Windows operating system version 3.0, 3.0a, 3.1, or 3.11.
	
	The swapdisk= /E option allows MS-DOS applications to be swapped directly
	to expanded memory under Microsoft Windows/286 versions 2.x.
	
	Instead of using this parameter, create a RAM drive in expanded memory
	with the RAMDRIVE.SYS utility included with Windows 3.0, 3.0a, and 3.1,
	and swap to the RAM drive by placing its drive letter on the swapdisk=
	line.
	
	Note that the swapdisk= setting applies to Windows 3.0, 3.0a, 3.1, 3.11
	only in real (available only in 3.0 and 3.0a) and standard mode, not
	in 386 enhanced mode.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11 win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

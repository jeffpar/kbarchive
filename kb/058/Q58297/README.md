---
layout: page
title: "Q58297: Qmodem Reboots the Machine in Enhanced Mode"
permalink: kb/058/Q58297/
---

## Q58297: Qmodem Reboots the Machine in Enhanced Mode

	Article: Q58297
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Forbin Project Qmodem versions 4.0 and 4.5 MS-DOS
	communications program under Microsoft Windows 3.0 or 3.1 in 386 enhanced mode,
	the system reboots.
	
	CAUSE
	=====
	
	This problem occurs because Qmodem 4.0 and 4.5 attempt to use expanded memory,
	but do not check for an error return when obtaining the LIM 3.2 expanded memory
	page frame address. On machines where no LIM 3.2 compatible page frame is
	available, Windows returns an error. Qmodem ignores the error, and attempts to
	map data into a nonexistent expanded memory page frame address.
	
	WORKAROUND
	==========
	
	To work around the problem, do one of the following:
	
	- Create a .PIF file that specifies a 0 (zero) limit for EMS memory in the
	  Advanced Options dialog box; this disables EMS for the MS-DOS command prompt
	  under Windows, which allows Qmodem to run properly.
	
	- Rearrange hardware adapters in the machine to free a 64K contiguous area in
	  the upper memory area (UMA) (the area from A000 to EFFF hexadecimal).
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.1 lite light 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

---
layout: page
title: "Q123439: Problems Copying Large Files Using Texel DM 3024 CD-ROM"
permalink: /kb/123/Q123439/
---

## Q123439: Problems Copying Large Files Using Texel DM 3024 CD-ROM

	Article: Q123439
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Texel DM 3024 CD-ROM drive on a system running in a
	multi-threaded environment, such as Windows 95, Windows NT, OS/2, Novell
	NetWare, or Unix, one of the following problems occurs:
	
	- Data corruption during large file (over 1.5 megabytes) copy operations.
	
	  -or-
	
	- Disk errors, such as "Cannot write to Drive C:"
	
	CAUSE
	=====
	
	The Texel DM 3024 CD-ROM drive requires firmware version 1.10 or later to
	function properly in a multi-threaded environment.
	
	RESOLUTION
	==========
	
	It may be possible to determine the CD-ROM drive's firmware version by running
	the diagnostics utilities provided with most SCSI adapters. If no diagnostics
	utilities are available, contact Plextor (formerly Texel) for information about
	how to determine whether or not the CD-ROM drive needs to be updated.
	
	The most recent version of the firmware for this CD-ROM drive is 1.13.
	
	Additional query words: 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

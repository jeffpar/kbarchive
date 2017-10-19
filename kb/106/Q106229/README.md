---
layout: page
title: "Q106229: MemMaker .STS Err Msg (Adaptec 1742A SCSI / ASPIEDOS.SYS)"
permalink: /kb/106/Q106229/
---

## Q106229: MemMaker .STS Err Msg (Adaptec 1742A SCSI / ASPIEDOS.SYS)

	Article: Q106229
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an Adaptec 1742A SCSI card, you may receive an error message
	indicating the MEMMAKER.STS file has been corrupted when you run MS-DOS
	MemMaker.
	
	CAUSE
	=====
	
	This problem occurs when MemMaker tries to determine the size of the
	ASPIEDOS.SYS device driver.
	
	RESOLUTION
	==========
	
	To work around this problem, edit the MEMMAKER.INF file and add the following
	lines:
	
	  ^ASPIEDOS
	
	
	Additional query words: 6.22 6.20 ^ASPI2DOS ^ASPICD 2940 series 1540
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

---
layout: page
title: "Q72735: Loading SMARTDRV.SYS High with Adaptec Controller Hangs System"
permalink: /kb/072/Q72735/
---

## Q72735: Loading SMARTDRV.SYS High with Adaptec Controller Hangs System

	Article: Q72735
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If SMARTDRV.SYS is loaded high on a system with a Micropolis 330 MB hard disk
	model #1578-15 with Adaptec Controller model #1542-B, and it is partitioned into
	a single drive, the system will hang.
	
	Loading SMARTDRV.SYS low before loading anything high solves the problem.
	
	MORE INFORMATION
	================
	
	The disk transfers to the upper memory block (UMB) are not being put at the
	right addresses because the controller is not mapping addresses correctly. The
	only workaround available is to load SMARTDRV.SYS low (in conventional memory).
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch
	Version           : MS-DOS:
	
	=============================================================================
	

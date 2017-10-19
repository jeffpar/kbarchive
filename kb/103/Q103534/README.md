---
layout: page
title: "Q103534: MS-DOS 6.2 CHKDSK Does Not Run DBLSPACE /CHKDSK"
permalink: /kb/103/Q103534/
---

## Q103534: MS-DOS 6.2 CHKDSK Does Not Run DBLSPACE /CHKDSK

	Article: Q103534
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run MS-DOS 6 CHKDSK on a DoubleSpace-compressed drive, it runs DBLSPACE
	with the /CHKDSK parameter. MS-DOS 6.2 CHKDSK does not do this (by design).
	
	To check the integrity of your MS-DOS 6.2 DoubleSpace-compressed drive, run
	ScanDisk.
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	Additional query words: 6.20 spawn spawns
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

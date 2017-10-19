---
layout: page
title: "Q99526: MS-BACKUP Err Msg: Cannot Read Volume From Virtual Memory..."
permalink: /kb/099/Q99526/
---

## Q99526: MS-BACKUP Err Msg: Cannot Read Volume From Virtual Memory...

	Article: Q99526
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to restore files using
	Microsoft Backup:
	
	  Internal Error
	
	  Cannot read volume from virtual memory. 368, Disptree, virtual off, Mem=nnnn
	  Register Version: 6.00.00 02/26/93 06:00 am
	
	CAUSE
	=====
	
	This error message indicates the data on the backup disks may be corrupted.
	
	WORKAROUND
	==========
	
	To work around this problem, delete the copy of the catalog file (xxxxxxxx.FUL,
	.INC, or .DIF) and try to rebuild (not restore) the catalog. The catalog file is
	located on the hard disk drive, usually in the DOS directory.
	
	CAUTION: This problem may be caused by a hardware incompatibility with your
	system. Select the Verify Backup Data option for all subsequent backups.
	
	Additional query words: 6.00 msbackup back up 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

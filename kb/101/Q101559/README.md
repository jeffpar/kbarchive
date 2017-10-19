---
layout: page
title: "Q101559: Microsoft Backup Err Msg: Alert! Unknown Compression of File"
permalink: /kb/101/Q101559/
---

## Q101559: Microsoft Backup Err Msg: Alert! Unknown Compression of File

	Article: Q101559
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to restore backups with Microsoft Backup for MS-DOS or Microsoft
	Backup for Windows, you receive the following error message:
	
	  Alert! Unknown compression of file
	
	CAUSE
	=====
	
	This error occurs when:
	
	- The backups were made with a beta version of Microsoft Backup.
	
	-or-
	
	- You used MS-DOS 6.22 to create a compressed backup and then attempted to
	  restore it using Microsoft Backup for MS-DOS 6.0.
	
	WORKAROUND
	==========
	
	If you made backups with a beta version of Microsoft Backup, there is no
	workaround for this situation. You must create new backups with the final
	release version of MS-DOS 6.0 or later.
	
	If you made backups under MS-DOS 6.22 Backup with compression turned on, either
	restore the data with MS-DOS 6.22 version of Backup, or back up the data with
	compression turned off.
	
	Additional query words: 6.00 back up msbackup mwbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS600
	Version           : MS-DOS:6.0,6.22
	
	=============================================================================
	

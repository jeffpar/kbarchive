---
layout: page
title: "Q97473: RESTORE Err Msg: 'Incorrect DOS Version'"
permalink: kb/097/Q97473/
---

## Q97473: RESTORE Err Msg: 'Incorrect DOS Version'

	Article: Q97473
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message after you use the RESTORE command at
	the MS-DOS command prompt:
	
	  Incorrect DOS version
	
	CAUSE
	=====
	
	This error message occurs because a RESTORE.COM file exists in your DOS
	directory. RESTORE.COM ships with original equipment manufacturer (OEM) versions
	of MS-DOS 5.0. (RESTORE.EXE ships with MS-DOS 6.x.)
	
	MS-DOS 6 and later Upgrade only removes the files it is replacing. Because of
	this, RESTORE.COM remains in the directory. MS-DOS looks for files to execute in
	the following order: .COM, .EXE, and lastly, .BAT. When you use the RESTORE
	command at the MS-DOS command prompt, RESTORE.COM (not RESTORE.EXE) is executed.
	Therefore, you receive the error message.
	
	WORKAROUND
	==========
	
	To correct this problem, delete RESTORE.COM from the DOS directory.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 invalid backup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

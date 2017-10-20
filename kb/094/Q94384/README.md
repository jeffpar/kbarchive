---
layout: page
title: "Q94384: Err Msg: MSBACKUP Program Files Must Be Located on Hard Disk"
permalink: /kb/094/Q94384/
---

## Q94384: Err Msg: MSBACKUP Program Files Must Be Located on Hard Disk

{% raw %}

	Article: Q94384
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
	
	If you try to run Microsoft Backup from a floppy disk to restore files to a hard
	disk drive, the following error message is displayed:
	
	  MSBACKUP program files must be located on your hard disk.
	  You cannot start MSBACKUP from a floppy disk.
	
	WORKAROUND
	==========
	
	To restore files to a hard disk drive that does not have MS-DOS version 6.0 or
	later installed, use the following steps:
	
	1. Insert Disk 1 of the MS-DOS 6.0 or later disk set in your floppy disk drive.
	  Type "setup/m" (without the quotation marks) and press ENTER to install a
	  minimal installation.
	
	2. Remove Disk 1 from your floppy disk drive and restart the computer.
	
	3. Replace Disk 1, type "setup/e" (without the quotation marks) to install
	  optional components.
	
	You can now run Microsoft Backup from the DOS subdirectory and restore files.
	
	
	Additional query words: 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

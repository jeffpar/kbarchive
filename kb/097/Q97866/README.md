---
layout: page
title: "Q97866: MS Backup for Windows Backup to PATH Does Not Overwrite Files"
permalink: kb/097/Q97866/
---

## Q97866: MS Backup for Windows Backup to PATH Does Not Overwrite Files

	Article: Q97866
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Backup for Windows and choose to back up to the MS-DOS
	PATH, Backup does not give you the option to overwrite the files on the
	destination disk if that disk is almost or completely full. This commonly occurs
	when you attempt to reuse disks from a previous backup set. When you use the
	MS-DOS-based version of Microsoft Backup under the same conditions, you have the
	option to overwrite the files on the destination disk.
	
	WORKAROUND
	==========
	
	To work around this problem, use Backup for MS-DOS or format your backup disks
	prior to performing the backup.
	
	MORE INFORMATION
	================
	
	Backup for Windows displays the following error message when there is
	insufficient space on the backup disk:
	
	  Insufficient space on the current volume to create a component file. Insert
	  another volume into drive A.
	
	By contrast, Backup for MS-DOS displays following message, which shows you the
	files that are on the disk and allows you to add to or overwrite them, or
	replace the disk:
	
	  Alert
	
	  You have inserted a disk which contains existing directories and files.
	
	  Do you want to Overwrite this disk, Add to it, or Retry using another disk?
	
	  <Partial file list>
	
	Additional query words: 6.00 mwbackup msbackup 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

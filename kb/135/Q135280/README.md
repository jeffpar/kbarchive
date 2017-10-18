---
layout: page
title: "Q135280: Backup Cannot Span Multiple Disks with Removable Disk Drive"
permalink: kb/135/Q135280/
---

## Q135280: Backup Cannot Span Multiple Disks with Removable Disk Drive

	Article: Q135280
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Backup to back up files to a removable disk other than floppy
	disks, Backup does not prompt you to insert a second disk if the entire backup
	does not fit on one disk. Instead, you receive the following error message:
	
	  Errors occurred during this operation. Do you want to view them now?
	
	The incomplete backup volume on the first disk is automatically deleted and
	cannot be restored.
	
	RESOLUTION
	==========
	
	When you are using Backup to back up files to a removable disk other than floppy
	disks, perform only backups that fit on one disk. Large backups that require
	more than one disk should be broken up into smaller backups, each of which fits
	on one disk.
	
	MORE INFORMATION
	================
	
	Although Backup does support the use of removable disk drives such as Bernoulli
	and Syquest drives, it does not support performing backups that span multiple
	disks with these drives. Backup can span multiple disks only on floppy disk
	drives connected to the primary floppy disk drive controller.
	
	
	Additional query words: zip zipdrive iomega
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

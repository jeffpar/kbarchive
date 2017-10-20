---
layout: page
title: "Q135204: Cannot Restore Files from HP 1300T Rewritable Optical Disk"
permalink: /kb/135/Q135204/
---

## Q135204: Cannot Restore Files from HP 1300T Rewritable Optical Disk

{% raw %}

	Article: Q135204
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use Backup to back up files to a Hewlett-Packard (HP) 1300T Rewritable
	Optical Disk (with 1024-byte sectors), but when you try to restore the files,
	Backup prompts you to insert the next disk before the Restore operation is
	complete.
	
	CAUSE
	=====
	
	Backup does not support sector sizes of more than 512 bytes.
	
	RESOLUTION
	==========
	
	Before you back up to an HP 1300T Rewritable Optical Disk, reformat the disk
	using 512-byte sectors.
	
	
	NOTE: Disk linkage is not supported on removable disk drives. Do not try to back
	up more files than will fit on one disk in each Backup operation.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}

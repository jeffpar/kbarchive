---
layout: page
title: "Q98539: 3Server Restore Fails on HPFS Volumes"
permalink: kb/098/Q98539/
---

## Q98539: 3Server Restore Fails on HPFS Volumes

	Article: Q98539
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	With Microsoft LAN Manager 2.1, restoring files to a 3Server HPFS partition
	using Backman or Backup2 can corrupt files. 3Backup and 3Restore appear to
	work correctly.
	
	The problem occurs when you backup and restore to a 3Server HPFS partition
	(not to a 3Server FAT partition or to a PC server HPFS partition)on the
	same system the tape drive is on. Therefore the workaround is to restore
	the data across the net. The two options are:
	
	1. Restore data from another system with a tape drive
	
	2. Restore data to another server and then copy it over.
	
	STATUS
	======
	
	This was corrected with the 2.2 tape.
	
	Additional query words: 2.10 2.1
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

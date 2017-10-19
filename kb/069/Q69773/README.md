---
layout: page
title: "Q69773: PC DB: Backing Up a Mail Database"
permalink: /kb/069/Q69773/
---

## Q69773: PC DB: Backing Up a Mail Database

	Article: Q69773
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Backing up the Mail database is a key responsibility of the Mail system
	administrator and consists of saving ALL files, from where the Mail database
	normally resides, to an alternate media.
	
	The media can be floppy disks, a streaming tape drive, or another computer on the
	network. The XCOPY or BACKUP command in MS-DOS can be used to perform the backup
	procedure.
	
	MORE INFORMATION
	================
	
	It is very important that the ENTIRE Mail database be backed up. A mail system
	database contains zero length files and empty directories. Whatever the backup
	method being used, make sure the Backup utility backs up empty directories and
	zero length files.
	
	You CANNOT back up a portion of the database. Remember, a few minutes of backup
	can save many hours of potential anguish if the original file is lost. Backing
	up the executables directory is not required because these files can be
	retrieved from the original system disks.
	
	Additionally, it is important that no users are using the mail system during the
	backup process. If messages are being sent during this operation, it is likely
	you will copy a file that is in the stages of partial update.
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	

---
layout: page
title: "Q33131: When One Disk in a BACKUP/RESTORE Sequence Is Bad"
permalink: kb/033/Q33131/
---

## Q33131: When One Disk in a BACKUP/RESTORE Sequence Is Bad

	Article: Q33131
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a disk in the series of backup disks is damaged, it is still possible to
	restore the remainder of the disks by doing the following:
	
	1. Insert the first backup disk in the sequence, disk BACKUP 001, in the source
	  drive (assuming for this example that Drive A is the source drive and Drive C
	  is the destination drive) and type the following:
	
	  " RESTORE A: C:\*.* /S" (without the quotation marks)
	
	  The first disk will be restored, and it will prompt you for additional disks
	  until you reach the damaged disk.
	
	2. When it is time to insert the bad disk, press CTRL+C to exit out of
	  RESTORE.COM.
	
	3. Place the next disk in the sequence into the source drive (A: in this
	  example) and retype the previous command again.
	
	4. RESTORE.COM will display a warning that this disk is out of sequence, and
	  will ask if it should continue. Respond "Yes" to this prompt.
	
	The restoration process will continue as normal, except for the data that was
	contained on the bad disk. You must stop the restoration process at the bad disk
	and reenter the command to start the restoration with the next usable disk.
	
	Additional query words: 3.30 3.30a 4.00 5.00 5.00a 6.00 6.20 6.21 6.22 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

---
layout: page
title: "Q73615: Unable to Install MS-DOS 5.0 from Backup Copy"
permalink: /kb/073/Q73615/
---

## Q73615: Unable to Install MS-DOS 5.0 from Backup Copy

	Article: Q73615
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS 5.0 Setup does not recognize backup disks that have been
	manually copied. You must use either the MS-DOS DISKCOPY command to back up the
	MS-DOS 5.0 disks or you must manually add a label to each of the disks.
	
	Note: DISKCOPY copies the disk label as well as the files.
	
	MORE INFORMATION
	================
	
	The disks for MS-DOS 5 Upgrade are each labeled "Disk #" (where # is the disk
	number). The backup disks must be given labels corresponding to the originals.
	To do this, do the following:
	
	1. Insert the backup you have created for Disk 1 in the floppy drive.
	
	2. Type <drive letter>: (for example, a:) and press ENTER to make that
	  drive the current drive.
	
	3. Type "label" (without the quotation marks) and press ENTER.
	
	4. Type "disk #" where # is the number of the disk, and press ENTER. (Note:
	  There are six spaces between "disk" and the disk number.)
	
	5. Repeat steps 1-4 for each of the MS-DOS 5 Upgrade disks.
	
	Note: You must wait for the computer to prompt you to type in the label. You
	cannot enter the parameter on the same line as the label command or the computer
	will think that there are two parameters due to the space between the word
	"disk" and its number.
	
	You can also use the above method to copy to different size disks. For example,
	you can copy 360K disks to 720K disks, or 720K disks to 1.2 MB disks; however,
	you cannot copy two low-density MS-DOS 5 Upgrade disks onto one high-density
	disk because the labeling will not work correctly.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

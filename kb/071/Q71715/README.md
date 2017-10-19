---
layout: page
title: "Q71715: MS-DOS: Unable to Change Volume Label"
permalink: /kb/071/Q71715/
---

## Q71715: MS-DOS: Unable to Change Volume Label

	Article: Q71715
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the volume label with the LABEL command, it remains
	the same.
	
	CAUSE
	=====
	
	The volume label is stored in a directory entry in the root directory. A root
	directory entry that has the volume label attribute set is regarded as the
	volume label by MS-DOS. If the volume label entry is in lowercase, MS- DOS will
	be unable to modify it.
	
	MS-DOS will never write a lowercase volume label to a disk. However, it is
	possible that a third-party program could write a lowercase volume label.
	
	When MS-DOS displays the volume label, such as in a DIR or LABEL command, it
	converts it to uppercase. This means that the volume label may appear in
	uppercase when MS-DOS displays it, but in actuality it could be lowercase.
	
	MS-DOS is unable to correct this problem. A third-party disk editor must be used
	to change the volume label to uppercase. Only a person familiar with MS-DOS
	directory structures should attempt to modify the root directory.
	
	The only other alternative to using a disk editor to correct this problem is to
	reformat the drive. Formatting will erases all the information stored on the
	drive including the volume label.
	
	Additional query words: 3.30 4.00 4.01 4.01a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	

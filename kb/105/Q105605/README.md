---
layout: page
title: "Q105605: Using DISKCOPY to Make Single-Pass Copies"
permalink: /kb/105/Q105605/
---

## Q105605: Using DISKCOPY to Make Single-Pass Copies

{% raw %}

	Article: Q105605
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 29-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 6.2 DISKCOPY command uses your hard disk as an interim storage area,
	which makes copying from one floppy disk to another faster and easier.
	
	MORE INFORMATION
	================
	
	DISKCOPY stores its temporary data in the location specified by the SET TEMP=
	environment variable. It does not use expanded memory services (EMS) or extended
	memory specification (XMS) memory.
	
	If there is no SET TEMP environment variable DISKCOPY writes the temporary data
	to the root directory of the hard disk drive. If the TEMP environment variable
	is set to a nonexistent directory, there is insufficient space on the hard disk
	drive, or your set TEMP environment variable points to a RAM drive with
	insufficient space, DISKCOPY reverts to its previous multiple- pass behavior
	after displaying the following message:
	
	  Error creating image file.
	  Diskcopy will revert to a multiple-pass copy.
	
	Making Faster Single-Pass Copies with a RAM Drive
	-------------------------------------------------
	
	You can increase the single-pass copy speed by setting your TEMP environment
	variable to a RAM drive. For example, if your RAM drive is drive D, use SET
	TEMP=D:\.
	
	NOTE: Make the RAM drive slightly larger than the largest media you will be
	copying. For example, to copy a 1.44-megabyte disk with a RAM drive, create a
	RAM drive of 1450 kilobytes.
	
	
	Additional query words: 6.22 6.20 ramdrive single pass one
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}

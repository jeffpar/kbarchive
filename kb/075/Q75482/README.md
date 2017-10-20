---
layout: page
title: "Q75482: Setup Repeatedly Prompts for Same Disk"
permalink: /kb/075/Q75482/
---

## Q75482: Setup Repeatedly Prompts for Same Disk

{% raw %}

	Article: Q75482
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Setup program repeatedly asks for a disk, even though the disk being
	prompted for is in the proper floppy drive, it is possible that the MS-DOS 5
	Upgrade disks are mislabeled. This could cause the following error message:
	
	  Wrong disk
	
	MORE INFORMATION
	================
	
	To verify that the disk is mislabeled, insert the suspect Microsoft MS-DOS 5
	Upgrade disk into drive A (or B), access that drive, and type the following
	command from the A (or B) prompt:
	
	  " VOL " (without the quotation marks)
	
	The disk is mislabeled if the result is
	
	  Volume in drive A is DISK      #
	
	  (where # is different than the number on the external disk label).
	
	If the disk is mislabeled, perform the VOL command for all disks to make sure
	that all of the disks are accounted for. If there are no duplicates, then two
	workarounds can be performed to correct the problem.
	
	Note: Mislabeled disks are not damaged.
	
	WORKAROUND
	==========
	
	- When prompted for a specific disk, insert the correct disk as verified by the
	  VOL command, not by the number located on the external disk label.
	
	-or-
	
	- If your current version of MS-DOS is 3.0 or later, make a working directory
	  on drive C and copy all disks to that directory. Run the Setup program from
	  the working directory on drive C.
	
	Additional query words: 5.00 install
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}

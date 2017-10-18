---
layout: page
title: "Q137320: MS Select: Bad/Missing Sector Error When Duplicating Disks"
permalink: kb/137/Q137320/
---

## Q137320: MS Select: Bad/Missing Sector Error When Duplicating Disks

	Article: Q137320
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Select 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to duplicate disks from a disk set generated with the Microsoft
	Select compact discs, you may receive the error message:
	
	  Bad/missing sector error
	
	RESOLUTION
	==========
	
	To create disks on duplicating machines, use the following steps:
	
	1. Create a 1.2 MB disk set from the Select CD.
	
	2. Create a 1.44 MB disk set by using the XCOPY utility to copy all of files on
	  the disks in Step 1 to a 1.44 MB disk set.
	
	3. Use the 1.44 MB disk set created in Step 2 as the master set for use in the
	  disk duplicating machine, or use DSKIMAGE to create the *.IMG files provided
	  the disk duplicator requires the utility.
	
	MORE INFORMATION
	================
	
	The disk images for some of the products on the Select compact discs are 1.2 MB.
	The utility Select uses to create the disks makes a 5.25" or 3.5" disk set that
	can be used for installation. For disk duplication machines, there may be a
	problem if 5.25" (1.2 MB) disks are not used.
	
	Additional query words: August 1995 Interim Release multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSelect kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

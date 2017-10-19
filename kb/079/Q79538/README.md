---
layout: page
title: "Q79538: 360K Floppies Used in 1.2 MB Drive May Be Unreadable"
permalink: /kb/079/Q79538/
---

## Q79538: 360K Floppies Used in 1.2 MB Drive May Be Unreadable

	Article: Q79538
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Double-sided, double-density 5.25-inch (360K) disks, when formatted in a 360K
	drive and then written to on a high density 5.25-inch (1.2 MB) drive, may no
	longer be readable in the 360K drive.
	
	Conversely, disks formatted as 360K in a 1.2 MB drive and then written to in a
	360K drive may no longer be readable in the 1.2 MB drive.
	
	MORE INFORMATION
	================
	
	360K disk drives write a relatively wide track at 40 tracks per inch. 1.2 MB
	drives normally write at 80 tracks per inch, and therefore write a somewhat
	narrower data track. This renders the use of 360K disk interchangeably between
	the two drives as a less than reliable means of exchanging data, because the
	result can be a narrow data track superimposed upon a wide data track, or vice
	versa.
	
	There are two methods to increase the reliability of disk data transfer between
	these two drive types:
	
	Method 1
	--------
	
	To transfer data from a 1.2 MB drive to a 360K drive using a 360K disk, do the
	following:
	
	1. Start with a blank, unformatted 360K disk. In the 1.2 MB drive, format the
	  disk using the /4 or /f:360 option, as follows:
	
	     format x: /4
	
	  or, for MS-DOS version 4.0 or later,
	
	     format x: /f:360
	
	  (where "x" is the 1.2 MB drive designator, and assuming the MS-DOS directory
	  is in the path).
	
	  This will allow the format of the 360K media in the 1.2 MB drive.
	
	2. Perform reads and writes on the media while in the 1.2 MB drive, but perform
	  ONLY reads from the disk while in the 360K drive. Writing to the media in the
	  360K drive may render it unreadable.
	
	Method 2
	--------
	
	To transfer data from a 360K drive to a 1.2 MB drive using 360K media, do the
	following:
	
	1. Start with a blank, unformatted 360K disk. Format the disk as normal in the
	  360K drive.
	
	2. Perform reads and writes on the disk while in the 360K drive, but perform
	  ONLY reads from the media while in the 1.2 MB drive. Writing to the media in
	  the 1.2 MB drive may render it unreadable.
	
	For more information on the FORMAT command, consult your MS-DOS manual.
	
	Additional query words: 6.22 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

---
layout: page
title: "Q101240: DBLSPACE Msg: Drive X Already Has an Estimated Compression..."
permalink: kb/101/Q101240/
---

## Q101240: DBLSPACE Msg: Drive X Already Has an Estimated Compression...

	Article: Q101240
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you have a DoubleSpace-compressed drive that is less than 25 percent full,
	the DBLSPACE /RATIO command results in the following error message:
	
	  DoubleSpace is examining drive <drive letter>.
	  Drive <drive letter> already has an estimated compression ratio of nn.n
	  to 1.
	
	If the drive is less than 25 percent full, you can set the estimated compression
	ratio (ECR) manually, but DoubleSpace cannot set the ECR equal to the actual
	compression ratio (ACR).
	
	MORE INFORMATION
	================
	
	DBLSPACE /RATIO adjusts the ECR to the ACR, unless the DoubleSpace drive is less
	than 25 percent full.
	
	When a drive is less than 25 percent full, the data contained in it may not be
	representative of the data the drive will eventually hold. Therefore, on
	average, it is better to maintain a 2:1 compression ratio until the drive is 25
	percent full.
	
	In some cases, if the ECR is set to a low value, the ratio is adjusted when you
	run DBLSPACE /RATIO. However, if the ECR is then set to a high value, the ratio
	is not adjusted because by setting the ECR higher, the space used falls below 25
	percent. Subsequent use of the DBLSPACE /RATIO command results in the message
	noted above.
	
	Additional query words: 6.00 % double space 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

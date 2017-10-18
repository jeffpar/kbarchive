---
layout: page
title: "Q73726: Sperry 286 BIOS Versions Earlier Than 1.57 Need an Upgrade"
permalink: kb/073/Q73726/
---

## Q73726: Sperry 286 BIOS Versions Earlier Than 1.57 Need an Upgrade

	Article: Q73726
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Sperry PC computers may have a problem reading a 1.2 MB floppy disk under
	MS-DOS versions 5.0 and later if the BIOS version is earlier than 1.57. The
	common error message is:
	
	  Error: Parameter not compatible
	
	  Format terminated
	
	To check the BIOS version on a Sperry model PC, type the following, pressing
	ENTER after each line:
	
	  " DEBUG
	  D F000:8080
	  Q" (without the quotation marks)
	
	This will display the version number.
	
	MORE INFORMATION
	================
	
	To order new BIOS (1.58), contact Sperry at (800) 448-1424, 8:00 to 5:00 Eastern
	time.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

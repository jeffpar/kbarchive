---
layout: page
title: "Q134528: Cannot Format Startup Disk During Setup"
permalink: kb/134/Q134528/
---

## Q134528: Cannot Format Startup Disk During Setup

	Article: Q134528
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are creating a Startup Disk during the installation of Windows 95,
	Setup may be unable to format the disk you insert in the floppy disk drive.
	
	CAUSE
	=====
	
	This problem can occur if you insert a 2.0- or 2.88-MB floppy disk in the drive.
	
	RESOLUTION
	==========
	
	Remove the disk and insert a disk with a capacity of no more than 1.44 MB in the
	drive.
	
	MORE INFORMATION
	================
	
	Windows 95 does not support floppy disks with a capacity greater than 1.44 MB.
	Using a 2.0- or 2.88-MB floppy disk to create the Startup Disk may generate a
	"Device not ready" error message.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

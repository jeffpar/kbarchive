---
layout: page
title: "Q136742: Drives Use MS-DOS Compatibility Mode with Iomega Zip Drive"
permalink: kb/136/Q136742/
---

## Q136742: Drives Use MS-DOS Compatibility Mode with Iomega Zip Drive

	Article: Q136742
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install an Iomega Zip Drive connected to a parallel port, you find
	that the physical drives in your computer are using MS-DOS Compatibility mode.
	
	CAUSE
	=====
	
	The real-mode Guest.exe program supplied by Iomega is designed to allow you to
	access the Zip Drive in MS-DOS and Windows 95, causing the drives to use MS-DOS
	Compatibility mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Use the following steps to install the protected-mode driver:
	
	  1. In Control Panel, double-click the Add New Hardware icon.
	
	  2. Click Next, click the No option button, and then click Next.
	
	  3. Click Other Devices, and then click Next.
	
	  4. In the Manufacturers box, click Iomega, and then click Have Disk.
	
	  5. Install the files from the Windows 95 CD-ROM by inserting the CD-ROM in
	     the drive, typing the following line in the Copy Manufacturer's Files From
	     box, and then clicking Next
	
	  <drive>:\drivers\storage\iomega
	
	     where <drive> is the drive letter of the CD-ROM drive.
	
	  6. After the files are copied, click Finish.
	
	  7. When you are prompted to restart your computer, do so.
	
	- Contact Iomega to inquire about obtaining a driver for the Zip Drive for use
	  in Windows 95.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

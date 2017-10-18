---
layout: page
title: "Q137643: Diskcopy Cannot Copy a Compressed Floppy Disk"
permalink: kb/137/Q137643/
---

## Q137643: Diskcopy Cannot Copy a Compressed Floppy Disk

	Article: Q137643
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DISKCOPY command to copy a floppy disk that has been compressed
	with DriveSpace or DoubleSpace, you receive the following error message:
	
	  Drive types or diskette types are not compatible. Copy process ended.
	
	CAUSE
	=====
	
	Diskcopy.com does not unmount the compressed volume before beginning the copy
	process.
	
	RESOLUTION
	==========
	
	To copy a compressed floppy disk, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click DriveSpace.
	
	2. In the Drives On This Computer box, click the drive containing the compressed
	  floppy disk.
	
	3. On the Advanced menu, click Unmount.
	
	4. In Windows Explorer or My Computer, use the right mouse button to click the
	  drive containing the compressed floppy disk, and then click Copy Disk on the
	  menu that appears.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

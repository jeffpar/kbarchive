---
layout: page
title: "Q155369: Error Formatting Seagate Drive Using Adaptec Controller"
permalink: /kb/155/Q155369/
---

## Q155369: Error Formatting Seagate Drive Using Adaptec Controller

	Article: Q155369
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to format a Seagate ST31051N hard disk using an Adaptec AHA-1740a
	or AHA-1742a controller with the Format.com tool from Microsoft MS-DOS 6.22 or
	Windows 95, you may receive one or more of the following error messages:
	
	  - Drive not ready.
	
	  - Cannot write directory, format failed.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Use the Adaptec 1740/42a EISA configuration tool to reduce the drive
	  throughput speed to 5.0 MB/sec. Please refer to the Adaptec controller
	  documentation for additional information about this process.
	
	- Use a different controller.
	
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

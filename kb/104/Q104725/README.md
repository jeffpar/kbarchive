---
layout: page
title: "Q104725: How to Configure ScanDisk to Monitor Read/Write/Seek Times"
permalink: kb/104/Q104725/
---

## Q104725: How to Configure ScanDisk to Monitor Read/Write/Seek Times

	Article: Q104725
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ScanDisk has the capability to monitor the average read, write, and seek times
	during surface analysis. If ScanDisk determines a test of a particular area is
	taking too long, ScanDisk warns you that the area is nearing failure and offers
	to correct the data in the affected clusters.
	
	This functionality is inactive by default but can be enabled by using a command
	line switch or by changing a setting in the SCANDISK.INI file.
	
	MORE INFORMATION
	================
	
	To activate this functionality when you run ScanDisk, use the /TIME switch. For
	example, type "scandisk c: /time" (without the quotation marks) at the MS-DOS
	command prompt and then press ENTER.
	
	To configure ScanDisk to use this functionality every time you run it, use MS-DOS
	Editor to edit the Environment section of the SCANDISK.INI file and change
	"ScanTimeOut=off" (without the quotation marks) to "ScanTimeOut=on" (without the
	quotation marks).
	
	For more information on how ScanDisk fixes bad sectors, query on the following
	words in the Microsoft Knowledge Base:
	
	  " how and scandisk and fixes and bad and sectors " (without the quotation
	  marks)
	
	Additional query words: 6.20 turn on turned off
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

---
layout: page
title: "Q106426: ScanDisk May Perform Surface Scan Under Windows"
permalink: /kb/106/Q106426/
---

## Q106426: ScanDisk May Perform Surface Scan Under Windows

	Article: Q106426
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ScanDisk is designed to run in /CHECKONLY mode under Windows. However, in rare
	circumstances, you can get ScanDisk to perform a surface scan under Windows by
	typing SCANDISK /CHECKONLY /SURFACE.
	
	CAUSE
	=====
	
	This problem occurs when you run SCANDISK /CHECKONLY /SURFACE.
	
	WARNING: Since there is a slight chance of data loss when you run SCANDISK
	/CHECKONLY /SURFACE under Windows, Microsoft recommends you run SCANDISK /
	CHECKONLY under Windows.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

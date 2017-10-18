---
layout: page
title: "Q216098: Visual C++ IDE Slows When Files Are in Many Directories"
permalink: kb/216/Q216098/
---

## Q216098: Visual C++ IDE Slows When Files Are in Many Directories

	Article: Q216098
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC500 kbVC600 kbDSupport kbGrpDSTools
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While working in Visual C++ on a project with source files in many directories,
	the performance of the IDE may appear to be slow or non-responsive.
	
	CAUSE
	=====
	
	This can happen if you have your source files spread across 63 or more
	directories on FAT or FAT32 partitions. The method that Visual C++ uses to get
	file change notifications scans source files in the 63rd and above directories
	every 5 seconds.
	
	
	RESOLUTION
	==========
	
	Some possible resolutions are:
	
	- If your operating system is Windows NT or Windows 2000, place all of your
	  source files on an NTFS partition.
	
	NOTE: If the project is on an NTFS partition, Developer Studio scans a single
	file so the amount of activity should be significantly less.
	
	- Place your source files in less than 63 directories.
	
	- Reduce the number of source files in the 63rd and above directories.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	
	REFERENCES
	==========
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC500 kbVC600 kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

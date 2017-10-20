---
layout: page
title: "Q114264: PC Tools Utilities Fail When 32-Bit Access Is Enabled"
permalink: /kb/114/Q114264/
---

## Q114264: PC Tools Utilities Fail When 32-Bit Access Is Enabled

{% raw %}

	Article: Q114264
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows for Workgroups 3.11 with 32-bit file access enabled, the
	Windows-based utilities in Central Point Software PC Tools for Windows (such as
	Undelete and Optimize) fail, and the following error is generated:
	
	  Exit Windows and run the MS-DOS version of this utility. Interrupt 26 (Direct
	  sector write) blocked to preserve volume integrity.
	
	CAUSE
	=====
	
	This problem occurs when 32-bit file access is enabled and you run any
	application or utility that calls interrupt 26.
	
	RESOLUTION
	==========
	
	To work around this problem either:
	
	- Disable 32-bit file access.
	
	  -or-
	
	- Obtain the file FIX32B.EXE from the Central Point bulletin board service
	  (BBS) or the Central Point library on CompuServe.
	
	  NOTE: FIX32B.EXE is not supported by Microsoft. Customers must call Central
	  Point for assistance with this file.
	
	MORE INFORMATION
	================
	
	FIX32B.EXE is a self-extracting file containing all the required files to allow
	PC Tools for Windows Diskfix, Optimizer, and File Manager Undelete utilities to
	run with Windows for Workgroups 3.11 32-bit file access. It includes "readme"
	files in English, German, and French.
	
	IMPORTANT: Do not install this patch unless you have both PC Tools for Windows
	2.0 and Windows for Workgroups 3.11.
	
	The products included here are manufactured by Central Point Software, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.11 CP PCT pctools PCTW 2 Vfathlp.386 vfat 1.0 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}

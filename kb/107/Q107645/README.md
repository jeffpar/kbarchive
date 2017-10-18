---
layout: page
title: "Q107645: How to Disable Write Caching for the 32-Bit File System"
permalink: kb/107/Q107645/
---

## Q107645: How to Disable Write Caching for the 32-Bit File System

	Article: Q107645
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups version 3.11 caches disk writes by default when the
	32-bit file system is enabled. This includes MS-DOS DoubleSpace 6.2 volumes;
	however, it does not include third-party disk-compression systems.
	
	MORE INFORMATION
	================
	
	To disable write caching with the 32-bit file system, add the following line to
	the [386Enh] section of the SYSTEM.INI file:
	
	       ForceLazyOff=<drivelist>
	
	where <drivelist> is the list of drives in which you want to disable write
	caching. (Do not use any delimiters or spaces.) For example, the line
	
	       ForceLazyOff=CDF
	
	would disable write caching on drives C, D, and F.
	
	For more information about the 32-bit file system, query on the following words
	in the Microsoft Knowledge Base:
	
	  wfwg and vfat and 32-bit
	
	Additional query words: dblspace 3.11 write lazywrite on off force lazy forcelazy lazyon forcelazyon writes forcewrites lazywrites vcache
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

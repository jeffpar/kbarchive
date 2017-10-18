---
layout: page
title: "Q299274: INFO: CoFreeUnusedLibrariesEx Platform Requirements"
permalink: kb/299/Q299274/
---

## Q299274: INFO: CoFreeUnusedLibrariesEx Platform Requirements

	Article: Q299274
	Product(s): Microsoft Programming Utilities
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbCOMt kbGrpDSVCDB kbDSupport
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM, used with:
	   - Microsoft Windows 95 
	   - Microsoft Windows 98 
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CoFreeUnusedLibrariesEx function is not available in Microsoft Windows 95/98
	or Microsoft Windows NT/2000 systems. This function will be available in
	Microsoft Windows XP and later systems.
	
	NOTE: This article will be updated when this feature is included in future
	service pack releases for Windows 9x/NT/2000 systems.
	
	
	MORE INFORMATION
	================
	
	COM supplies functions to reclaim memory held by DLLs containing components.
	CoFreeUnusedLibrariesEx unloads any DLLs that are no longer in use and whose
	specified unload delay has expired.
	
	CoFreeUnusedLibrariesEx is available in Windows XP and later systems. On earlier
	Windows systems, use the CoFreeUnusedLibraries function, which has a ten-minute
	delay for multithreaded apartments (MTAs) and neutral apartments (NAs), and no
	delay for single-threaded apartments (STAs).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbGrpDSVCDB kbDSupport 
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

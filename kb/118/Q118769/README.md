---
layout: page
title: "Q118769: Norton Utilities NDOS Claims It Is Running Under Windows 3"
permalink: kb/118/Q118769/
---

## Q118769: Norton Utilities NDOS Claims It Is Running Under Windows 3

	Article: Q118769
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run NDOS from Norton Utilities 7.0 or 8.0 in an MS-DOS window, you
	receive the following information:
	
	  NDOS XMS swapping initialized (xK)
	  NDOS running under Windows 3 in 386 enhanced mode
	
	  DOS version 7.0
	  NDOS, Norton Utilities version x, Copyright xxxx by Symantec Corp.
	
	CAUSE
	=====
	
	This message occurs because NDOS is written to verify the Windows mode it is
	running in, not the version number.
	
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, contact Symantec.
	
	RESOLUTION
	==========
	
	NDOS should run correctly; however, it needs to be updated to reflect the
	version.
	
	
	MORE INFORMATION
	================
	
	NDOS is manufactured by Symantec, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: ndos.pif ndos.com nu 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	

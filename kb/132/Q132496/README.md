---
layout: page
title: "Q132496: Err Msg: Invalid VxD Dynamic Link Call to Device Number 0005"
permalink: /kb/132/Q132496/
---

## Q132496: Err Msg: Invalid VxD Dynamic Link Call to Device Number 0005

	Article: Q132496
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows, you may receive the following error message:
	
	  Invalid VxD dynamic link call to device number 0005, service 0001. Your
	  Windows configuration is invalid. Run the Windows Setup program again to
	  correct this problem.
	
	CAUSE
	=====
	
	This error can occur if the following line is missing from the [386Enh] section
	of the SYSTEM.INI file:
	
	      device=*vtd
	
	RESOLUTION
	==========
	
	Remove or remark out any reference to third-party virtual timer drivers in the
	SYSTEM.INI file and then add the following line to the [386Enh] section of the
	file:
	
	      device=*vtd
	
	MORE INFORMATION
	================
	
	This behavior can occur if the VTDA.386 file included with the Windows 3.11
	Refresh Files is missing or damaged.
	
	Additional query words: 3.10 3.11 vtd
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

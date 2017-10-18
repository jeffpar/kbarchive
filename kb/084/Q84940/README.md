---
layout: page
title: "Q84940: Setup Error: File xxx.xxx Open/Creation Access Denied"
permalink: kb/084/Q84940/
---

## Q84940: Setup Error: File xxx.xxx Open/Creation Access Denied

	Article: Q84940
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows or Windows for Workgroups Setup displays the following error
	message when you reinstall Windows or Windows for Workgroups
	
	  File <xxx.xxx> open/creation access denied. This file may be in use by
	  another application or is in use by the operating system.
	
	where <xxx.xxx> is TIMER.DRV, MMSYSTEM.DLL, or Screen Font files (*.FONs).
	
	CAUSE
	=====
	
	This message appears when all the files have been deleted from the Windows
	directory but not from the Windows SYSTEM subdirectory.
	
	If you choose Retry after receiving this error message, the same message is
	displayed again. If you choose Skip, the files are not be copied to the Windows
	SYSTEM subdirectory. However, this should not affect the Windows installation
	because the files are already present in the Windows SYSTEM subdirectory.
	
	Additional query words: 3.10 3.11 setup error access denied file copy
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

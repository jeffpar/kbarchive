---
layout: page
title: "Q106271: WINVER.EXE Reports Incorrect Version"
permalink: /kb/106/Q106271/
---

## Q106271: WINVER.EXE Reports Incorrect Version

	Article: Q106271
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When WINVER.EXE is executed from within Microsoft Windows for Workgroups 3.11,
	it reports "386 Enhanced Mode Windows Version 3.10," but when executed from an
	MS-DOS Prompt or outside of Windows, it reports "Windows for Workgroups Version
	3.11."
	
	MORE INFORMATION
	================
	
	When executed from within Windows, WINVER.EXE does a "GetVersion" API call,
	which returns version 3.10 from the kernel. The version that the kernel reports
	was not changed for this version of Windows for Workgroups.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

---
layout: page
title: "Q266786: Error Message Appears After Installation of pcAnywhere"
permalink: /kb/266/Q266786/
---

## Q266786: Error Message Appears After Installation of pcAnywhere

	Article: Q266786
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the pcAnywhere program by Symantec, you may receive the
	following error message:
	
	  An error occurred while Windows was working with the control panel file
	  c:\winnt\system32\desk.cpl
	
	CAUSE
	=====
	
	This behavior can occur because of a conflict between the video drivers that the
	computer uses and the drivers that pcAnywhere uses. This conflict usually occurs
	with the Awvideo.dll file.
	
	WORKAROUND
	==========
	
	To work around this behavior, prevent the Awvideo.dll file from loading, and
	then reinstall the driver that reloads the video driver.
	
	MORE INFORMATION
	================
	
	1. Rename the Awvideo.dll file.
	
	2. Install the correct video driver.
	
	3. Rename the Awvideo.dll file back to its original name.
	
	If a "blue-screen" error message appears, you may need to refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q176989 Stop: C0000143 Caused by pcAnywhere
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

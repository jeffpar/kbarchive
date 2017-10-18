---
layout: page
title: "Q85331: BUG: System Menu Wrong for CS_NOCLOSE-Style MDI Child"
permalink: kb/085/Q85331/
---

## Q85331: BUG: System Menu Wrong for CS_NOCLOSE-Style MDI Child

	Article: Q85331
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbMDI kbMenu kbGrpDSUser kbOSWin310bug kbWndw
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application registers a window class with the CS_NOCLOSE style and
	creates a multiple document interface (MDI) child window using the class, the
	menu items in the child window's system menu are incorrect. Specifically, the
	Switch To option appears where the Next option belongs. Choosing Switch To
	activates the Windows Task Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMDI kbMenu kbGrpDSUser kbOSWin310bug kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	

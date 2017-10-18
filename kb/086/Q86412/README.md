---
layout: page
title: "Q86412: BUG: MDI More Windows Dialog Activates Wrong Child"
permalink: kb/086/Q86412/
---

## Q86412: BUG: MDI More Windows Dialog Activates Wrong Child

	Article: Q86412
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbMDI kbGrpDSUser kbOSWin310bug kbWndw
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a multiple document interface (MDI) application developed for Microsoft
	Windows version 3.1, when the application creates more than nine MDI child
	windows, the user chooses More Windows from the Window menu, and selects an MDI
	child window to activate from the list displayed in the Select Window dialog
	box, the application activates a different window.
	
	CAUSE
	=====
	
	When one or more MDI child windows are hidden by an application, the default
	frame window procedure (DefFrameProc) activates the wrong window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMDI kbGrpDSUser kbOSWin310bug kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	

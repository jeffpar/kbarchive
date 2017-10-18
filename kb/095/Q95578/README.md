---
layout: page
title: "Q95578: PRB: Double-Click Does Not Close Win 3.1 Maximized MDI Child"
permalink: kb/095/Q95578/
---

## Q95578: PRB: Double-Click Does Not Close Win 3.1 Maximized MDI Child

	Article: Q95578
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbMDI kbSDKPlatform kbGrpDSUser kbWndw
	Last Modified: 12-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Double-clicking the System menu (sometimes called the Control menu) box of a
	maximized MDI (multiple document interface) child window does not close the
	child window in Microsoft Windows version 3.1.
	
	NOTE: Windows version 3.0 does not implement closing a maximized MDI child window
	by double-clicking its System menu box. For a solution to this problem, query on
	the following words in the Microsoft Knowledge Base:
	
	  MDI and double-click and maximized
	
	CAUSE
	=====
	
	In Windows version 3.1, you can close a maximized child window by double-
	clicking its System menu box, but the design of this feature assumes that the
	MDI client window is the first child of the MDI frame window. If the MDI frame
	window has a status bar, button bar, or any other window as its first child,
	double-clicking will not close the maximized child window.
	
	RESOLUTION
	==========
	
	Create the MDI client window as the first child of the MDI frame. Create other
	child windows of the MDI frame window, such as a status bar or button bar, after
	creating the MDI client window; then don't change the Z-order to make it the
	first child.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10 maximize
	
	======================================================================
	Keywords          : kb16bitonly kbMDI kbSDKPlatform kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

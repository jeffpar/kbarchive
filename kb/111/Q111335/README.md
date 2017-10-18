---
layout: page
title: "Q111335: BUG: SetWindowPos() on an Iconic Window and its Caption"
permalink: kb/111/Q111335/
---

## Q111335: BUG: SetWindowPos() on an Iconic Window and its Caption

	Article: Q111335
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbGrpDSUser kbOSWin310bug kbWndwProp
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SetWindowPos() is called on a minimized window to either move or hide the
	window. When moving, the window is moved but the caption is left behind. When
	Hiding, the window is hidden but the caption is still visible.
	
	RESOLUTION
	==========
	
	Use SetWindowPlacement() instead of SetWindowPos().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbGrpDSUser kbOSWin310bug kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	

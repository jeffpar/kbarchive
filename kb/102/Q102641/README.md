---
layout: page
title: "Q102641: INFO: EM_SETSEL wParam Not Used in Single Line Edit Controls"
permalink: /kb/102/Q102641/
---

## Q102641: INFO: EM_SETSEL wParam Not Used in Single Line Edit Controls

	Article: Q102641
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform kbGrpDSUser
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For an edit control, the EM_SETSEL documentation states that wParam is a flag
	for specifying whether to scroll the caret into view. When the parameter is
	zero, the caret is scrolled into view. When the parameter is one (1), the caret
	is not scrolled into view. This is only valid for a multiline edit control. For
	a single line edit control, the wParam flag is not used.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

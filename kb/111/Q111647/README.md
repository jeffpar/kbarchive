---
layout: page
title: "Q111647: BUG: LB_SETTOPINDEX Does Not Conform to Documentation"
permalink: kb/111/Q111647/
---

## Q111647: BUG: LB_SETTOPINDEX Does Not Conform to Documentation

	Article: Q111647
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbListBox kbGrpDSUser kbOSWin310bug
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Code written to handle a return of LB_ERR does not function properly.
	
	The online documentation for LB_SETTOPINDEX states that the result is LB_ERR if
	an error occurs. However, when an error occurs, LB_SETTOPINDEX returns with a
	value of 0 (zero) rather than LB_ERR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbListBox kbGrpDSUser kbOSWin310bug 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbbug
	
	=============================================================================
	

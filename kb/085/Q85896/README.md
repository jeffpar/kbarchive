---
layout: page
title: "Q85896: BUG: Input Focus Lost When Control Returns From Windows Help"
permalink: kb/085/Q85896/
---

## Q85896: BUG: Input Focus Lost When Control Returns From Windows Help

	Article: Q85896
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbGrpDSUser kbOSWin310bug kbWndw
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application calls the WinHelp function and specifies HELP_CONTEXTPOPUP
	as the value for the fuCommand parameter, the input focus disappears. When the
	user presses the ALT key, the system menu appears for a hidden copy of the
	Windows Help application.
	
	CAUSE
	=====
	
	The Windows Help application does not properly restore the focus to the calling
	application when the pop-up window is destroyed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug with Windows Help version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbGrpDSUser kbOSWin310bug kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	

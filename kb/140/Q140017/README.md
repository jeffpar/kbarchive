---
layout: page
title: "Q140017: BUG: RasDial() Fails with Error 87 in 16-bit App in Windows 95"
permalink: kb/140/Q140017/
---

## Q140017: BUG: RasDial() Fails with Error 87 in 16-bit App in Windows 95

	Article: Q140017
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbRAS kbSDKPlatform kbOSWin95 kbGrpDSNet
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A function call to the RasDial() API from a 16-bit Windows-based application
	that is running in Windows 95 fails with error 87 in Windows 95 if the
	hWndNotifier parameter of the RasDial() API is initialized to a NULL value.
	
	RESOLUTION
	==========
	
	An application should always provide a window handle for this parameter even if
	it will not be processing the messages posted by the RAS DLLs to this window.
	
	MORE INFORMATION
	================
	
	Specifying a NULL value for window handle in the RasDial() API call is common
	for a Visual Basic application. In such a scenario, the application makes
	repetitive calls to RasGetConnectStatus() to get the status of the connection.
	However, calling RasDial() in this fashion causes it to fail on Windows 95 with
	error 87.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbRAS kbSDKPlatform kbOSWin95 kbGrpDSNet 
	Technology        : kbWinNT400xsearch kbAudDeveloper kbSDKSearch kbWinSDKSearch kbWinSDK400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

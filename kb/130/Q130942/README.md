---
layout: page
title: "Q130942: PRB: WSAStartup() May Return WSAVERNOTSUPPORTED on Second Call"
permalink: kb/130/Q130942/
---

## Q130942: PRB: WSAStartup() May Return WSAVERNOTSUPPORTED on Second Call

	Article: Q130942
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbGrpDSNet kbnetwork kbAPI kbOSWin310 kbOSWin95 kbWinsock kbSDKPlatform kbO
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1, used with:
	   - Microsoft Windows 3.1 
	- Microsoft Win32 Software Development Kit (SDK), used with:
	   - the operating system: Microsoft Windows NT, versions 3.1, 3.5, 3.51, 4.0 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If two sections of code within the same process call WSAStartup(), the second
	call to WSAStartup() fails and returns error WSAVERNOTSUPPORTED unless the
	second call specifies the version negotiated in the first call.
	
	This happens even if the requested version would normally be accepted. Often the
	extra calls to WSAStartup() come from one or more DLLs loaded by the process.
	
	RESOLUTION
	==========
	
	If multiple calls are made to WSAStartup(), the second call must request the
	same version negotiated in the first call.
	
	MORE INFORMATION
	================
	
	Some specific examples may help. Currently, if the version of Winsock requested
	is 1.1 or greater, the negotiated version will be 1.1. If a version less than
	1.1 is requested, the call fails and returns the WSAVERNOTSUPPORTED error.
	
	Example One
	-----------
	
	First call : 1.1 requested
	Second call: 1.1 requested
	Result : Success
	
	Example Two
	-----------
	
	First call : 2.0 requested
	Second call: 1.1 requested
	Result : Success
	
	Example Three
	-------------
	
	First call : 2.0 requested
	Second call: 2.0 requested
	Result : WSAVERNOTSUPPORTED
	
	Example Four
	------------
	
	First call : 1.1 requested
	Second call: 2.0 requested
	Result : WSAVERNOTSUPPORTED
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbGrpDSNet kbnetwork kbAPI kbOSWin310 kbOSWin95 kbWinsock kbSDKPlatform kbOSWinNT350 kbOSWinNT351 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

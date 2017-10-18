---
layout: page
title: "Q113892: PRB: GetVersion Returns 3.10 from Windows for Workgroups 3.11"
permalink: kb/113/Q113892/
---

## Q113892: PRB: GetVersion Returns 3.10 from Windows for Workgroups 3.11

	Article: Q113892
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kb16bitonly kbResource kbSDKPlatform kbSysSettings
	Last Modified: 09-JUN-1999
	
	3.00 3.10 3.11
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	GetVersion() returns 3.10 when running under Windows for Workgroups version
	3.11.
	
	CAUSE
	=====
	
	GetVersion() still returns 3.10 from Windows for Workgroups version 3.11 because
	there are too many applications that are checking for version 3.10. GetVersion()
	returns 3.10 to maintain compatibility with those applications that check for
	Windows version 3.10.
	
	RESOLUTION
	==========
	
	Windows applications that use the C language can use the following set of
	functions to get the actual version information.
	
	GetFileVersionInfoSize("user.exe"...);
	 GetFileVersionInfo("user.exe"...);
	 VerQueryValue(...);
	
	For a complete sample application that does this, please see the sample in the
	..\SAMPLES\VERSTAMP directory from Microsoft Visual C++.
	
	Below is a Visual Basic program that uses the GetFileVersionInfo() functionto get
	the actual version information.
	
	     Declare Function GetFileVersionInfo% Lib "ver.dll"
	        (ByVal lpszFileName$, ByVal handle As Any, ByVal
	         cbBuf&, ByVal lpvData$)
	
	       Dim pos As Integer
	       Dim version As String * 255
	       Dim ans As String
	       ' get the version info and fill the version string
	       ret% = GetFileVersionInfo("user.exe", 0&, 254, version)
	       ' find the position in the string where the FileVersion stamp is.
	       pos = InStr(1, version, "FileVersion")
	       ' 12 = lengh of "FileVersion" +1 for the null
	       ' 4  = length of string to return i.e. "3.11"
	       ans = Mid$(version, pos + 12, 4)
	       ' display answer
	       MsgBox ans
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbResource kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbWinSDK311
	Version           : WINDOWS:3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q190801: PRB: Failed to Verify Platform or OS Version"
permalink: /kb/190/Q190801/
---

## Q190801: PRB: Failed to Verify Platform or OS Version

	Article: Q190801
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbide kbVC500 kbOSWinCE200
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build an application or select "[Build:Update remote output file]," the
	following error message appears:
	
	  Failed to verify platform or OS version.
	
	Or, when you debug an application, the following error message appears:
	
	  Your device platform type is not supported
	
	CAUSE
	=====
	
	These error messages can be caused by a malfunctioning communications link with
	the Windows CE target device, or by using incorrect versions of Pfile.exe or
	Pfcom.dll.
	
	RESOLUTION
	==========
	
	1. No communication. Ensure that communication between the desktop device and
	  the Windows CE target device has been established. You should be able to
	  transfer files using Windows Explorer, Mobile Devices, Remote Object Viewer,
	  or Pfile.exe if communication has been established correctly.
	
	2. Users of the Windows CE Platform SDK for Palm-size PCs experience this
	  problem if the Pfile.exe and Pfcom.dll files are not installed as indicated
	  by the release notes (<platform-sdk-root>\ppcreadme.htm). You must use
	  the files, located in the <platform-sdk-root>\Support\Updates
	  directory, to replace the respective files in <developer-studio-
	  root>\SharedIDE\bin.
	
	NOTE: Do not rename the original files before replacing them. To backup the
	original files, copy them elsewhere.
	
	MORE INFORMATION
	================
	
	NOTE: If you do not see the ...\Support\Updates directory on your hard drive,
	this means you have not installed the Palm-size Platform SDK. This is available
	for download from the following Internet link:
	
	http://www.microsoft.com/windowsce/downloads/pccompanions/default.asp
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q189138 PRB: "error spawning empfile.exe" Building WINCE Application
	
	======================================================================
	Keywords          : kberrmsg kbide kbVC500 kbOSWinCE200 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCEETKSearch kbWinCESearch kbWinCEETKVC500
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

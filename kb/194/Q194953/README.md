---
layout: page
title: "Q194953: INFO: Facts About WinInet API Support on Windows CE OS"
permalink: /kb/194/Q194953/
---

## Q194953: INFO: Facts About WinInet API Support on Windows CE OS

	Article: Q194953
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVC500 kbOSWinCE100 kbOSWinCE200 kbOSWinCE210
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows CE, version 1.0 does not support Windows Internet APIs (WinInet) APIs.
	Windows CE, versions 2.0 and 2.1 support WinInet APIs with the following
	exceptions:
	
	- Unlike Win32, authentication is not built into Wininet.dll on Windows CE,
	  hence InternetErrorDlg is not supported. Using InternetSetOption for setting
	  user name and password is not supported either.
	
	- Unlike Win32, cookie support is not built into Wininet.dll on Windows CE, and
	  therefore such cookie APIs as InternetGetCookie and InternetSetCookie are not
	  supported. If a persistent cookie is saved on the Windows CE device while
	  using the Pocket IE program, sending a request to the same URL with WinInet
	  APIs does not contain the cookie.
	
	- InternetWriteFile API is not supported.
	
	- Please note that even when the Unicode version of the WinInet APIs is used,
	  text returned by the server (from InternetOpenUrl and InternetReadFile) is
	  not converted and is usually ASCII.
	
	- Wininet.dll (and the corresponding wininet.lib) shipped with retail version
	  HPC 2.0 (2.1) does not include FTP APIs. This limitation is by design (to
	  save ROM). Therefor it is not possible to use WinInet FTP APIs on the HPC 2.0
	  (2.1).
	
	  To clarify: if an HPC version 2.0 (2.1) device contains a retail version of
	  the operating system (for example, is purchased in the store), FTP APIs are
	  not present. To develop FTP applications on the retail version of Windows CE
	  (that does not export FTP APIs from wininet.dll), developers can use Windows
	  Sockets.
	
	  NOTE: FTP APIs are included in the emulation library(wininetm.lib) and do work
	  in the emulation environment.
	
	- Known Problem in Windows CE 2.0 (fixed in Windows CE 2.1) applicable to the
	  emulation libraries:
	
	  InternetConnect does not correctly submit credentials to the FTP server (bogus
	  characters are added to the end of the user name or password). Hence it is
	  impossible to establish a connection with the FTP server. This problem is
	  addressed in Windows CE 2.1
	
	REFERENCES
	==========
	
	SDK for HPC on-line documentation
	
	Win32 Internet Client SDK (Internet Explorer Authoring Kit)
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Leon Braginski, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500 kbOSWinCE100 kbOSWinCE200 kbOSWinCE210 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK500VC
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

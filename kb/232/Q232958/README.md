---
layout: page
title: "Q232958: INFO: Cannot Restart CESH After the Connection Is Broken"
permalink: kb/232/Q232958/
---

## Q232958: INFO: Cannot Restart CESH After the Connection Is Broken

	Article: Q232958
	Product(s): Microsoft C Compiler
	Version(s): N\A:2.11,2.12; WINDOWS:
	Operating System(s): 
	Keyword(s): kbVC500 kbDSupport kbinfo kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE 2.10 Enhancement Pack for Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE Platform Builder, versions 2.11, 2.12 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the PPSH or CESH connection is broken, it cannot be reestablished without
	restarting the Windows CE device.
	
	MORE INFORMATION
	================
	
	The kernel services that communicate over the PPSH or CESH connection will
	timeout and disable PPSH or CESH support shortly after the connection is broken.
	The kernel will not attempt to reestablish the CESH connection until the system
	is restarted.
	
	In addition, if the CESH utility is using a connection through ESHELL on the
	host, and the CESH process is ended, restarting CESH will not be able to
	register its service with ESHELL until the CE device is restarted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500 kbDSupport kbinfo kbArtTypeINF 
	Technology        : kbAudDeveloper kbSDKSearch kbWinCEETKSearch kbWinCESDKSearch kbWinCESearch kbWinCESDK211 kbWinCESDK212 kbWinCEEnh210ETKVC500 kbWinCEETKVC500
	Version           : N\A:2.11,2.12; WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

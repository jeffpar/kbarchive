---
layout: page
title: "Q184238: INFO: LNK4108: /ALIGN Specified Without /DRIVER or /VXD;"
permalink: kb/184/Q184238/
---

## Q184238: INFO: LNK4108: /ALIGN Specified Without /DRIVER or /VXD;

	Article: Q184238
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0sp3
	Operating System(s): 
	Keyword(s): kberrmsg kbVC600 kbVC500SP3
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp3 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following warning was introduced in the linker shipped with Visual Studio 97
	Service Pack 3:
	
	  Warning LNK4108:
	  /ALIGN specified without /DRIVER or /VXD; image may not run
	
	MORE INFORMATION
	================
	
	The /ALIGN option has been specified without also specifying either the /DRIVER
	or /VXD option.
	
	Bad alignment can prevent the operating system from loading the final image. Do
	not use the /ALIGN option unless building a driver or virtual device driver
	(VxD).
	
	This warning occurs even when you specify the documented default value for the
	/ALIGN option.
	
	
	You might see this warning when you use the linker included with Visual Studio 97
	Service Pack 3 to build a makefile created in a Visual C++ 4.x project because
	the Win32.mak supplied with Visual C++ 4.x contains the /ALIGN switch.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVC600 kbVC500SP3 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100
	Version           : WINNT:5.0sp3
	Issue type        : kbinfo
	
	=============================================================================
	

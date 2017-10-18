---
layout: page
title: "Q192097: INFO: MFC and ATL Are Not Supported on Windows CE Palm-size PC"
permalink: kb/192/Q192097/
---

## Q192097: INFO: MFC and ATL Are Not Supported on Windows CE Palm-size PC

	Article: Q192097
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0; :2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbATL kbMFC kbVC500 kbVC600 kbOSWinCE200 kbGrpDSMFCATL
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- Microsoft Windows CE, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Neither MFC nor ATL are supported on Windows CE version 2.0 for the Palm-size
	PC. When you build applications for the Palm-size PC using the Windows CE
	Platform SDK, Palm-size PC Edition, you might receive compiler errors if you are
	using ATL or MFC.
	
	Do not use MFC or ATL in applications targeted for Windows CE for the Palm-size
	PC.
	
	MORE INFORMATION
	================
	
	A symptomatic error when building a project using MFC or ATL for the Palm-size
	PC is:
	
	  fatal error RC1015: cannot open include file 'winres.h'.
	
	NOTE: The Windows CE Toolkit for Visual C++ 6.0 includes MFC and ATL support for
	the Palm-size PC.
	
	REFERENCES
	==========
	
	Ppcreadme.htm from the Windows CE Platform SDK, Palm-size PC Edition contains
	the following statement in the Known Problems section:
	
	  the Palm-size PC does not support MFC
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbATL kbMFC kbVC500 kbVC600 kbOSWinCE200 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCE200 kbWinCETK600VC
	Version           : WINDOWS:6.0; :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

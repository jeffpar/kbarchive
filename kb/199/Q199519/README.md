---
layout: page
title: "Q199519: PRB: Unresolved External on &#95;&#95;InitVTableRecords"
permalink: kb/199/Q199519/
---

## Q199519: PRB: Unresolved External on &#95;&#95;InitVTableRecords

	Article: Q199519
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0,4.0,4.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbtool kbHWMAC kbVC kbDSupport
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 2.0, 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An unresolved external link error occurs for the symbol "__InitVTableRecords"
	when building a Macintosh ASLM Shared Library.
	
	CAUSE
	=====
	
	Failure to specify a DEF file when building a Macintosh ASLM Shared Library
	causes an unresolved external link error for the symbol "__InitVTableRecords".
	
	RESOLUTION
	==========
	
	A DEF file is required to specify which symbols are to be exported from the
	shared library. See "Building a Module-Definition File" on page 268 of the
	Visual C++ Porting Applications to the Macintosh guide.
	
	REFERENCES
	==========
	
	Macintosh Porting Guide: Building an Apple Shared Library
	
	Additional query words: DLL DEF ASLM
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbtool kbHWMAC kbVC kbDSupport 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:2.0,4.0,4.0b
	Issue type        : kbprb
	
	=============================================================================
	

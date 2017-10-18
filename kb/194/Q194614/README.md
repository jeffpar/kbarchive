---
layout: page
title: "Q194614: HOWTO: Avoid Problems Associated with Installing New SDKs"
permalink: kb/194/Q194614/
---

## Q194614: HOWTO: Avoid Problems Associated with Installing New SDKs

	Article: Q194614
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbide kbVC400 kbVC500 kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft SDKs that were not provided with Microsoft Visual
	C++, you might have build problems. The resulting build errors are typically the
	result of problems where a symbol is not defined, and therefore a compiler error
	such as the following is issued:
	
	  [source filename](line number) : error C2065: 'symbol name' : undeclared
	  identifier
	
	A linker error such as the following may also be issued:
	
	  [object filename] : error LNK2001 unresolved external symbol "[undecorated
	  symbol name]" (decorated symbol name)
	
	MORE INFORMATION
	================
	
	When you install Microsoft SDKs, compare the header and library dates in the SDK
	files with the files that were provided with Visual C++. If the SDK files are
	newer, you should place the SDK directories before the default Visual C++
	INCLUDE and LIB directories listed in the Directories tab of the Options dialog
	box (accessed from the Tools menu).
	
	Additional query words: software development kit
	
	======================================================================
	Keywords          : kberrmsg kbide kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC32bitSearch kbVCPE500 kbVCPE600 kbVCEE500 kbVCEE600 kbVCLE600
	Version           : WINNT:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

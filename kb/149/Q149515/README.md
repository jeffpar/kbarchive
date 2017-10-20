---
layout: page
title: "Q149515: DOC: GetProcAddress Does Not Support Ordinal Symbols"
permalink: /kb/149/Q149515/
---

## Q149515: DOC: GetProcAddress Does Not Support Ordinal Symbols

{% raw %}

	Article: Q149515
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbHWMAC kbMFC kbVC400bug kbGrpDSMFCATL
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	GetProcAddress() returns NULL when passing a valid ordinal value for a DLL's
	exported function. The Macintosh Windows Portability Layer implementation of
	GetProcAddress() does not support obtaining exported function addresses by the
	function's ordinal value.
	
	MORE INFORMATION
	================
	
	DLLs on the Macintosh are implemented using Code Fragment Libraries (CFM) on
	Power Macintoshes. Apple's implementation of CFMs only allows symbols to be
	exported by name. Therefore, you must use the exported function name to obtain
	the function address.
	
	Additional query words: 4.00 WLM CFM DLL ASLM AFXDLL mac vcmac
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbHWMAC kbMFC kbVC400bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac
	Version           : MACINTOSH:4.0
	
	=============================================================================
	

{% endraw %}

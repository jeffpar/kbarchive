---
layout: page
title: "Q121665: INFO: GetDescendantWindow - bOnlyPerm Parameter Incorrect"
permalink: /kb/121/Q121665/
---

## Q121665: INFO: GetDescendantWindow - bOnlyPerm Parameter Incorrect

{% raw %}

	Article: Q121665
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbMFC KbUIDesign kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200b
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for CWnd::GetDescendantWindow incorrectly states:
	
	  bOnlyPerm - Specifies whether the window to be returned can be temporary. If
	  TRUE, the function can return a temporary window; if FALSE, only a permanent
	  window can be returned. For more information on temporary windows see
	  Technical Note 3 under MFC in Books Online.
	
	The behavior, as the parameter's name implies, is the opposite of how it is
	documented. The documentation for the bOnlyPerm parameter should state:
	
	  bOnlyPerm - Specifies whether the window to be returned must be permanent. If
	  TRUE, the function will return a pointer to a permanent CWnd object or NULL;
	  if FALSE, the function can return a pointer to a temporary CWnd object. For
	  more information on temporary windows see MFC Technical Note #3.
	
	NOTE: This problem was fixed in Microsoft Visual C++, 32-bit Edition, version
	4.0. The 4.0 Books On-Line entry for CWnd::GetDescendantWindow() correctly
	documents the meanings of the various bOnlyPerm parameter values.
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 3.00 4.00
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbMFC KbUIDesign kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC400fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :
	
	=============================================================================
	

{% endraw %}

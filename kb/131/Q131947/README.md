---
layout: page
title: "Q131947: DOC: CDC::GetWindow() Is Documented but Not Available"
permalink: /kb/131/Q131947/
---

## Q131947: DOC: CDC::GetWindow() Is Documented but Not Available

{% raw %}

	Article: Q131947
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.0a,4.1,4.2,4.2b,5.0,5.0sp1,5.0sp2,5.0sp3,6.0; :
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbnokeyword kbMFC kbVC200bug kbVC210bug kbVC400fix kbGrpDSMFCATL
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 5.0sp2, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 5.0sp2, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online documentation for Microsoft Visual C++ versions 2.0 and 2.1 has
	entries for the member function CDC::GetWindow(). However, an attempt to use
	this function results in an unresolved external error.
	
	The documentation is in error. The function was not implemented in versions 2.0
	or 2.1. This function has been implemented in Visual C++ version 2.2.
	
	NOTE: You can obtain the same functionality using the Windows API function
	::WindowFromDC. For example:
	
	CWnd *pWnd = CWnd::FromHandle(::WindowFromDC(pDC->m_hDC);
	
	NOTE: This problem was fixed in Microsoft Visual C++ version 4.0 and later.
	
	Additional query words: 2.00 3.00 2.10 3.10 4.00
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbnokeyword kbMFC kbVC200bug kbVC210bug kbVC400fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500SP2 kbVC500SP3 kbVC400a kbVC420b kbVC500Search
	Version           : winnt:4.0,4.0a,4.1,4.2,4.2b,5.0,5.0sp1,5.0sp2,5.0sp3,6.0; :
	
	=============================================================================
	

{% endraw %}

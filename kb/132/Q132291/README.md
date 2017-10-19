---
layout: page
title: "Q132291: DOC: AfxRegisterWndClass with WS_&#42; Styles Causes Exception"
permalink: /kb/132/Q132291/
---

## Q132291: DOC: AfxRegisterWndClass with WS_&#42; Styles Causes Exception

	Article: Q132291
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.0a,4.1,4.2,4.2b,5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbMFC KbUIDesign kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200b
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.0a, 4.1, 4.2, 4.2b, 5.0, 5.0sp1, 5.0sp2, 5.0sp3, 6.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp3 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for AfxRegisterWndClass states that the nClassStyle parameter
	can be a combination of any window style or control style.
	
	If a window style (for example, WS_VISIBLE and WS_CHILD) is used in this
	parameter, then the AfxRegisterWndClass function call causes a resource
	exception to be thrown. Your application will probably fail, and give a message
	similar to this:
	
	  
	
	  Unhandled Exception in myapp.exe (MFC30D.DLL): 0xE06D7363: Microsoft
	     C++ Exception.
	
	MORE INFORMATION
	================
	
	Only Window CLASS styles (not window styles) can be used in the nClassStyle
	parameter. These class styles are listed in the documentation for the WNDCLASS
	structure. Examples of window class styles include:
	
	  CS_HREDRAW
	  CS_VREDRAW
	  CS_DBLCLKS
	
	NOTE: This problem was fixed in Microsoft Visual C++ versions 4.0 and later.
	
	Additional query words: AfxThrowResourceException 1.00 1.50 1.51 1.52 2.00 2.50 2.51 2.52 2.10 2.20 3.00 3.10 3.20 4.00
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbMFC KbUIDesign kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbDOCError kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.0a,4.1,4.2,4.2b,5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	
	=============================================================================
	

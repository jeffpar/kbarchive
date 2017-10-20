---
layout: page
title: "Q117686: DOC: CDC::SelectObject, CDC::SelectStockObject Return"
permalink: /kb/117/Q117686/
---

## Q117686: DOC: CDC::SelectObject, CDC::SelectStockObject Return

{% raw %}

	Article: Q117686
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0
	Operating System(s): 
	Keyword(s): kbdocfix kbnokeyword kbMFC kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The pointer to a CGdiObject that is returned from CDC::SelectObject() or
	CDC::SelectStockObject() is stored for use. When the pointer is used later, it
	causes unexpected behavior [for example, a general protection fault (GPF) or
	heap corruption].
	
	The documentation for the SelectObject() member does not make clear that the
	pointer returned from the call might point to a temporary object that is only
	valid during processing of one Windows message. This is an error in the
	documentation.
	
	The CDC::SelectObject() and CDC::SelectStockObject() functions make a call to
	CGdiObject::FromHandle() to determine which CGdiObject object to return. If
	there is no CGdiObject object attached to the Windows GDI object that is
	currently selected in the DC, then a temporary object is created. See the
	documentation for CGdiObject::FromHandle() for further information.
	
	MORE INFORMATION
	================
	
	If you want to store the object that was previously selected in the DC, then you
	should store the Windows handle to the GDI object (HGDIOBJ), not a pointer to
	the CGdiObject. The handle can be obtained from the temporary file by using the
	function CGdiObject::GetSafeHandle(). You can later use the function
	CGdiObject::FromHandle() to obtain a pointer to a CGdiObject that encapsulates
	the HGDIOBJ. For example:
	
	     ...
	     // Select a pen in the DC.
	     CPen *ppenOld = pDC->SelectObject(ppenNew);
	     m_hpenOld = (HPEN) ppenOld->GetSafeHandle();
	     ...
	     ...
	     // In some other message handler we wish to
	     // restore the old pen.
	     CPen *ppenOld = CPen::FromHandle(m_hpenOld);
	     pDC->SelectObject(ppenOld);
	     ...
	
	REFERENCES
	==========
	
	For further information on mapping C++ objects to handles in the MFC, see MFC
	TechNote #3, "Mapping of Windows Handles to Objects."
	
	NOTE: The documentation for Visual C++ 2.0 (MFC 3.0) has been corrected.
	
	Additional query words: 7.00 1.00 1.50 2.00 2.10 2.50 CBrush CFont CPalette CPen
	
	======================================================================
	Keywords          : kbdocfix kbnokeyword kbMFC kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0
	
	=============================================================================
	

{% endraw %}

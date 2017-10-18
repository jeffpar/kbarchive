---
layout: page
title: "Q149341: FIX: CreatePointFont() May Create Wrong Size Font in Preview"
permalink: kb/149/Q149341/
---

## Q149341: FIX: CreatePointFont() May Create Wrong Size Font in Preview

	Article: Q149341
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbprint kbFont kbMFC kbPrinting kbVC400 kbVC410 kbDSupport kbGrpDSMFCATL kbNoUpdate
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling CFont::CreatePointFont() results in a font displayed in print preview
	mode that is not of the point size requested.
	
	CAUSE
	=====
	
	The CDC class contains two member variables for its current device context,
	m_hDC and m_hAttribDC. m_hDC (the output device context) is equal to m_hAttribDC
	(the attribute device context) by default. However, when print preview is
	active, these two variables will not be equal; at that point, the m_hDC contains
	the screen's device context and m_hAttribDC contains the printer's device
	context.
	
	The implementation of CreatePointFont() looks at the m_hDC member of the CDC
	class to calculate the proper size for the font rather than the m_hAttribDC
	member. The result of this behavior is that CreatePointFont will always create a
	font sized for the screen device context.
	
	RESOLUTION
	==========
	
	The following sample code works around the problem by creating another CDC
	object based on the m_hAttribDC member of the original CDC and uses this new CDC
	to call CFont::CreatePointFont().
	
	Sample Code
	-----------
	
	  /* Compile options needed: default
	  */ 
	
	  void CMyView::OnDraw(CDC* pDC)
	  {
	      // dcPrinter's m_hDC and m_hAttribDC member variables
	      // will both be properly pointing to the printer DC.
	      CDC dcPrinter;
	      dcPrinter.Attach(pDC->m_hAttribDC);
	
	      CFont font;
	      font.CreatePointFont(110, "Courier New", &dcPrinter);
	
	      // You must detach from the DC after using
	      // our temporary dcPrinter object or problems will occur!
	      dcPrinter.Detach();
	
	      CFont* pOldFont = pDC->SelectObject(&font);
	
	      // Use font here...
	      pDC->SelectObject(pOldFont);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	Additional query words: 4.00 4.10 4.20 vcfixlist420
	
	======================================================================
	Keywords          : kbprint kbFont kbMFC kbPrinting kbVC400 kbVC410 kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

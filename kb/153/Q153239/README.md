---
layout: page
title: "Q153239: BUG: Multiple CRichEditView::PrintInsideRect's Are Distorted"
permalink: kb/153/Q153239/
---

## Q153239: BUG: Multiple CRichEditView::PrintInsideRect's Are Distorted

	Article: Q153239
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbMFC kbPrinting kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDS
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use CRichEditView::PrintInsideRect() more than once during printing,
	the text printed by calls after the first one appears either distorted or
	missing in Print Preview mode.
	
	CAUSE
	=====
	
	The PrintInsideRect() scales the window extents of the DC before formatting and
	printing the requested text to that DC. This scaling is necessary and works for
	the first call. However, PrintInsideRect() does not undo the scaling before
	returning. Hence, the scaling will be cumulative, causing future prints to be
	distorted or scaled out of the visible portion of the DC.
	
	RESOLUTION
	==========
	
	Save the DC before calling PrintInsideRect(), and restore it after returning.
	Refer to the "Sample Code" section of this article for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Sample Code
	-----------
	
	Here is an example of making multiple PrintInsideRect calls per page using
	SaveDC() and RestoreDC() to keep the scaling from accumulating:
	
	     void CThatSillyRichEditView::OnPrint(CDC* pDC, CPrintInfo* pInfo)
	     {
	         // Get the current paper size and construct an actual printing
	         // rectangle by leaving out one half inch margin from each side.
	         CSize sizePaper = GetPaperSize();
	         CRect rectMargins(720, 720, sizePaper.cx - 720, sizePaper.cy - 720);
	
	         // Need to set the margins when printing from CRichEditView
	         SetMargins(rectMargins);
	
	         // Set up three rectangular regions spaced an inch apart
	         CRect rectHeader(0, 0, rectMargins.right, 1440);
	         CRect rectBody(0, 1440, rectMargins.right, 1440 * 2);
	         CRect rectFooter(0, 1440 * 2, rectMargins.right, 1440 * 3);
	
	         // Format the first 10 characters in the buffer.
	         int nSavedDC = pDC->SaveDC();
	         PrintInsideRect(pDC, rectHeader, 0, 10, TRUE); // characters 0-10
	         pDC->RestoreDC(nSavedDC);
	
	         // Format the second 10 characters in the buffer.
	         nSavedDC = pDC->SaveDC();
	         PrintInsideRect(pDC, rectBody, 10, 20, TRUE); // characters 10-20
	         pDC->RestoreDC(nSavedDC);
	
	         // Format the third 10 characters in the buffer.
	         nSavedDC = pDC->SaveDC();
	         PrintInsideRect(pDC, rectFooter, 20, 30, TRUE); // characters 20-30
	         pDC->RestoreDC(nSavedDC);
	     }
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: MfcPrinting
	
	======================================================================
	Keywords          : kbprint kbMFC kbPrinting kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

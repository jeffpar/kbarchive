---
layout: page
title: "Q140538: HOWTO: How to Do Away with the Print Dialog Box in MFC Printing"
permalink: /kb/140/Q140538/
---

## Q140538: HOWTO: How to Do Away with the Print Dialog Box in MFC Printing

	Article: Q140538
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbprint kbCmnDlgPrint kbMFC kbPrinting kbVC150 kbVC200 kbVC400 kbVC420
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By design, a Print dialog box is displayed in MFC printing. This dialog box
	allows the user to change the printer settings before a printer device context
	(DC) is created. However, there are cases when the print dialog box is not a
	good idea. This article provides a way to bypass the Print dialog box for a
	print job.
	
	MORE INFORMATION
	================
	
	CView::OnPreparePrinting is the first virtual function called during the print
	process. It is also called during print preview. AppWizard provides an
	implementation of OnPreparePrinting that calls CView::DoPreparePrinting.
	DoPreparePrinting displays the print dialog box for actual printing but not for
	print preview.
	
	Therefore, in OnPreparePrinting, if CPrintInfo::m_bPreview is FALSE (an actual
	print job), set it to TRUE before calling DoPreparePrinting(). This makes
	DoPreparePrinting believe that the current context is that of print preview so
	the print dialog box isn't shown. After DoPreparePrinting returns, reset the
	variable to FALSE to let the print job go on uninterrupted.
	
	The following sample code prevents the Print dialog box from appearing without
	affecting the print process.
	
	Sample Code
	-----------
	
	  BOOL CMyView::OnPreparePrinting(CPrintInfo* pInfo)
	  {
	        if ( pInfo->m_bPreview )        // normal print preview
	              return DoPreparePrinting(pInfo);
	
	  // actual printing
	        pInfo->m_bPreview = TRUE;
	        BOOL bRetval = DoPreparePrinting( pInfo );
	        pInfo->m_bPreview = FALSE;
	        return bRetval;
	  }
	
	REFERENCES
	==========
	
	For more information about the MFC printing, please refer to the Programming
	with the Microsoft Foundation Class Library in Books Online.
	
	Additional query words: kbinf 1.50 1.51 1.52 1.00 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbcode kbprint kbCmnDlgPrint kbMFC kbPrinting kbVC150 kbVC200 kbVC400 kbVC420 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	

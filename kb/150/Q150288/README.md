---
layout: page
title: "Q150288: HOWTO: How to Enable Selection Button in Print Dialog Box"
permalink: /kb/150/Q150288/
---

## Q150288: HOWTO: How to Enable Selection Button in Print Dialog Box

{% raw %}

	Article: Q150288
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbprint kbCmnDlgPrint kbMFC kbPrinting kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 k
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By design, the Selection button is disabled on the Print dialog box created by
	the MFC framework. This article describes how to enable the Selection button and
	provides a code segment illustrating how to support selection printing in a
	CEditView class.
	
	MORE INFORMATION
	================
	
	When you choose Print from the File menu from any AppWizard-generated
	application, the PD_NOSELECTION style for the CPrintDialog disables the
	Selection button on the Print dialog box. The enabling task can be performed
	before the Print dialog box is displayed in the OnPreparePrinting() function of
	any CView derived class.
	
	The CEditView class in MFC does not support selection printing. However,
	selection printing can be accomplished in a CEditView class as outlined in the
	"Sample Code" section in this article.
	
	Sample Code
	-----------
	
	Steps to support selection printing in a CEditView class:
	
	1. Derive a class from CEditView if one is not found.
	
	2. Add the following member variables related to selection printing to the
	  CEditView derived class:
	
	     class CMyEditView : public CEditView
	         {
	         // TRUE for selection printing; FALSE otherwise.
	         BOOL    m_bPrintSelection;
	
	         // Position of the next character to be printed in the current
	         // selection. It is 0 when no selection is found. If
	         // selection is found, then initially it will be equal to the
	         // position of the first character in the current selection.
	         // And its value will be incremented until you are done with
	         // selection printing.
	         int    m_nNextSelCharToBePrint;
	
	         // Position of the first unselected character past the end of
	         // the current selection. It is 0 when no selection is found.
	         int    m_nFirstNonSelChar;
	
	         ...
	         };
	
	3. Initialize the member variables from step 2 in the constructor function of
	  the CEditView derived class:
	
	     CMyEditView::CMyEditView()
	         {
	         // Initially, no selected text is found from CEditView window.
	         m_bPrintSelection = FALSE;
	         m_nNextSelCharToBePrint = m_nFirstNonSelChar = 0;
	
	         ...
	         }
	
	4. Override the OnPreparePrinting() function in the class derived from the
	  CEditView class. Add the following code to enable the Selection button if
	  selected text is found from CEditView. Also, make selection printing the
	  default printing in Print dialog box:
	
	     BOOL CMyEditView::OnPreparePrinting(CPrintInfo* pInfo)
	         {
	         // Is there any selected text in CEditView window? If the
	         // selected text is found, enable the Selection button
	         // and then have it checked so selection printing is performed
	         // by default.
	         GetEditCtrl().GetSel(m_nNextSelCharToBePrint,
	                              m_nFirstNonSelChar);
	         if (m_nNextSelCharToBePrint != m_nFirstNonSelChar)
	             {
	             // Enable the Selection button.
	             pInfo->m_pPD->m_pd.Flags &= ~PD_NOSELECTION;
	
	             // Checked the Selection button.
	             pInfo->m_pPD->m_pd.Flags |= PD_SELECTION;
	             }
	
	         // Call the base class OnPreparePrinting() to display the
	         // Print dialog box.
	         BOOL rvalue = CEditView::OnPreparePrinting(pInfo);
	
	         // Now check to see whether selection printing should be
	         // performed or not. TRUE if the user selects the selection
	         // printing; FALSE otherwise.
	         m_bPrintSelection = pInfo->m_pPD->PrintSelection();
	
	         return rvalue;
	         }
	
	5. Override the OnPrepareDC() function of the CEditView derived class. The
	  function is called for every page to be printed and before OnPrint() is
	  called. Stop the MFC framework from calling OnPrint() again if the selection
	  printing from the last call to OnPrint() function is finished. Set the
	  pInfo->m_bContinuePrinting to TRUE to continue selection printing or FALSE
	  to discontinue.
	
	     void CMyEditView::OnPrepareDC(CDC* pDC, CPrintInfo* pInfo)
	         {
	         // If this is for selection printing, you should check whether
	         // you are at the end of the selected text yet, i.e.
	         // m_nNextSelCharToBePrint equals to m_SelectionStop.
	         // m_bContinuePrinting is TRUE if you are not at the end of the
	         // selected text; FALSE otherwise.
	         if (m_bPrintSelection)
	             {
	             pInfo->m_bContinuePrinting =
	                 m_nNextSelCharToBePrint < m_nFirstNonSelChar;
	             }
	         else
	             {
	             CEditView::OnPrepareDC(pDC, pInfo);
	             }
	         }
	
	6. Override the OnPrint() function of the CEditView derived class. Use
	  PrintInsideRect(), a public member function of CEditView, to print the
	  selected text in the rectangle specified by the pInfo->m_rectDraw
	  variable. The return value of PrintInsideRect() is the index of the next
	  character to be printed; the character following the last character
	  rendered:
	
	     void CMyEditView::OnPrint(CDC* pDC, CPrintInfo* pInfo)
	         {
	         if (m_bPrintSelection)
	             {
	             m_nNextSelCharToBePrint =
	                 PrintInsideRect(pDC, pInfo->m_rectDraw,
	                 m_nNextSelCharToBePrint, m_nFirstNonSelChar);
	             }
	         else
	             {
	             CEditView::OnPrint(pDC, pInfo);
	             }
	         }
	
	REFERENCES
	==========
	
	For more information about the MFC printing, see:
	
	"Programming with the Microsoft Foundation Class Library" in Books Online.
	
	Additional query words: 1.50 1.51 1.52 1.00 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbcode kbprint kbCmnDlgPrint kbMFC kbPrinting kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

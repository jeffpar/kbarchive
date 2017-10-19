---
layout: page
title: "Q131792: PRB: OnClose() Is Called When Closing Print Preview Dialog Box"
permalink: /kb/131/Q131792/
---

## Q131792: PRB: OnClose() Is Called When Closing Print Preview Dialog Box

	Article: Q131792
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbprint kbMFC kbPrinting kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	OnClose() is called when the user closes the Print Preview dialog box.
	
	CAUSE
	=====
	
	If your frame window class is CMainFrame, for example, you can override the
	OnClose() member to perform special processing (such as putting up a message box
	asking users if they really want to quit), but note that CMainFrame::OnClose()
	is also called when the user dismisses the Print Preview dialog by pressing
	ALT+F4 or by double-clicking the upper left corner of the dialog.
	
	NOTE: OnClose() is not called when the user clicks the Close button in the Print
	Preview dialog box.
	
	RESOLUTION
	==========
	
	In your OnClose() function, you do not want to do the same processing during a
	Print Preview close that you do during an application close. Therefore, you
	should make a special case in the OnClose() code to check whether or not it is
	being called from Print Preview.
	
	The following code demonstrates how to modify the OnClose() to do nothing during
	the Print Preview close.
	
	  void CMainFrame::OnClose()
	      {
	      if (m_bPreview ||
	         (AfxMessageBox(ID_EXIT_PROMPT, MB_YESNO) == IDYES))
	          {
	          CFrameWnd::OnClose();
	          }
	      }
	
	In this example, ID_EXIT_PROMPT is a string table resource containing the string
	that you want to display in the message box. In addition, m_bPreview is a member
	that you need to add to the CMainFrame class; it is initialized to FALSE in the
	constructor of the CMainFrame class. Then, the m_bPreview variable is set again
	using an override of CFrameWnd::OnSetPreviewMode().
	
	  // In .h file of CMainFrame class:
	  class CMainFrame : public CFrameWnd
	      {
	      BOOL m_bPreview;  // TRUE in print preview mode; FALSE otherwise
	      ...
	      };
	
	  // In .cpp file of CMainFrame class:
	  CMainFrame::CMainFrame()
	      {
	      m_bPreview = FALSE;
	      }
	
	  void CMainFrame::OnSetPreviewMode(
	      BOOL bPreview, CPrintPreviewState* pModeStuff)
	      {
	      m_bPreview = bPreview;
	      CFrameWnd::OnSetPreviewMode(bPreview, pModeStuff);
	      }
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information on Print Preview, please see MFC Technote 30, "Print
	Preview."
	
	Additional query words: 2.50 2.51 2.52 2.10 3.00 3.10 2.00 3.0 3.1 4.00 4.10
	
	======================================================================
	Keywords          : kbprint kbMFC kbPrinting kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

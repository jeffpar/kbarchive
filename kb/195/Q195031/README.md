---
layout: page
title: "Q195031: HOWTO: Adding Splitter Bars Support to Active Document Server"
permalink: /kb/195/Q195031/
---

## Q195031: HOWTO: Adding Splitter Bars Support to Active Document Server

	Article: Q195031
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbCOMt kbLocalSvr kbMFC kbVC500 kbVC600 kbDSupport kbGrpDS
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Active Document Server (or DocObject Server) that has a splitter window
	(CSplitterWnd class) as its view will have splitter bars show up fine when it is
	running as a stand alone application. However, the splitter bars won't show up
	when it is embedded in an Active Document Container such as Internet Explorer or
	Microsoft Binder. This article presents a way to show the splitter bars in those
	containers.
	
	MORE INFORMATION
	================
	
	The BINDSCRB sample illustrates an example of building an Active Document
	Server. The code below is added to BINDSCRB for the splitter bars support.
	
	Steps to be taken:
	------------------
	
	1. Copy BINSCRB sample from Visual C++ CD-ROM.
	
	2. Override CreateInPlaceFrame() in CScribDoc class (a COleServerDoc- derived
	  class). This function is called to create a frame window for in- place
	  editing. The function is modified so it uses a splitter window (CSplitterWnd
	  class) as the view of the in-place frame window (a COleDocIPFrameWnd-derived
	  class).
	
	        COleIPFrameWnd* CScribDoc::CreateInPlaceFrame(CWnd* pParentWnd)
	        {
	           ASSERT_VALID(this);
	           ASSERT_VALID(pParentWnd);
	     
	           // Get run-time class from the doc template.
	           CDocTemplate* pTemplate = GetDocTemplate();
	           ASSERT_VALID(pTemplate);
	     
	           // Use existing view if possible.
	           CView* pView = NULL;
	           CFrameWnd* pFrame = GetFirstFrame();
	           if (pFrame != NULL)
	           {
	              pView =
	                 (CView*)pFrame->GetDescendantWindow(AFX_IDW_PANE_FIRST,
	     TRUE);
	              if (pView != NULL)
	              {
	                 ASSERT_KINDOF(CView, pView);
	                 m_dwOrigStyle = pView->GetStyle();
	                 m_dwOrigStyleEx = pView->GetExStyle();
	              }
	           }
	     
	           // Create the frame from the template, ALWAYS use the CView of the
	           // CSplitterWnd.
	           COleIPFrameWnd* pFrameWnd = (COleIPFrameWnd*)
	              pTemplate->CreateOleFrame(pParentWnd, this, FALSE);
	           if (pFrameWnd == NULL)
	              return NULL;
	     
	           // Connect the splitter window (CSplitterWnd class) to the
	           // COleDocIPFrameWnd.
	           CWnd* split = pFrame->GetWindow(GW_CHILD);
	           VERIFY(pFrame == split->SetParent(pFrameWnd));
	     
	           // Remember the original parent window for deactivate--uses the
	           // CFrameWnd-derived class (that is, CMDIChildWnd for MDI).
	           m_pOrigParent = pFrame;
	     
	           // Set the active view of COleDocIPFrameWnd.
	           pFrameWnd->SetActiveView(pView, FALSE);
	           pFrameWnd->RecalcLayout();
	           pView->ModifyStyleEx(WS_EX_CLIENTEDGE, 0, SWP_DRAWFRAME);
	     
	           // Verify the type.
	           ASSERT_VALID(pFrameWnd);
	           ASSERT_KINDOF(COleIPFrameWnd, pFrameWnd);
	           return pFrameWnd;
	        }
	
	3. Override DestroyInPlaceFrame() in CScribDoc class (a COleServerDoc- derived
	  class) to destroy the in-place frame window and return the server
	  application's document window to its state before in-place activation.
	
	        void CScribDoc::DestroyInPlaceFrame(COleIPFrameWnd* pFrameWnd)
	        {
	           ASSERT_VALID(this);
	           ASSERT_VALID(pFrameWnd);
	     
	           // connect view to original, if existing view was used
	           if (m_pOrigParent != NULL)
	           {
	              CView* pView = (CView*)pFrameWnd->GetDescendantWindow(
	     AFX_IDW_PANE_FIRST, TRUE);
	              ASSERT_VALID(pView);
	     
	              // Leaving the focus on an MDI child or one of its child
	              // windows causes Windows to get confused when the child window
	              // is destroyed, not to mention the fact that the focus will be
	              // out of sync with activation.
	              if (::GetFocus() == pView->m_hWnd)
	              {
	                 // Move focus to somewhere safe.
	                 HWND hWnd = ::GetParent(pFrameWnd->m_hWnd);
	                 if (hWnd != NULL)
	                    ::SetFocus(hWnd);
	     
	                 // Check again.
	                 if (::GetFocus() == pView->m_hWnd)
	                    SetFocus(NULL); // last ditch effort
	              }
	     
	              // Set parent of the splitter window (CSplitterWnd class) to be
	              // the CFrameWnd-derived class (that is, CMDIChildWnd for MDI
	              // application).
	              ASSERT_KINDOF(CFrameWnd, m_pOrigParent);
	              CFrameWnd* frame = (CFrameWnd*) m_pOrigParent;
	              CWnd* split = pFrameWnd->GetWindow(GW_CHILD);
	              VERIFY(pFrameWnd == split->SetParent(frame));
	     
	              // Set the active view of CFrameWnd-derived class (that is,
	              // CMDIChildWnd for MDI application).
	              frame->SetActiveView(pView, FALSE);
	              frame->RecalcLayout();
	     
	              m_pOrigParent = NULL;
	     
	              // Remove any scrollbars added because of in-place activation.
	              if ((m_dwOrigStyle & (WS_HSCROLL|WS_VSCROLL)) == 0 &&
	                 (pView->GetStyle() & (WS_HSCROLL|WS_VSCROLL)) != 0)
	              {
	                 ::SetScrollRange(pView->m_hWnd, SB_HORZ, 0, 0, TRUE);
	                 ::SetScrollRange(pView->m_hWnd, SB_VERT, 0, 0, TRUE);
	              }
	     
	              // Restore old 3D style.
	              pView->ModifyStyleEx(0, m_dwOrigStyleEx & WS_EX_CLIENTEDGE,
	                 SWP_DRAWFRAME);
	     
	              // Force recalc layout on splitter window.
	              CSplitterWnd* pSplitter = CView::GetParentSplitter(pView,
	                 TRUE);
	              if (pSplitter != NULL)
	                 pSplitter->RecalcLayout();
	           }
	     
	           // No active view or document during destroy.
	           pFrameWnd->SetActiveView(NULL);
	     
	           // Destroy in-place frame window.
	           pFrameWnd->DestroyWindow();
	        }
	
	REFERENCES
	==========
	
	References from Visual C++ online documentation:
	
	  TN029: Splitter Windows
	  BINDSCRB: Illustrates an MFC Binder-Compatible Server
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong- Kah
	Tam, Microsoft Corporation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbCOMt kbLocalSvr kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

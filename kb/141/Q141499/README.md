---
layout: page
title: "Q141499: VWRPLC32 Replacing a View in a CMDIChildWnd Window"
permalink: kb/141/Q141499/
---

## Q141499: VWRPLC32 Replacing a View in a CMDIChildWnd Window

	Article: Q141499
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbDocView kbMDI kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	This is the 32-bit version of this sample.
	
	SUMMARY
	=======
	
	The VWRPLC32 sample demonstrates how, in a Multidocument Interface (MDI)
	application, a programmer can write a ReplaceView() member function for a
	CMDIChildWnd-derived class.
	
	NOTE: The following samples, which also replace various views, exist:
	
	  SPLIT32 (SDI)
	  COLLECT (MDI)
	  ENROLL (SDI)
	  VSWAP32 (SDI)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Vwrplc32.exe now
	  (http://download.microsoft.com/download/vc60pro/Sample/2/WIN98/EN-US/Vwrplc32.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Vwrplc32vcnet.exe now
	  (http://download.microsoft.com/download/VisualStudioNET/sample/1.19/WIN98MeXP/EN-US/Vwrplc32vcnet.exe)
	
	Release Date: June 26, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	NOTE: Use the -d option when running VWRPLC32.EXE to decompress the file and
	re-create the proper directory structure.
	
	MORE INFORMATION
	================
	
	The core of the sample can be found in FRAME.CPP. You will see the following
	function:
	
	        BOOL CFrame::ReplaceView(CRuntimeClass * pViewClass)
	        {
	               CCreateContext context;
	               CView * pCurrentView;
	
	               // If no active view for the frame, return FALSE because
	               // thisfunction retrieves the current document from the active
	               // view.
	               if ((pCurrentView=GetActiveView())==NULL)
	                    return FALSE;
	
	               // If we're already displaying this kind of view, no need
	               // to go further.
	               if ((pCurrentView->IsKindOf(pViewClass))==TRUE)
	                    return TRUE;
	
	               // Get pointer to CDocument object so that it can be used
	               // in the creation process of the new view.
	               CDocument * pDoc= pCurrentView->GetDocument();
	
	               // Set flag so that document will not be deleted when
	               // view is destroyed.
	               BOOL bAutoDelete=pDoc->m_bAutoDelete;
	               pDoc->m_bAutoDelete=FALSE;
	               // Delete existing view
	               pCurrentView->DestroyWindow();
	               // restore flag
	               pDoc->m_bAutoDelete=bAutoDelete;
	
	               // Create new view and redraw.
	               context.m_pNewViewClass=pViewClass;
	               context.m_pCurrentDoc=pDoc;
	               context.m_pNewDocTemplate=NULL;
	               context.m_pLastView=NULL;
	               context.m_pCurrentFrame=this;
	
	               CView * pNewView = (CView *) pViewClass->CreateObject();
	
	               if (pNewView == NULL)
	               {
	                    TRACE1("Warning: Dynamic create of view type %Fs
	                                     failed\n", pViewClass->m_lpszClassName);
	                    return FALSE;
	               }
	
	               if (!pNewView->Create(NULL, NULL, AFX_WS_DEFAULT_VIEW,
	                            CRect(0,0,0,0), this, AFX_IDW_PANE_FIRST,
	                            &context))
	               {
	                    TRACE0("Warning: couldn't create view for frame\n");
	                    return FALSE; // Programmer can assume FALSE return value
	                                  // from this function means that there
	                                  // isn't a view.
	               }
	
	               // WM_INITIALUPDATE is define in AFXPRIV.H.
	               pNewView->SendMessage(WM_INITIALUPDATE, 0, 0);
	
	               RecalcLayout();
	
	               pNewView->UpdateWindow();
	
	               SetActiveView(pNewView);
	
	               return TRUE;
	        }
	
	The function receives a pointer to CRuntimeClass object for the new view that is
	desired. It destroys the old view and replaces it with a new view of the same
	CDocument. When DestroyWindow() is called for the old view, this causes a
	"delete this" in the CView::PostNcDestroy() function. Also, the CView::~CView
	destructor calls CView::RemoveView(), which removes the view from the document's
	view list.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q102829 Replacing a View in a CMDIChildWnd Window
	
	Additional query words: MDI Vwrplc32 Vwrplc32vcnet
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbDocView kbMDI kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	

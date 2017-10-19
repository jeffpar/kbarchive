---
layout: page
title: "Q99182: HOWTO: Change an MFC-Based MDI Child Window's Frame Text"
permalink: /kb/099/Q99182/
---

## Q99182: HOWTO: Change an MFC-Based MDI Child Window's Frame Text

	Article: Q99182
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC60
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A user may find it desirable to change the title of an MFC-based child window.
	To do this, PreCreateWindow() must be overridden for the child frame, and
	OnInitialUpdate() must be overridden for the view.
	
	MORE INFORMATION
	================
	
	These are the steps necessary to change the title of a multiple document
	interface (MDI) child window frame. When doing this, follow the rules of "The
	Windows Interface: An Application Design Guide" for child frame titles, which
	states the following:
	
	  ...a document window title bar should contain a caption that
	  displays the name of the document in the window.
	
	Add your customized information in addition to that.
	
	1. Create an MFC MDI application.
	
	2. Add a new class based on CMDIChildWnd. These steps assume the class is named
	  CMyChildFrame.
	
	3. Choose the project's main .CPP file and replace the CMDIChildWnd class in the
	  call to the AddDocTemplate() function to the new class you created.
	
	4. Include the newly created .H file at the top of the project's main .CPP file.
	
	5. Choose the .H file from the project list for the newly created class and add
	  the following line to the protected implementation section:
	
	        virtual BOOL PreCreateWindow(CREATESTRUCT &cs);
	
	  NOTE: With Visual C++ versions 4.x or 5.0, you may use ClassWizard to do the
	  above.
	
	6. Choose the .CPP file from the project list for the newly created class and
	  add the following to the end of the file:
	
	        BOOL CMyChildFrame::PreCreateWindow(CREATESTRUCT &cs)
	        {
	        // Do default processing.
	           if(CMDIChildWnd::PreCreateWindow(cs)==0) return FALSE;
	
	           return TRUE;
	        }
	
	  where CMyChildFrame is the class name of your newly created class. This
	  function calls the base class's version for the PreCreateWindow() function.
	
	7. Add the following code line to the newly created PreCreateWindow() function
	  immediately following the default call to CMDIChildWnd::PreCreateWindow():
	
	        cs.style&=~(LONG)FWS_ADDTOTITLE;
	
	8. Choose the .H file corresponding to your application's view window and add
	  the following code to the public implementation section:
	
	        virtual void OnInitialUpdate();
	
	  NOTE: With Visual C++ versions 4.x or 5.0, you may use ClassWizard to do the
	  above.
	
	9. Choose the .CPP file corresponding to your application's view window and add
	  the following code to the end of the file:
	
	        void CMyAppView::OnInitialUpdate()
	        {
	           // Do default processing.
	              CView::OnInitialUpdate();
	        }
	
	  where CMyAppView is the view class for the application.
	
	10. Add your customization code. Remember to follow the rules of "The Windows
	  Interface: An Application Design Guide" for child frame titles. Then add
	  your customized information, in addition to that, immediately following the
	  default call to CView::OnInitialUpdate(). An example of this is:
	
	        GetParent()->SetWindowText(GetDocument()->GetTitle()+
	           " - This is a test!");
	
	11. Build the program.
	
	12. Run it and you will see the change implemented. In this example, the first
	  view will display "Myapp1 - this is a test!". Additional views will be
	  identical except for the document name (Myapp1).
	
	NOTE: It is necessary to override OnInitialUpdate instead of OnCreate because the
	document has not been instantiated, and therefore calling GetTitle() would
	return an empty string.
	
	NOTE: It may also be necessary to override CDocument::CanCloseFrame() if multiple
	views of the same document are open. This is because the CMDIChildWnd member
	m_nWindow is not updated if FWS_ADDTOTITLE is not set for the MDI Child frame.
	This prevents the "Save File" dialog from coming up when any view other than the
	last view open for the document is closed.
	
	This does NOT apply to Visual C++ for Windows, version 1.52, and Visual C++
	32-bit Edition, versions 2.10 and above. The behavior of m_nWindows was modified
	in these versions to handle this scenario properly.
	
	The overridden function would look something like this:
	
	        BOOL CMyDoc::CanCloseFrame(CFrameWnd* pFrameArg)
	        {
	           ASSERT_VALID(pFrameArg);
	           UINT iCount = 0;
	
	           POSITION pos = GetFirstViewPosition();
	           while (pos != NULL)
	           {
	              CView* pView = GetNextView(pos);
	              ASSERT_VALID(pView);
	              CFrameWnd* pFrame = pView->GetParentFrame();
	              // assume frameless views are ok to close
	              if (pFrame != NULL)
	              {
	                 // assumes 1 document per frame
	                 ASSERT_VALID(pFrame);
	                 iCount++;
	            }
	        }
	            if ( iCount > 1 )
	              return TRUE;
	
	           // otherwise only one frame that we know about
	           return SaveModified();
	        }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMDI kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

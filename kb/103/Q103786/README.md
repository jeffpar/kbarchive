---
layout: page
title: "Q103786: HOWTO: Change Window Background Color with Foundation Classes"
permalink: /kb/103/Q103786/
---

## Q103786: HOWTO: Change Window Background Color with Foundation Classes

{% raw %}

	Article: Q103786
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To change the background color for a CView, CFrameWnd, or CWnd object, process
	the WM_ERASEBKGND message. The sample code below demonstrates how to do this.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	      BOOL CSampleView::OnEraseBkgnd(CDC* pDC)
	     {
	        // Set brush to desired background color
	        CBrush backBrush(RGB(255, 128, 128));
	
	        // Save old brush
	        CBrush* pOldBrush = pDC->SelectObject(&backBrush);
	
	        CRect rect;
	        pDC->GetClipBox(&rect);     // Erase the area needed
	
	        pDC->PatBlt(rect.left, rect.top, rect.Width(), rect.Height(),
	            PATCOPY);
	        pDC->SelectObject(pOldBrush);
	        return TRUE;
	     }
	
	To change the background color for a CMDIFrameWnd, you must subclass the multiple
	document interface (MDI) client window (window in the client area of
	CMDIFrameWnd) and process the WM_ERASEBKGND message. For more information about
	the MDI client window in an MDI application, see chapter 18 in "Programming
	Windows 3.1 - Third Edition" by Charles Petzold. For an example that shows how
	to subclass the MDICLIENT window, please see the article in the Microsoft
	Knowledge Base:
	
	  Q129471 HOWTO: Subclass the MDICLIENT by Using MFC
	
	To change the background color of an MDI client window (client area of a
	CMDIFrameWnd), perform the following steps using an AppWizard-generated
	application:
	
	1. Create a generic CWnd class with ClassWizard.
	
	2. Add a member variable, using the type of the CWnd class from step 1, to the
	  CMainFrame class.
	
	3. In the CMainFrame's OnCreate member function, after the call to the base
	  class CMDIFrameWnd::OnCreate(), add a call to SubclassWindow(). For example:
	
	        if (!m_wndNewClient.SubclassWindow(m_hWndMDIClient))
	        {
	          TRACE("Failed to subclass MDI client window\n");
	          return -1;      // fail to create
	        }
	
	  m_hWndMDIClient is the member variable of CMDIFrameWnd that contains the
	  handle to the MDI client window. Also, replace "m_wndNewClient" with the data
	  member that you created in step 2.
	
	4. Whenever a window is subclassed, the GetSuperWndProcAddr() member function
	  for the CWnd needs to be overridden to provide storage for the old window
	  procedure's address. To do that, add the following function to the
	  implementation of the CWnd class created in step 1:
	
	        WNDPROC* CNewClientWnd::GetSuperWndProcAddr()
	        {
	           static WNDPROC NEAR pfnSuper = NULL;
	           return &pfnSuper;
	        }
	
	  NOTE: Replace "CNewClientWnd" above with the name of your class.
	
	  For more information on subclassing windows using the Microsoft Foundation
	  Classes, please see the following materials:
	
	   - "Class Library Reference" for functions CWnd::SubclassWindow(),
	     CWnd::GetSuperWndProcAddr(), and CWnd::SubclassDlgItem()
	
	   - Query on the following words in the Microsoft Knowledge Base:
	
	  subclass and sample and mfc
	
	   - See the CTRLTEST MFC sample application that is provided with Visual C++
	     for Windows and Visual C++ 32-bit Edition.
	
	   - See the article titled "Subclassing Windows with the Microsoft Foundation
	     Class Library" on the Microsoft Developer Network (MSDN) CD.
	
	5. Override the WM_ERASEBKGND message for the generic CWnd class, using the code
	  listed above.
	
	To change the background color of a CFormView object, either process the
	WM_ERASEBKGND message and use the code above or process the WM_CTLCOLOR message
	to change the background color.
	
	For more information on changing the background color of a dialog box by
	processing the WM_CTLCOLOR message, please query on the following words in the
	Microsoft Knowledge Base:
	
	  changing and background and color and MFC
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

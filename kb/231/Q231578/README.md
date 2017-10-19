---
layout: page
title: "Q231578: FIX: Hosting a WebBrowser Control in an MFC Container ASSERTs"
permalink: /kb/231/Q231578/
---

## Q231578: FIX: Hosting a WebBrowser Control in an MFC Container ASSERTs

	Article: Q231578
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC500 kbVC500bug kbVC600bug kbWebBrowser kb
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Take a CHtmlView based application or have a dialog hosting a web browser
	control. Go to a local folder. Right-click and select either New Folder or one
	of the file types listed there. It will ASSERT in WinOcc.cpp, Line 331. This
	does not have any impact on the release build.
	
	CAUSE
	=====
	
	This is due to a bug in MFC for UI activation of an ActiveX control.
	
	RESOLUTION
	==========
	
	Override the PreTranslateMessage function in the dialog class or the one derived
	from CHtmlView. If the message is WM_RBUTTONDOWN, return 0. The code should look
	like this:
	
	  BOOL CMyDialog::PreTranslateMessage(MSG* pMsg) 
	  {
	  	if (pMsg->message == WM_RBUTTONDOWN)
	  		return 0;
	
	  	return CDialog::PreTranslateMessage(pMsg);
	  }
	
	This eliminates the possibility of having a context menu for the container.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Visual C++ 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Generate an AppWizard application and select CHtmlView class as the base
	  class of your view class in Step 6 of the AppWizard.
	
	2. Provide a valid path to one of the local folders. Modify the OnInitialUpdate
	  of the view class as shown below:
	
	  void CMyHTMLView::OnInitialUpdate()
	  {
	  	CHtmlView::OnInitialUpdate();
	
	  	Navigate2(_T("C:\\Temp"),NULL,NULL);
	  }
	
	3. Build the EXE and run it.
	
	4. Right-click inside the view and select New Folder.
	
	Additional query words: CHtmlView
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC500 kbVC500bug kbVC600bug kbWebBrowser kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

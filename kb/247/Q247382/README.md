---
layout: page
title: "Q247382: PRB: ToolTips for Controls in ActiveX Document Server Are Hidden"
permalink: kb/247/Q247382/
---

## Q247382: PRB: ToolTips for Controls in ActiveX Document Server Are Hidden

	Article: Q247382
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveDocs kbCmnCtrls kbCOMt kbContainer kbMFC kbToolTip kbVC500 kbVC600 kbDSupport k
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To add ToolTips for controls in the ActiveX Document server, you can use the
	Microsoft Foundation Classes (MFC) default implementation by calling the
	EnableToolTips function, which works correctly. However, for more flexible
	functionality of the ToolTip, you can also use the CTooltipCtrl class to create
	your own ToolTip control object. If the ToolTips are created by using the
	CTooltipCtrl class, it is not shown in the ActiveX Document Container.
	
	CAUSE
	=====
	
	When the user calls the server from the document container, the main frame
	window is the container's frame window, (that means that the window procedure is
	a different window procedure). Thus, it mixes up the z-order of the windows.
	However, although the ToolTip window is actually being shown, it is hidden
	behind the window of the server.
	
	RESOLUTION
	==========
	
	To work around the problem, set the z-order of the ToolTips to the topmost level
	after creating the ToolTips. This sample code illustrates the workaround:
	
	  void CTestView::OnInitialUpdate()
	  {
	  	CFormView::OnInitialUpdate();
	  	ResizeParentToFit();
	
	  	CButton * mButton = (CButton *)GetDlgItem(IDC_BUTTON1);
	
	  	if( !m_tooltip.Create(this,TTS_ALWAYSTIP))
	  		TRACE(_T("Unable to Create ToolTip"));
	  	else if( !m_tooltip.AddTool( mButton, "Show the tooltips"))
	  		 TRACE(_T("Unable to add tip for the control window"));
	  	else
	  	{
	  	    m_tooltip.SetWindowPos(&wndTopMost,0,0,0,0,SWP_SHOWWINDOW|
	                                      SWP_NOSIZE |SWP_NOMOVE);    
	  	    m_tooltip.Activate(TRUE);
	  	}	
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the MFC AppWizard to generate an ActiveX Document Server application.
	  That is, at step 3 of 6, under the category "What compound document support
	  would you like to include?", select Full-server and check Active Document
	  Server. At step 6, select CFormView as the base class of the view.
	
	2. Add a button, IDC_BUTTON1, to the form view's resource template.
	
	3. Add a private member variable to the view class, as shown here:
	
	  CToolTipCtrl m_tooltip; 
	
	4. In the OnInitialUpdate function of the view class, insert the following code
	  snippet to create the ToolTip for the button.
	
	  CButton * mButton = (CButton *)GetDlgItem(IDC_BUTTON1);
	
	  if( !m_tooltip.Create(this,TTS_ALWAYSTIP))
	  	TRACE(_T("Unable to Create ToolTip"));
	  else if( !m_tooltip.AddTool( mButton, "Show the tooltips"))
	          TRACE(_T("Unable to add tip for the control window"));
	  else
	       m_tooltip.Activate(TRUE);
	
	5. Override the PreTranslateMessage function of the view class and add the
	  following code to it:
	
	  if(pMsg->message== WM_LBUTTONDOWN ||
	     pMsg->message== WM_LBUTTONUP || 
	     pMsg->message== WM_MOUSEMOVE)
	  	
	     m_tooltip.RelayEvent(pMsg);	
	
	6. Build the application and run it once as a stand alone application. Move the
	  pointer over the button. Note that the ToolTip is shown correctly.
	
	7. Now use the MFC AppWizard to generate an ActiveX Document Container
	  application. That is, at step 3 of 6, under the category "What compound
	  document support would you like to include?", select Container and check
	  Active Document Container. Choose the default settings similar the other
	  steps except exclude step 3.
	
	8. Build and run the container application. Under the menu item select Edit and
	  Insert New Object. Choose the name of your server from the Insert Object
	  dialog box and click OK
	
	9. Move the pointer over the button. Notice that the ToolTip is not visible.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Yana Wang, Microsoft Corporation
	
	
	Additional query words: CTooltipCtrl SetWindowPos
	
	======================================================================
	Keywords          : kbActiveDocs kbCmnCtrls kbCOMt kbContainer kbMFC kbToolTip kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

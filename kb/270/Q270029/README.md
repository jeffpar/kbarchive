---
layout: page
title: "Q270029: BUG: COleControl::SetControlSize Function Does Not Work"
permalink: /kb/270/Q270029/
---

## Q270029: BUG: COleControl::SetControlSize Function Does Not Work

	Article: Q270029
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbETK kbOSWinCEsearch kbDSupport kbGrpDSETK kbCodeSnippet
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the COleControl::SetControlSize function from within a Windows CE
	(WCE) Microsoft Foundation Classes (MFC) ActiveX ControlWizard generated ActiveX
	control, the ActiveX control does not resize properly.
	
	RESOLUTION
	==========
	
	To solve the problem, in addition to calling the COleControl::SetControlSize
	function, also call the SetWindowPos Win32 API function to resize the parent
	window of the control as shown in the following code example:
	
	  BOOL gfTest = FALSE;
	
	  void CMYCONTROLCtrl::OnLButtonDown(UINT nFlags, CPoint point) 
	  {
	  	if (gfTest) {
	  		gfTest = FALSE;
	  		((CWnd*)this)->GetParent()->SetWindowPos(NULL, 0, 0, 100, 100, SWP_NOZORDER | SWP_NOMOVE | SWP_NOACTIVATE);
	  		SetControlSize(100, 100);
	  	}
	  	else {
	  		gfTest = TRUE;
	  		((CWnd*)this)->GetParent()->SetWindowPos(NULL, 0, 0, 200, 200, SWP_NOZORDER | SWP_NOMOVE | SWP_NOACTIVATE);
	  		SetControlSize(200, 200);
	  	}
	
	  	COleControl::OnLButtonDown(nFlags, point);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX control by using the eVC WCE MFC ActiveX Control Wizard
	  and accept all the default settings.
	
	2. Use the ClassWizard to add a handler for the WM_LBUTTONDOWN message.
	
	3. Within the message handler add the following code, which does resize the
	  control when you left-click the control:
	
	  BOOL gfTest = FALSE;
	
	  void CMYCONTROLCtrl::OnLButtonDown(UINT nFlags, CPoint point) 
	  {
	  	// TODO: Add your message handler code here and/or call default
	  	if (gfTest) {
	  		gfTest = FALSE;
	  		SetControlSize(100, 100);
	  	}
	  	else {
	  		gfTest = TRUE;
	  		SetControlSize(200, 200);
	  	}
	
	  	COleControl::OnLButtonDown(nFlags, point);
	  }
	
	4. Compile, link and deploy the ActiveX control.
	
	5. Host the control within an eVB or eVC application.
	
	RESULT: The control does not resize when you left-click the control.
	
	Additional query words: SetControlSize ActiveX wince
	
	======================================================================
	Keywords          : kbETK kbOSWinCEsearch kbDSupport kbGrpDSETK kbCodeSnippet 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbVCeMb kbWinCETK600VC
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

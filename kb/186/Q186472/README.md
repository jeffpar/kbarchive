---
layout: page
title: "Q186472: PRB: MFC Subclassed Static Control Does Not Work in VB5"
permalink: /kb/186/Q186472/
---

## Q186472: PRB: MFC Subclassed Static Control Does Not Work in VB5

	Article: Q186472
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0; winnt:5.0
	Operating System(s): 
	Keyword(s): kbinterop kbActiveX kbCtrl kbCtrlCreate kbMFC kbVBp500 kbVC500 kbGrpDSVB kbDSupport
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an MFC control that subclasses a Static Window class is placed on a Visual
	Basic form, two unexpected behaviors occur:
	
	- The MFC ActiveX control does not respond to Windows messages, such as
	  WM_LBUTTONDOWN.
	
	- When you double-click the control while the Visual Basic client is in
	  run-time mode, the control's Property Page dialog box appears.
	
	RESOLUTION
	==========
	
	To work around this problem, add a message handler for WM_NCHITTEST:
	
	1. Open the Control Workspace (.dsw) file in Developer Studio.
	
	2. Use the Class wizard to add a message handler for WM_NCHITTEST. Edit the code
	  to return HTCLIENT. Change your code to look like the following:
	
	        UINT CMySubClCtrl::OnNcHitTest(CPoint point)
	        {
	          // TODO: Add your message handler code here and/or call default.
	
	          //Return COleControl::OnNcHitTest(point);
	          return HTCLIENT;
	        }
	
	3. Rebuild the control.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ActiveX Control with the MFC ActiveX Control Wizard. Select the
	  STATIC Window class to subclass.
	
	2. Use the Class wizard to add a message handler for WM_LBUTTONDOWN. Change your
	  code to look like the following:
	
	        void CMySubClCtrl::OnLButtonDown(UINT nFlags, CPoint point)
	        {
	          AfxMessageBox("StaticSubclass");
	          COleControl::OnLButtonDown(nFlags, point);
	        }
	
	3. Build this control.
	
	4. Launch Visual Basic and create a new Standard EXE project.
	
	5. Click Components on the Project menu and select the ActiveX Control you just
	  created.
	
	6. Place the ActiveX control on Form1.
	
	7. Run the project.
	
	8. Click the ActiveX control. Notice that no MessageBox appears and that if you
	  double-click the control, the control's property page appears.
	
	  NOTE: In step 1, if the EDIT Window class is subclassed instead of the STATIC
	  Window class, the MFC ActiveX control works as expected. The information in
	  this article is specific to the STATIC Window class.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbActiveX kbCtrl kbCtrlCreate kbMFC kbVBp500 kbVC500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbMFC kbZNotKeyword2
	Version           : WINDOWS:5.0; winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

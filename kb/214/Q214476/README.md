---
layout: page
title: "Q214476: PRB: TAB Behavior When Using MFC Subclassed Control on VB Form"
permalink: kb/214/Q214476/
---

## Q214476: PRB: TAB Behavior When Using MFC Subclassed Control on VB Form

	Article: Q214476
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbMFC kbVBp kbVBp500 kbVBp600 kbVC kbVC500 kbVC600 kbGrpDSVB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are working with a Microsoft Foundation Classes (MFC) control based on or
	subclassed from another control, for example, a combo box. You place the MFC
	control and other controls on a Visual Basic form and run the project. When you
	click the composite control on the MFC control and press the TAB key, the focus
	does not change.
	
	CAUSE
	=====
	
	To tab from control to control, the TAB key must be processed by the container.
	This only occurs when the control is In Place Activated. When you click the
	combo box on the MFC control, the composite control receives the focus, but the
	entire MFC control is not In Place Activated.
	
	RESOLUTION
	==========
	
	Use the following in both the OnCreate function and the OnMouseActivate function
	to In Place Activate the control:
	
	  OnActivateInPlace (TRUE, NULL);
	
	Note that after these changes have been made, other accelerator keys, like the
	arrow keys, will also be processed by the container when the MFC control
	receives the focus. However, you may want your control to process these keys. To
	solve this problem, you need to intercept the messages in the control's
	PreTranslateMessage function. This is described in the following Microsoft
	Knowledge Base article:
	
	  Q168777 PRB: MFC ActiveX Control in IE Doesn't Detect Keystrokes
	
	The last remaining issue is that when you tab through the controls on the form,
	the cursor is not on your MFC control when it receives the focus. You must set
	the focus to the composite control.
	
	MORE INFORMATION
	================
	
	Steps to Create a Sample Control Using Visual C 6.0:
	
	1. Open Visual C++ 6.0 and create a new MFC ActiveX Control Wizard project named
	  MyCombo. Click OK, and then click Finish in the MFC ActiveX Control Wizard
	  dialog box.
	
	2. Select the FileView tab and expand the MyCombo files and Header files nodes.
	  Open MyComboCtl. and add the following code after the statement
	  ~CMyComboCtrl():
	
	     CComboBox m_ComboBox;
	
	3. From the View menu, choose Class Wizard. In the Messages list box,
	  double-click WM_CREATE and click the Edit Code button. Replace the //TODO
	  statement in the OnCreate function with the following code:
	
	     //Get the control's client area and add 100 to the size so that 
	     //when the control is opened, it has enough space to display
	     //the list box.
	
	     CRect L_rectClient;
	
	     GetClientRect(L_rectClient);
	     L_rectClient.bottom += 100;
	
	     //Set the combo box's style.
	
	     DWORD L_dwComboStyle = WS_CHILD | WS_VISIBLE | WS_TABSTOP;
	
	     L_dwComboStyle	|= CBS_DROPDOWN;
	     L_dwComboStyle	|= CBS_SORT;
	
	     //Create the combo box.
	
	     m_ComboBox.Create(L_dwComboStyle, L_rectClient, this, IDC_COMBO);
	
	     //Add the strings to the list part of the combo box.
	
	     if(AmbientUserMode() != FALSE)
	     {
	        // This is for run-time.
	        m_ComboBox.AddString(_T("item1"));
	        m_ComboBox.AddString(_T("item2"));
	        m_ComboBox.AddString(_T("item3"));
	        m_ComboBox.AddString(_T("item4"));
	        m_ComboBox.AddString(_T("item5"));
	        m_ComboBox.SetWindowText(_T("item1"));
	     }
	     else  // this is for design time
	        m_ComboBox.SetWindowText(_T("MyCombo"));
	
	4. Select the Resource View tab, right click on the topmost node, and click
	  Resource Symbols. In the Resource Symbols dialog box, click the New button,
	  type IDC_COMBO in the Name field, click OK, and then click Close.
	
	5. In the OnDraw function in MyComboCtl.cpp comment out the following line:
	
	     pdc->Ellipse(rcBounds);
	
	6. On the Build menu, choose Rebuild All. The control will automatically be
	  registered.
	
	Steps to Create a Visual Basic Test Sample:
	
	1. From the Project menu, choose Components. Select the item MyCombo ActiveX
	  Control module from the Components list box. Click OK. The control is added
	  to the toolbox.
	
	2. Add a text box and a MyCombo control to the form.
	
	3. Run the application. Click the combo box of MyCombo and then press the TAB
	  key. The focus does not shift to the other control.
	
	4. Close the Visual Basic project so that the MFC control can be modified.
	
	Steps to Modify the Control to Resolve the Problem:
	
	1. In the OnCreate function, in the MyComboCtl.cpp file, add the following line
	  before the return statement:
	
	     OnActivateInPlace (TRUE, NULL); // == UI-Activate the control
	
	2. From the View menu, choose Class Wizard. Double-click PreTranslateMessage,
	  WM_MOUSEACTIVATE, and WM_SETFOCUS in the Messages list box.
	
	3. Replace the functions PreTranslateMessage, OnMouseActivate, and OnSetFocus in
	  the MyComboCtl.cpp file, with the following code:
	
	     BOOL CMyComboCtrl::PreTranslateMessage(MSG* pMsg) 
	     {
	        switch(pMsg->message)
	        {
	           case WM_KEYDOWN:
	           case WM_KEYUP:
	
	              switch(pMsg->wParam)
	              {
	                 case VK_UP:
	                 case VK_DOWN:
	                 case VK_LEFT:
	                 case VK_RIGHT:
	                 case VK_HOME:
	                 case VK_END:
	                    //these messages need to be processed by the combo box
	                 m_ComboBox.SendMessage(pMsg->message, pMsg->wParam,    pMsg->lParam);
	
	                    return TRUE;
	              }
	           break;
	        }
	        //other messages need to be processed by container first
	        return COleControl::PreTranslateMessage(pMsg);
	     }
	
	     int CMyComboCtrl::OnMouseActivate(CWnd* pDesktopWnd, UINT nHitTest, UINT    message) 
	     {
	        OnActivateInPlace (TRUE, NULL); // == UI-Activate the control	
	        return COleControl::OnMouseActivate(pDesktopWnd, nHitTest, message);
	     }
	
	     void CMyComboCtrl::OnSetFocus(CWnd* pOldWnd) 
	     {
	        COleControl::OnSetFocus(pOldWnd);
	        //set the focus to the composite control to show the cursor
	        m_ComboBox.SetFocus();  
	     }
	   
	
	4. From the Build menu, choose Rebuild All to rebuild the project.
	
	Repeat the steps you used to create the Visual Basic test project. Now, the
	tabbing should work correctly.
	
	REFERENCES
	==========
	
	For additional information about focus issues with MFC controls, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q168777 PRB: MFC ActiveX Control in IE Doesn't Detect Keystrokes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrlCreate kbMFC kbVBp kbVBp500 kbVBp600 kbVC kbVC500 kbVC600 kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

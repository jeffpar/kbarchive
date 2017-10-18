---
layout: page
title: "Q197504: PRB: KeyPress Problem When Using MFC Control on MDI Child Form"
permalink: kb/197/Q197504/
---

## Q197504: PRB: KeyPress Problem When Using MFC Control on MDI Child Form

	Article: Q197504
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbMFC kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You insert controls created in Visual C++ using the Microsoft Foundation Classes
	(MFC) on a multiple-document interface (MDI) child form. Your MFC control
	includes the stock event KeyPress and you display a message box in the KeyPress
	event handler. After you click this control, on a MDI child form and press a
	key, the event fires. However, if you press a key again, the event does not
	fire.
	
	CAUSE
	=====
	
	When the message box displays and is then dismissed, the MFC control loses the
	input focus. Consequently, the next key press message is not sent to the
	control.
	
	RESOLUTION
	==========
	
	To resolve the problem, you can set the focus back to that control after the
	KeyPress event fires.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Steps to Create an MFC Control
	------------------------------
	
	1. From the File menu, choose "New..." and then click the Projects tab.
	
	2. Next, select the "MFC ActiveX Control Wizard". In the Project Name text box,
	  type "MyMfcCtrl" (without the quotation marks), and then click OK. Select all
	  the default settings as you step through the wizard.
	
	3. From the View menu, choose Class Wizard. Click the "ActiveX Events" tab in
	  the MFC ClassWizard dialog box. Click the "Add Event..." button and the Add
	  Event dialog box displays. In the External Name drop-down combo box, select
	  KeyPress. Select the Stock option box located in the Implementation group.
	  Click OK then click OK again. This adds the KeyPress event to your control.
	
	4. Build the project and the control registers automatically.
	
	Steps to Create a Visual Basic Sample
	-------------------------------------
	
	1. From the File menu, choose New Project and select the "VB Application
	  Wizard". Click OK and select all the default settings as you go step through
	  the wizard.
	
	2. From the Project menu, choose Components. In the Components dialog box, click
	  the Controls tab. Select the "MyMfcCtrl ActiveX control module" and then
	  click OK.
	
	3. Remove the RichTextBox from the frmDocument and add a MyMfcCtrl to
	  frmDocument keeping the default names.
	
	4. Remove all of the code in the Code window of frmDocument.
	
	5. Add the following code to the Code window of frmDocument:
	
	        Private Sub MyMfcCtrl1_KeyPress(KeyAscii As Integer)
	           MsgBox "key Pressed"
	        End Sub
	
	6. Press F5 to run the application then follow these steps:
	
	  a. Click the MFC control on the child form.
	
	  b. Press a non-tab key and you see the message box "Key Pressed".
	
	  c. Dismiss the message box then press a non-tab key again.
	
	RESULTS: No message box displays at this time. This is incorrect.
	
	7. Close the project.
	
	Steps to Correct the Problem
	----------------------------
	
	1. Open the MyMfcCtrl project.
	
	2. From the View menu, choose the Class Wizard, and then click the "Message
	  Maps" tab. In the Class name drop-down list box, select CmyMfcCtrlCtrl.
	  Double-click the WM_CHAR item in the Messages list box then click OK. The
	  following message handler is added by the wizard:
	
	        void CMyMfcCtrlCtrl::OnChar(UINT nChar, UINT nRepCnt, UINT nFlags)
	
	3. Change the OnChar message handler in the MyMfcCtrlCtl.cpp file to be as
	  follows:
	
	        void CMyMfcCtrlCtrl::OnChar(UINT nChar, UINT nRepCnt, UINT nFlags)
	        {
	           COleControl::OnChar(nChar, nRepCnt, nFlags);
	           SetFocus();
	        }
	
	4. Add the following code to the MyMfcCtrlCtl.h file as the last member
	  function:
	
	        BOOL PreTranslateMessage(MSG* pMsg)
	        {
	           if(pMsg->message == WM_CHAR)
	           {
	              SendMessage(pMsg->message, pMsg->wParam, pMsg->lParam);
	              return TRUE;
	           }
	
	           return COleControl::PreTranslateMessage(pMsg);
	        }
	
	5. Build the project again.
	
	6. Test the Visual Basic project again and it works correctly.
	
	REFERENCES
	==========
	
	For other problems related to using MFC controls in MDI forms, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q192347 PRB: Focus/Activation Problems with MFC Control on VB Forms
	
	  Q197503 PRB: Focus Problem When MFC Control is Used on MDI Child Form
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrlCreate kbMFC kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

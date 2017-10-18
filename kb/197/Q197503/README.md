---
layout: page
title: "Q197503: PRB: Focus Problem Using MFC Control on MDI Child Form"
permalink: kb/197/Q197503/
---

## Q197503: PRB: Focus Problem Using MFC Control on MDI Child Form

	Article: Q197503
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
	
	You put controls created in Visual C++ using the Microsoft Foundation Classes
	(MFC) on a multiple-document interface (MDI) child form. Additionally, you have
	some non-MFC controls on the MDI form (parent). You find that after you click
	the MFC control on the child form, click one of the non-MFC controls on the MDI
	form and then press the tab key, the focus moves to another control on the child
	form instead of the MDI form.
	
	This behavior also occurs in similar situations where the project consists of
	child and parent forms with MFC controls used on at least one of the forms.
	
	CAUSE
	=====
	
	When you click the MFC control, the control is UIActivated in the container.
	However, when you click another non-MFC control on another form, the container
	does not UIDeactivate the MFC control automatically.
	
	RESOLUTION
	==========
	
	To resolve the problem, UIDeactivate the control when it loses the focus.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Steps to Create a MFC Control
	-----------------------------
	
	1. In Visual C, from the File menu, choose "New...", click the Projects tab and
	  then select "MFC ActiveX Control Wizard".
	
	2. In the Project name text box, type MyMfcCtrl, and then click OK. Keep all the
	  default settings as you go through the wizard steps.
	
	3. Build the project and the control registers automatically.
	
	Steps to Create a Visual Basic Sample
	-------------------------------------
	
	1. From the File menu, choose New Project then select the "VB Application
	  Wizard". Click OK and keep all the default settings as you go through the
	  wizard steps.
	
	2. From the Project menu, choose "Components..." then select "MyMfcCtrl ActiveX
	  control module". Click OK.
	
	3. Add a PictureBox to frmMain.
	
	4. Add two Command buttons and then one MyMfcCtrl to the PictureBox and keep the
	  default settings.
	
	5. Remove the RichTextBox on the frmDocument. Add a text box and then a
	  MyMfcCtrl to frmDocument and keep the default names.
	
	6. Remove all of the code in the code window of frmDocument.
	
	7. Press F5 to run the application, then follow these steps:
	
	  a. Click a text box on the child form.
	
	  b. Click the Command1 button on the MDI form.
	
	  c. Press the TAB key.
	
	     The focus is now on the Command2 button on the MDI form, which is correct.
	
	  d. Click the MFC control on the child form.
	
	  e. Click the MFC control on the MDI form.
	
	  f. Press the TAB key twice (first TAB moves focus to the PictureBox.)
	
	     The focus is now on the Command1 button on the MDI form, which is correct.
	
	  g. Click the MFC control on the child form.
	
	  h. Click the Command1 button on the MDI form.
	
	  i. Press the TAB key.
	
	     The focus is now on the text box on the child form. This is incorrect.
	
	  j. Close the project.
	
	Steps to Resolve the Problem (Modify the OCX)
	---------------------------------------------
	
	1. Open the MyMfcCtrl project created in the "Steps to Create a MFC Control"
	  section.
	
	2. From the View menu, select Class Wizard then click the Message Maps tab.
	  Choose CMyMfcCtrlCtrl from the Class Name drop-down list box. Double- click
	  the WM_SETFOCUS item in the Messages list box. Click OK and the following
	  message handler is added by the wizard:
	
	        void CMyMfcCtrlCtrl::OnSetFocus(CWnd* pOldWnd)
	
	3. Modify the OnSetFocus message handler in the MyMfcCtrlCtl.cpp file to be as
	  follows:
	
	        void CMyMfcCtrlCtrl::OnSetFocus(CWnd* pOldWnd)
	        {
	           COleControl::OnSetFocus(pOldWnd);
	           // this will make sure that the control will be activated in place
	           OnActivateInPlace(TRUE, NULL);
	        }
	
	4. In ClassView, right-click _DMyMfcCtrl then select "Add Method...". In the Add
	  Method dialog box, type DeActivate in the External name drop-down list box.
	  Select void from the Return Type drop-down list box. Click OK and the new
	  automation method DeActivate is added. Change this function in the
	  MyMfcCtrlCtl.cpp file as follows:
	
	        void CMyMfcCtrlCtrl::DeActivate()
	        {
	           // TODO: Add your dispatch handler code here
	           m_xOleInPlaceObject.UIDeactivate();
	        }
	
	5. Build the project again.
	
	Steps to Resolve the Problem (Modify Visual Basic)
	--------------------------------------------------
	
	1. Open the Visual Basic project created previously and add the following code
	  into the Code window of the child form:
	
	        Private Sub MyMfcCtrl1_LostFocus()
	           MyMfcCtrl1.DeActivate
	        End Sub
	
	2. Test the Visual Basic project again. Now, it works correctly.
	
	REFERENCES
	==========
	
	For other problems related to using the MFC controls in MDI forms, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q192347 PRB: Focus/Activation Problems with MFC Control on VB Forms
	
	  Q197504 PRB: KeyPress Problem When Using MFC Control on MDI Child Form
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrlCreate kbMFC kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

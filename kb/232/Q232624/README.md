---
layout: page
title: "Q232624: PRB: Accelerator Keys Fail with ATL Control on VB UserControl"
permalink: /kb/232/Q232624/
---

## Q232624: PRB: Accelerator Keys Fail with ATL Control on VB UserControl

	Article: Q232624
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0; winnt:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbActiveX kbATL kbCtrlCreate kbVBp600 kbVC600 kbGrpDSVB
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an ActiveX Template Library (ATL) control created with Visual C++ 6.0 is
	placed directly on a Visual Basic form, the accelerator keys will work
	correctly. However, if the control is first placed inside a Visual Basic
	Usercontrol and the usercontrol is then placed on a form, the accelerator keys
	will not work.
	
	CAUSE
	=====
	
	This is due to the ATL control not giving the composite control the chance to
	handle the accelerator keys.
	
	RESOLUTION
	==========
	
	Explicitly forward the message to the composite control.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Steps to Create an ATL Control with Visual C++ 6.0:
	
	1. Open the Microsoft Visual C++ 6.0 integrated development environment (IDE)
	  and select New from the File menu. In the New dialog box, select the Projects
	  tab and then choose "ATL COM AppWizard" from the list of project types. Type
	  "MyEditCtl" in the Project name text box and then click OK. Click Finish in
	  the ATL COM AppWizard dialog box and then click OK in the next dialog box
	  that displays. You have just created an ATL project.
	
	2. In the class view of the project, right-click "MyEditCtl Classes" and select
	  New ATL Object from the drop-down box. The ATL Object Wizard dialog box
	  displays. Click controls from the Category list box and then choose Full
	  Control from the Objects list box. Click Next. Type "MyCtl" in the "short
	  name" text box. Click the Miscellaneous tab and then select Edit from the
	  "Add control based on" combo box and then click OK. A new control is added to
	  your ATL project.
	
	3. Build the project by selecting Build MyEditCtl.dll from the Build menu. The
	  control will be automatically registered.
	
	Steps to Create Visual Basic Client:
	
	1. Create a standard EXE project with Visual Basic 6.0. Form1 is created by
	  default.
	
	2. Select Components from the Projects menu. Select MyEditCtl 1.0 Type Library
	  from the list and then click OK. You should now see that MyCtl has been added
	  to the toolbox.
	
	3. Select Add User Control from the Projects menu and then click open in the Add
	  User Control dialog box.
	
	4. Add "MyCtl" to the user control. Close the user control design window.
	
	5. Open the Form1 design window. Place "MyCtl" and the user control that you
	  just created onto Form1.
	
	6. Press F5 to run the application. Type some characters into both of the MyCtl
	  controls. If you press the arrow keys in the MyCtl that is directly on the
	  form, they work as expected. However, if you use the arrow keys in the MyCtl
	  that is contained within the user control, it will move the focus to another
	  control.
	
	7. Save and close the Visual Basic project.
	
	Steps to Resolve the Problem
	----------------------------
	
	1. Open the ATL project. In the Class view, expand CMyCtl and then double-click
	  "PreTranslateAccelerator(LPMSG pMsg, HRESULT& hRet)". Now MyCtl.h is
	  opened in the editor window.
	
	2. Replace the PreTranslateAccelerator function with the following code:
	
	     BOOL PreTranslateAccelerator(LPMSG pMsg, HRESULT& hRet)
	     {
	        if(pMsg->message == WM_KEYDOWN && 
	           (pMsg->wParam == VK_LEFT || 
	           pMsg->wParam == VK_RIGHT ||
	           pMsg->wParam == VK_UP ||
	           pMsg->wParam == VK_DOWN))
	        {
	           hRet = S_OK; 
	           m_ctlEdit.SendMessage(pMsg->message, pMsg->wParam, pMsg->lParam);
	           return TRUE;
	        }
	        //TODO: Add your additional accelerator handling code here
	        return FALSE;
	     }
	
	3. Rebuild the project.
	
	Run the Visual Basic test project. The arrow keys should behave correctly in
	either control.
	
	REFERENCES
	==========
	
	For additional information on problems using ATL controls on Visual Basic forms,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q230326 PRB: Validate Event does not fire when changing focus with mouse to
	  ATL control
	
	  Q187644 ATL Controls Fail to Recognize Default Button on VB Form
	
	  Q179696 PRB: Focus and Tab Issues with ATL Subclassed Edit Control
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbActiveX kbATL kbCtrlCreate kbVBp600 kbVC600 kbGrpDSVB 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVC600 kbVC32bitSearch
	Version           : WINDOWS:6.0; winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	

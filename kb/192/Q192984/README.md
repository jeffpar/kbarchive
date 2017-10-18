---
layout: page
title: "Q192984: PRB: ATL Classes Are Not Compatible With ClassWizard"
permalink: kb/192/Q192984/
---

## Q192984: PRB: ATL Classes Are Not Compatible With ClassWizard

	Article: Q192984
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbClassWizard kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ Resource Editor invokes ClassWizard to add message handlers to an
	Active Template Library (ATL) dialog resource. However, ClassWizard does not
	recognize classes created with the ATL Object Wizard.
	
	CAUSE
	=====
	
	ClassWizard works with MFC classes and does not handle ATL classes or message
	maps.
	
	RESOLUTION
	==========
	
	Add message maps to ATL classes manually. Use ClassView or the WizardBar to add
	member functions and variables.
	
	In Visual C++, version 6.0, WizardBar or ClassView can add generic Windows
	messages to ATL classes.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you right-click on an ATL class name in ClassView a context menu appears.
	From the context menu, select the Add Member Function option to create the
	message handler function. A generic message handler function returns an LRESULT
	and has this prototype:
	
	     LRESULT OnMsg(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled);
	
	After adding the message handler function prototype, edit the message map
	embedded in the class declaration. Add this macro between the BEGIN_MSG_MAP and
	END_MSG_MAP macros:
	
	     MESSAGE_HANDLER(message_id, function_name)
	
	Other message map macros are also available. See REFERENCES for articles
	explaining the implementation of ATL window objects.
	
	The following sample declaration of an ATL class implements a dialog box and
	handles the WM_CTLCOLORDLG message:
	
	     class CDlg : public CDialogImpl<CDlg>
	     {
	     public:
	     CDlg();
	     ~CDlg();
	
	     enum { IDD = IDD_DLG };
	
	     BEGIN_MSG_MAP(CDlg)
	        MESSAGE_HANDLER(WM_INITDIALOG, OnInitDialog)
	        COMMAND_ID_HANDLER(IDOK, OnOK)
	        COMMAND_ID_HANDLER(IDCANCEL, OnCancel)
	        MESSAGE_HANDLER(WM_CTLCOLORDLG, OnCtlColorDlg)
	     END_MSG_MAP()
	
	     LRESULT OnInitDialog(UINT uMsg, WPARAM wParam, LPARAM lParam,
	                        BOOL& bHandled);
	     LRESULT OnOK(WORD wNotifyCode, WORD wID, HWND hWndCtl, BOOL& bHandled);
	     LRESULT OnCancel(WORD wNotifyCode, WORD wID, HWND hWndCtl,
	                        BOOL& bHandled);
	     LRESULT OnCtlColorDlg(UINT uMsg, WPARAM wParam, LPARAM lParam,
	                        BOOL& bHandled);
	     };
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL COM AppWizard, using all default settings.
	
	2. On the Insert menu, click New ATL Object.
	
	3. In the ATL Object Wizard, select the Miscellaneous category, and then
	  double-click the Dialog object.
	
	4. Type "Dlg" into the Short Name field; click OK.
	
	5. In the ResourceView pane, expand the project name and Dialog.
	
	6. Double-click IDD_DLG.
	
	7. Double-click inside the displayed dialog box.
	
	RESULTS: The ClassWizard appears, and displays a dialog box titled "Adding a
	Class". It offers the option of creating a new class or selecting an existing
	class to associate with the IDD_DLG dialog resource. Selecting an existing class
	does not list the class created by the ATL Object Wizard.
	
	REFERENCES
	==========
	
	For more information on adding MFC support to an ATL project, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q181505 PRB: ATL COM AppWizard Doesn't Offer MFC Support for .EXE
	
	For additional information, see the following Help topics:
	
	  Visual C++ Online Help: Developer Products; Visual C++; C/C++ Language and
	  C++ Libraries; Active Template Library; Articles; ATL Window Classes;
	  Implementing a Window
	
	  Visual C++ Online Help: Developer Products; Visual C++; C/C++ Language and C++
	  Libraries; Active Template Library; Articles; ATL Window Classes;
	  Implementing a Dialog Box
	
	  Visual C++ Online Help: Developer Products; Visual C++; C/C++ Language and C++
	  Libraries; Active Template Library; Class Reference; ATL Macros and Global
	  Functions
	
	  Visual C++ 6.0 Online Help: Visual C++ Documentation; Reference; Microsoft
	  Foundation Class Library and Templates; Active Template Library; Articles;
	  ATL Window Classes; Implementing a Window; Adding a Message Handler
	
	======================================================================
	Keywords          : kbwizard kbATL kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbClassWizard kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC500 kbVC600 kbVC32bitSearch kbVC400a kbVC420b kbVC500Search
	Version           : WINNT:4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

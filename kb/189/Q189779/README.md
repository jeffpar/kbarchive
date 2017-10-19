---
layout: page
title: "Q189779: BUG: Enabling Accelerator Keys in Visual Basic ActiveX Controls"
permalink: /kb/189/Q189779/
---

## Q189779: BUG: Enabling Accelerator Keys in Visual Basic ActiveX Controls

	Article: Q189779
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using an ActiveX control (or UserControl) that is created with Visual Basic 5.0
	in an MFC container application, the accelerator keys (or access keys) defined
	for the child windows in the ActiveX control do not work as expected.
	
	CAUSE
	=====
	
	Because both Visual Basic and MFC provide different mnemonic handling
	implementations, Visual Basic needs to change the UserControl's accelerator
	tables in order for the accelerator keys to work properly in an MFC container.
	For more information, see the REFERENCES section of this article.
	
	RESOLUTION
	==========
	
	The workaround is to call the EnumChildWindows() API to enumerate all the child
	windows of the ActiveX control from the container application. Then, determine
	the mnemonic character key of each child window based on the HWND that is passed
	to the callback function in the EnumChildWindows()call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The steps below show how to set up a callback function for the
	EnumChildWindows() API from the MFC container application; determine the access
	keycode for the child windows of the Visual Basic ActiveX control; and determine
	which control to set the input focus to when an accelerator key is pressed:
	
	1. Place the Visual Basic ActiveX control in an MFC dialog-based application.
	
	2. Add a member variable named m_XControlInfo to the CDialog-derived class as
	  below:
	
	        #include <afxtempl.h>
	
	        // Information about child controls in the Visual Basic
	        // ActiveX control.
	        typedef struct xcontrol_info
	        {
	           HWND hwnd;            // handle of child control
	           char mnemonic_char;   // mnemonic character key for the control
	        }
	        XCONTROL_INFO;
	
	        class CTestVBDlg : public CDialog
	        {
	        ...
	           // Array of info for child controls.
	           CArray<XCONTROL_INFO, XCONTROL_INFO> m_XControlInfo;
	        ...
	        }
	
	3. Enumerate all the child windows of the Visual Basic ActiveX control in
	  OnInitDialog() of your CDialog-derived class. This callback function will be
	  called for each child control in the ActiveX control. The HWND and the
	  mnemonic character keycode of the child control will be stored in the
	  m_XControlInfo array:
	
	        // Callback function for EnumChildWindows() API
	        BOOL CALLBACK EnumActiveXControlChildProc(HWND hwnd, LPARAM lParam)
	        {
	           CArray<XCONTROL_INFO, XCONTROL_INFO>* arr =
	           (CArray<XCONTROL_INFO, XCONTROL_INFO>*)lParam;
	
	           CString str;
	           CWnd*   control = CWnd::FromHandle(hwnd);
	           control->GetWindowText(str);
	           int index = str.Find('&');   // look for mnemonic
	                                        // character keycode
	           if (index > -1)
	              {
	                 XCONTROL_INFO info;
	                 info.hwnd = hwnd;
	                 info.mnemonic_char = str[index+1];
	                 arr->Add(info);
	              }
	
	           return TRUE;
	        }
	
	        BOOL CTestVBDlg ::OnInitDialog()
	        {
	           CDialog::OnInitDialog();
	           ...
	
	           // Setup a callback function for EnumChildWindows() API to
	           // enumerate all child windows of the ActiveX control.
	           HWND hcontrol = GetDlgItem(IDC_VB_CONTROL1)->GetSafeHwnd();
	           EnumChildWindows(hcontrol, EnumActiveXControlChildProc,
	              (LPARAM) &m_XControlInfo);
	           return TRUE;
	        }
	
	4. Modify the OnSysCommand() function of your CDialog-derived class for
	  determining which child window in your ActiveX control should receive the
	  input focus when an accelerator key is pressed:
	
	        void CTestVBDlg ::OnSysCommand(UINT nID, LPARAM lParam)
	        {
	           if ((nID & 0xFFF0) == IDM_ABOUTBOX)
	           {
	                 CAboutDlg dlgAbout;
	                 dlgAbout.DoModal();
	           }
	           else
	           {
	              // If user pressed an accelerator keystroke, loop through the
	              // array to find out if it is one of the access keys for a
	              // child control in the Visual Basic ActiveX control.
	              BOOL  trap_accel = nID == SC_KEYMENU;
	              if (trap_accel)
	              {
	                 int size =    m_XControlInfo.GetSize();
	                 for (int i = 0; i < size; i++)
	                 {
	                    if (toupper(LOWORD(lParam)) ==
	                       toupper(m_XControlInfo[i].mnemonic_char))
	                    {
	                       HWND child = m_XControlInfo[i].hwnd;
	                       ::SetFocus(child);
	
	                       ::SendMessage(child, BM_CLICK, 0, 0L);  // OPTIONAL!!!
	                    }
	                 }
	              }
	
	           if (!trap_accel)
	           CDialog::OnSysCommand(nID, lParam);
	           }
	        }
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ActiveX control with Visual Basic 5.0. The ActiveX control has two
	  Command buttons as its child windows called "Button &A" and "Button
	  &B," where A and B are the access keys for the buttons.
	
	2. Use the control in a Visual Basic form and note the access keys work as
	  expected.
	
	3. Use the control in an MFC container application and note the access keys do
	  not work. You will only get a message beep sound when the access key is
	  pressed.
	
	REFERENCES
	==========
	
	For information about defining access keys for a control, please refer to the
	Online Help in Visual Basic.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q145698 PRB: Mnemonic Differences Between MFC 4.0 and Visual Basic 4.0
	
	(c) Microsoft Corporation 1997. All Rights Reserved. Contributions by Yeong-Kah
	Tam, Microsoft Corporation
	
	
	Additional query words: ocx kbOLE kbActiveX kbCtrl kbVBp500bug kbdsd kbMFC kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

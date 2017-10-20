---
layout: page
title: "Q243480: HOWTO: Changing Background Color of a Dialog Box Using ATL"
permalink: /kb/243/Q243480/
---

## Q243480: HOWTO: Changing Background Color of a Dialog Box Using ATL

{% raw %}

	Article: Q243480
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbATLWC kbDlg KbUIDesign kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	When creating dialog boxes in ATL 3.0, you can change the background color that
	is used without much effort. This article shows you how to change the background
	color for dialog boxes in ATL 3.0.
	
	Basically, you need to handle the WM_CTLCOLORDLG message for the dialog box. You
	can do this by adding an entry for this message in the message map and returning
	the handle to new brush with desired color from this handler.
	
	MORE INFORMATION
	================
	
	Here are the steps for changing the color of a dialog box in ATL.
	
	1. Add a member variable m_hDialogBrush of type HBRUSH to your dialog box class.
	
	      HBRUSH m_hDialogBrush;
	
	2. Create brush with the desired color in dialog boxes constructor, and destroy
	  it in the destructor.
	
	      CColorDlg()
	      {
	        //this will create a blue brush 
	        //could use GetSysColorBrush() instead if want to use a system brush
	        m_hDialogBrush = CreateSolidBrush(RGB(0, 0, 255));
	      }
	
	      ~CColorDlg()
	      {
	          DeleteObject(m_hDialogBrush);
	      }
	
	3. Add a message map entry for WM_CTLCOLORDLG as shown in the following.
	
	  BEGIN_MSG_MAP(CColorDlg)
	      MESSAGE_HANDLER(WM_INITDIALOG, OnInitDialog)
	      MESSAGE_HANDLER(WM_CTLCOLORDLG, OnCtlColorDlg) //Add this macro.
	      COMMAND_ID_HANDLER(IDOK, OnOK)
	      COMMAND_ID_HANDLER(IDCANCEL, OnCancel)
	  END_MSG_MAP()
	
	4. Add a OnCtlDialog member function to your dialog class like the code below.
	  OnCtlDialog is handler for the WM_CTLCOLORDLG message.
	
	      LRESULT OnCtlColorDlg(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled)
	      {
	          return (long) m_hDialogBrush;
	      }
	
	When the dialog box appears, it will have a blue background.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q74043 HOWTO: Change the Color of an Edit Control
	
	  Q98201 HOWTO: Change Dialog Box Background Color in MFC 2.0 or Later
	
	  Q103786 HOWTO: Change Window Background Color with Foundation Classes
	
	  Q117778 HOWTO: Change the Background Color of an MFC Edit Control
	
	  Q132080 HOWTO: Change the Color of an MFC Child Control Class
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words: ATL color dialog howto
	
	======================================================================
	Keywords          : kbATLWC kbDlg KbUIDesign kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300 kbVCNET
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

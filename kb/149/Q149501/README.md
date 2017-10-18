---
layout: page
title: "Q149501: PRB: Child CPropertySheet Hangs If Focus Is Switched"
permalink: kb/149/Q149501/
---

## Q149501: PRB: Child CPropertySheet Hangs If Focus Is Switched

	Article: Q149501
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0; winnt:4.0a
	Operating System(s): 
	Keyword(s): kbMFC kbPropSheet KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Class, version 1.0 
	- Microsoft Visual C++, version 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a modeless CPropertySheet is a child of a CDialog or another CPropertySheet,
	the program will hang in the following situations:
	
	- The focus is switched back to a PropertyPage that previously had the focus.
	
	- The focus is placed on a control on a PropertyPage, and then the focus is
	  switched to another window (for example, Program Manager).
	
	- The focus is on a control on a PropertyPage and the PropertySheet is closed.
	
	The program hangs because the child CPropertySheet continuously receives a
	WM_GETDLGCODE message.
	
	CAUSE
	=====
	
	By default, CPropertyPages have a WS_EX_CONTROLPARENT style. However,
	CPropertySheets do not have this style. This style allows a user to press the
	TAB key to move from a control inside the page to one in the sheet.
	
	When the focus is switched from the CPropertyPage, code that handles default
	command buttons loops through all the controls in the pages and the sheet.
	Cycling through controls is done using GetNextDlgTabItem(). The loop cycles
	through controls in the page in the child CPropertySheet and finds its way to
	controls in the parent page or parent dialog. At this point, GetNextDlgTabItem()
	is not able to find controls inside the child CPropertySheet because it doesn't
	have a WS_EX_CONTROLPARENT style. The loop never ends because it never finds the
	original control that had the focus.
	
	RESOLUTION
	==========
	
	Override OnInitDialog() for the child CPropertySheet, and add the
	WS_EX_CONTROLPARENT style.
	
	STATUS
	======
	
	This is a problem with the implementation of the Property Sheet common control,
	and not MFC's CPropertySheet wrapper.
	
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     // CMySheet is derived from CPropertySheet
	     BOOL CMySheet::OnInitDialog()
	     {
	               ModifyStyleEx (0, WS_EX_CONTROLPARENT);
	               return CPropertySheet::OnInitDialog();
	     }
	
	     /* Compile options needed: default
	     */ 
	
	Additional query words: WS_CHILD Property Sheet lock freeze page modal
	
	======================================================================
	Keywords          : kbMFC kbPropSheet KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper _IKkbbogus kbMFC kbVC400a
	Version           : WINDOWS:1.0; winnt:4.0a
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q113421: PRB: Assertion Failed, WINCORE.CPP--Line 129, 133, 182, or 307"
permalink: /kb/113/Q113421/
---

## Q113421: PRB: Assertion Failed, WINCORE.CPP--Line 129, 133, 182, or 307

{% raw %}

	Article: Q113421
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC kbGrpDSMFCATL kbArchitecture
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, l.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening a dialog box in an application that subclasses a control of the dialog
	box using CWnd::SubclassDlgItem() or CWnd::SubclassWindow() causes an "Assertion
	Failed!" error in WINCORE.CPP. The line number reported depends on the version
	of the Microsoft Foundation Classes (MFC) being used:
	
	   Version 2.0 for Windows    - Line 133
	   Version 2.5 for Windows    - Line 182
	   Version 2.0 32-bit Edition - Line 129
	   Version 3.0 32-bit Edition - Line 283
	   Version 3.1 32-bit Edition - Line 315
	   Version 4.0 32-bit Edition - Line 307
	
	CAUSE
	=====
	
	The second ASSERT (below) in WINCORE.CPP is the one being hit:
	
	     BOOL CWnd::Attach(HWND hWndNew)
	     {
	        ASSERT(m_hWnd == NULL);   // Only attach once, detach on destroy
	        ASSERT(FromHandlePermanent(hWndNew) == NULL);
	           // Must not be already in permanent map
	     ...
	
	This implies that the control that we are attempting to subclass has already been
	subclassed.
	
	With MFC dialog boxes, you can specify DDX/DDV member variables to associate with
	the controls of an MFC dialog class. These member variables can be real values
	(for example, int, CString) or control variables (for example, CEdit, CListBox).
	If the member variables are control variables, then the DDX/DDV handlers
	actually do subclass the dialog box controls using the control member variables.
	If you try to subclass those controls yourself, the above error can result.
	
	RESOLUTION
	==========
	
	If you want to subclass controls yourself, then do not associate DDX/DDV
	variables with those controls.
	
	Alternatively, if you want to subclass controls but avoid the work, you can let
	the DDX/DDV routines work for you. To do this, use the following steps.
	
	1. Create a dialog box template in App Studio.
	
	2. Use ClassWizard to associate a C++ CDialog derived class with the template.
	
	3. In ClassWizard, with the dialog class selected, choose Edit Variables and add
	  a member variable of the appropriate control type, associating it with the
	  control you want to subclass. With Visual C++ 1.5, choose the Member
	  Variables tab and select Add Variable to accomplish this.
	
	4. Edit the CDialog derived class definition to change the "// Dialog Data"
	  section slightly. Change the class type for the member variable from the
	  default (for example CEdit), to your own class derived from that control
	  class (for example, CMyEdit), as follows:
	
	        // Dialog Data
	           //{{AFX_DATA(CTestDlg)
	           enum { IDD = IDD_TEST_DLG };
	           CMyEdit m_EditControl;
	           //}}AFX_DATA
	
	  This will cause the control to be automatically subclassed with your own type
	  of window.
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

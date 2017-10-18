---
layout: page
title: "Q108291: FIX: Cannot Add New Member Variables with VIEWEX Sample"
permalink: kb/108/Q108291/
---

## Q108291: FIX: Cannot Add New Member Variables with VIEWEX Sample

	Article: Q108291
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC kbVC100bug kbVC150fix kbVC200fix kbWndw kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	From the Visual C++ Workbench, open the VIEWEX sample. To do this, select the
	Project menu and choose Open. The sample is under the Visual C++ directory in
	MFC\SAMPLES\VIEWEX\VIEWEX.MAK.
	
	Using App Studio, add an edit control (or any type of control) to the
	IDD_INPUTFORM dialog box used for the CFormView in this sample. Give it an ID of
	ID_MYNEWEDIT. Now start Class Wizard with CTRL+W. (You may need to choose to
	associate the CInputView class with the dialog box resource.) Select the
	CInputView class if it's not already selected. Choose the Edit Variables button
	or Member Variables tab depending on the version of Visual C++. The ID_MYNEWEDIT
	ID will not show up in the Control IDs list, and thus cannot be automatically
	associated with a member variable.
	
	CAUSE
	=====
	
	There is a line of code missing in the declaration of the CInputView class in
	the INPUTVW.H file. The class definition in this file has a section as follows:
	
	     // Form Data
	     public:
	        //{ {AFX_DATA(CInputView)
	        CString m_strData;
	        int     m_iColor;
	        //} }AFX_DATA
	
	This section of code is missing a line that Class Wizard needs in order to
	identify the controls available to set up as edit variables. This line is the
	enum line, which is normally automatically added by Class Wizard when creating
	CDialog derived classes.
	
	RESOLUTION
	==========
	
	Modify the above code as follows:
	
	     //{ {AFX_DATA(CInputView)
	     enum { IDD = IDD_INPUTFORM };
	     CString m_strData;
	     int     m_iColor;
	     //} }AFX_DATA
	     //{ { AFX_DATA(CInputView
	
	This will work around the problem. With such an enum line, Class Wizard is able
	to determine the dialog box template to examine for available controls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed
	above. This problem was fixed in Microsoft Visual C++, 32-bit Edition, version
	2.0.
	
	Additional query words: kbNoUpdate
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC kbVC100bug kbVC150fix kbVC200fix kbWndw kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

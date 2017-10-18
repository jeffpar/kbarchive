---
layout: page
title: "Q150000: FIX: Minimal Rebuild Fails on Access Specifier Change for Enum"
permalink: kb/150/Q150000/
---

## Q150000: FIX: Minimal Rebuild Fails on Access Specifier Change for Enum

	Article: Q150000
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Minimal Rebuild fails to detect the significance of access specifier changes for
	enums that are declared inside a class. For example, if the public definition of
	an enum in a class in a header file is changed to private, minimal rebuild does
	not see the change as significant, and files that depend on the header and the
	definition of the enum are not rebuilt. The following message is displayed:
	
	  Generating Code...
	  Skipping... (no relevant changes detected)
	
	RESOLUTION
	==========
	
	Doing a rebuild all or disabling minimal rebuild forces a full compile and
	correctly evaluates changes to the access specification of the enum. For
	details, please see the "More Information" section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Recreate Problem
	-------------------------
	
	1. Create a default MFC application. On the File menu, click New, and then click
	  Project Workspace. Name it Test, and select the default for all of the dialog
	  boxes that follow.
	
	2. In the main header file for the application, before the first public: in the
	  application's class declaration, add the following enum definitions:
	
	     class CMyTestApp : public CWinApp
	     {
	     public:                //add these 3 lines
	         enum e1 {E1,E2};   //to the header file Test.h
	         enum {UE1, UE2};   // 
	      public:
	         CMyTestApp();
	
	3. In the constructor of CAboutDlg, add references to the enums:
	
	     CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
	     {
	   
	         //{ {AFX_DATA_INIT(CAboutDlg)
	         //} }AFX_DATA_INIT
	         int i= CMy3209App::UE1;             //Add these 2 lines
	         CMy3209App::e1 e = CMy3209App::E2;  //to Test.cpp
	     }
	
	4. Check to ensure that minimal rebuild is enabled. On the Build menu, click
	  Settings, and then click C/C++ and category Customize. Build the application.
	
	5. Comment out the first public: in the application's class declaration:
	
	       // public:                //add these 3 lines
	
	6. Build the appplication again (not rebuild all). There are no error messages.
	
	7. Rebuild All. The following errors are generated:
	
	  
	
	  Test.cpp(129) : error C2248: 'UE1' : cannot access private
	         enumerator declared in class 'CMyTestApp'
	  Test.cpp(130) : error C2248: 'e1' : cannot access private enum
	         declared in class 'CMyTestApp'
	  Test.cpp(130) : error C2248: 'E2' : cannot access private enumerator
	         declared in class 'CMyTestApp'
	
	Additional query words: kbVC400bug 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

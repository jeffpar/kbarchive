---
layout: page
title: "Q116212: FIX: Assertion Using Multiple %1 (or %2) in AfxFormatString1"
permalink: /kb/116/Q116212/
---

## Q116212: FIX: Assertion Using Multiple %1 (or %2) in AfxFormatString1

{% raw %}

	Article: Q116212
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0,1.5,1.51,1.52; winnt:1.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC100bug kbVC150bug kbVC152bug kbVC200fix kbGrpDSMFCATL kbNoUpdatek
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the AfxFormatString1() or AfxFormatString2() function, with more
	than one %1 or %2 parameter in the template string, the following assertion
	occurs:
	
	  File strcore1.cpp, Line 269, Assertion Failed!
	
	CAUSE
	=====
	
	These functions do not allocate enough memory for multiple parameters to be
	used. However, in the case of AfxFormatString2(), two parameters may be used
	(one %1 and one %2) successfully. It is the use of two %1's or two %2's that
	causes the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in MFC 3.0, included
	with Visual C++ version 2.0.
	
	MORE INFORMATION
	================
	
	You can reproduce the problem by using the following steps:
	
	1. Create a .CPP file using the sample code provided below.
	
	2. Create a new Windows project that uses MFC, and add the .CPP that you just
	  created to the project.
	
	3. Use App Studio to create a string table that includes the following two
	  entries:
	
	  IDS_THETEMPLATE = File %1 has some text associated with it.
	  IDS_THENEWTEMPLATE = File %1 and %1 have associated text.
	
	4. Save the string information in an .RC file.
	
	5. Add the newly created .RC file to the project by choosing Edit from the
	  Project menu.
	
	6. Perform a build. Visual Workbench creates a .DEF file for you if you do not
	  supply your own .DEF file.
	
	7. Run the program to view the assertion.
	
	Sample Code
	-----------
	
	  /* Compile options needed: Default MFC-Windows project options
	  */ 
	     ///////////////////////////////////////////////////////////////////// 
	     // main cpp file
	     ///////////////////////////////////////////////////////////////////// 
	     #include <afxwin.h>          // Provide access to MFC
	     #include "resource.h"     // App Studio puts resource ID's here
	
	     // myWinApp hooks us into the MFC application processing
	     class myWinApp : CWinApp
	     {
	     public:
	          BOOL InitInstance();
	     };
	
	     BOOL myWinApp::InitInstance()
	     {
	       CString theOutputString;
	
	       // This works fine
	       AfxFormatString1( theOutputString, IDS_THETEMPLATE,
	                         "filename.ext" );
	       TRACE("theOutputString=%s\n", theOutputString);
	
	       // Comment this out to avoid Assertion
	       AfxFormatString1( theOutputString, IDS_THENEWTEMPLATE,
	                         "filename.ext");
	       TRACE("theOutputString=%s.\n", theOutputString);
	
	       return FALSE; // Terminate the program
	     }
	
	     myWinApp theApp;
	
	     ///////////////////////////////////////////////////////////////////// 
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 AfxFormatString2
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC100bug kbVC150bug kbVC152bug kbVC200fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbVC151 kbVC152
	Version           : WINDOWS:1.0,1.5,1.51,1.52; winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

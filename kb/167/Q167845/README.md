---
layout: page
title: "Q167845: FIX: Class Wizard Deletes Source Files"
permalink: kb/167/Q167845/
---

## Q167845: FIX: Class Wizard Deletes Source Files

	Article: Q167845
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbnokeyword kbATL kbDLL kbEEdition kbGenInfo kbMFC kbServer kbVC500bug kbVS97sp1
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There are certain scenarios that result in the loss of source files (.cpp, .h
	and .IDL) when you use Class Wizard to add code to them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Pack 1 - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	For example, the following steps delete an .IDL file that is in an ATL project:
	
	1. Start a new instance of the Visual Studio IDE.
	
	2. Create a new ATL COM AppWizard Application, DLL server, with the MFC Support
	  check box selected (name it test).
	
	3. Go to class view, right-click and add a class named "testObject" (without the
	  quotation marks) with interfaces.
	
	4. Go to file view and select Class Wizard from the view menu.
	
	5. Add a New Class from ClassWizard called CTestClass that is derived from a
	  generic CWnd and click OK. You receive an error dialog with the following
	  message:
	
	  "Unable to update the IDL file "<drive>:\test\test.idl". Make sure the
	  file is not read-only and there is sufficient disk space"
	
	  When you dismiss this dialog box, your .idl file is deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbnokeyword kbATL kbDLL kbEEdition kbGenInfo kbMFC kbServer kbVC500bug kbVS97sp1fix kbGrpDSTools kbNoUpdate kbArtTypeINF 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

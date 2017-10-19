---
layout: page
title: "Q181505: PRB: ATL COM AppWizard Doesn't Offer MFC Support for .EXE"
permalink: /kb/181/Q181505/
---

## Q181505: PRB: ATL COM AppWizard Doesn't Offer MFC Support for .EXE

	Article: Q181505
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC kbVC500 kbGrpDSTools
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ATL COM AppWizard does not offer the option of MFC support for an .exe
	project. Adding an MFC class with ClassView or ClassWizard results in build
	errors.
	
	RESOLUTION
	==========
	
	To add minimal MFC support to an ATL COM AppWizard project, follow these steps:
	
	1. Open the ATL project with Visual C++.
	
	2. On the Project menu, click Settings.
	
	3. Under the General tab, set the Microsoft Foundation Classes field to "Use MFC
	  in a Shared DLL" or "Use MFC in a Static Library". Click OK.
	
	4. Open the project StdAfx.h header file. Add the following line after "#define
	  STRICT", then save and close the file:
	
	        #include <afxdisp.h>
	
	5. Open the project .rc source file in text mode for editing:
	
	  a. On the File menu, click Open.
	
	  b. Highlight the <projectname>.rc file.
	
	  c. Set the Open As field to "Text", then click Open.
	
	  d. Click OK on any resulting message boxes.
	
	6. Replace all occurrences of Winres.h with Afxres.h in the .rc file, then save
	  and close the file.
	
	7. Delete the <projectname>.clw file if it already exists.
	
	8. Invoke ClassWizard by clicking ClassWizard on the View menu. Click Yes when
	  prompted to rebuild the ClassWizard database, and then click OK on the next
	  dialog box.
	
	MFC class files added with ClassView or ClassWizard should now build without
	errors.
	
	STATUS
	======
	
	This behavior is by design.
	
	NOTE: In Visual C++ 6.0, another option exists. Create an MFC project first, and
	then click New ATL Object on the Insert menu. Click OK on the next dialog box to
	insert ATL support into the MFC project.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual C++, create a new ATL COM AppWizard project.
	
	2. In the wizard's Step 1, select either "Executable (EXE)" or "Service (EXE)".
	
	  NOTE: The "Support MFC" check box is disabled.
	
	3. Finish the project. Click Finish, then click OK.
	
	4. On the ClassView pane of the new project, right-click the project name.
	  Select New Class from the menu.
	
	5. Change Class Type to "MFC Class", give the class a name and a base class,
	  then click OK.
	
	6. Build the project.
	
	RESULT: Build errors prevent the build step from completing successfully.
	
	REFERENCES
	==========
	
	For more detailed information on adding MFC support to an ATL project, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q173974 HOWTO: Add MFC Support to an ATL Project
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC kbVC500 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : WINNT:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

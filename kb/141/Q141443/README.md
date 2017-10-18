---
layout: page
title: "Q141443: FIX: C1001: Compiler File P2symtab.c, Line 878"
permalink: kb/141/Q141443/
---

## Q141443: FIX: C1001: Compiler File P2symtab.c, Line 878

	Article: Q141443
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC410fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a .cpp file using a different incremental compilation option from
	its precompiled header, the compiler gives this error message:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file '...\p2symtab.c', line 878)
	  Please choose the Technical Support command on the Visual C++
	  Help menu, or open the Technical Support help file for more information
	
	CAUSE
	=====
	
	The compiler was not designed to compile code where the precompiled header
	(.pch) file has different command line options from the code that includes the
	precompiled header file.
	
	RESOLUTION
	==========
	
	Regenerate the precompiled header with the new incremental compilation option,
	or rebuild the project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new MFC AppWizard .exe file.
	
	  On the File menu, click New. Select Project Workspace, and then click the OK
	  button. In the Type list box, specify MFC AppWizard (exe). In the Name Edit
	  Control box, type a name for your project (for example "Test"), and then
	  click the Create button. Click the Finish button from the MFC AppWizard
	  dialog box, and then click OK from the New Project Information dialog box.
	
	2. Make sure 'Use Precompiled Header File' is enabled.
	
	  On the Build menu, click Settings, and then click the C/C++ tab. Select
	  Precompiled headers in the category list box. Select the 'Use precompiled
	  header file' option, and in the 'through Header edit control' box, type
	  Stdafx.h.
	
	3. Rebuild the project.
	
	  On the Build menu, click Rebuild All.
	
	4. Change the state of the Enable Incremental Compilation option.
	
	  On the Build menu, click Settings, and click the C/C++ tab. Select Customize
	  in the category list box. Select the Enable Incremental Compilation check box
	  to change its state.
	
	5. Compile the MainFrm.cpp file.
	
	  Click the FileView tab. Select the MainFrm.cpp file from the file view. Then
	  on the Build menu, click Compile. This will cause the compiler to generate
	  the INTERNAL COMPILER ERROR.
	
	
	Additional query words: kbVC400bug 4.00 10.00 4.10 10.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC410fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

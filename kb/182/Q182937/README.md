---
layout: page
title: "Q182937: FIX: Files in External Dependencies Folder Don't Persist"
permalink: /kb/182/Q182937/
---

## Q182937: FIX: Files in External Dependencies Folder Don't Persist

	Article: Q182937
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No files appear in the External Dependencies folder until you export a makefile
	or rebuild the project.
	
	When you close the workspace, the dependency information is not saved.
	
	When you edit a header file and build the project, the header file is saved but
	no files are compiled.
	
	CAUSE
	=====
	
	The program database (a .pdb file) has been given a name without an extension or
	a trailing slash (\).
	
	For example, on the Project menu, click Settings. Click the C/C++ tab; in the
	Project Options edit box you see a switch similar to the following:
	
	  /Fd"Debug\mypdb"
	
	RESOLUTION
	==========
	
	If you want to name the .pdb file, then append the .pdb extension to the name:
	
	  /Fd"Debug\mypdb.pdb"
	
	If you want to specify the directory in which to place the VC50.pdb file, then
	append a trailing slash to the name:
	
	  /Fd"Debug\mypdb\"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++
	6.0.
	
	MORE INFORMATION
	================
	
	It is normal for project dependency information not to be available until the
	project is built or until a makefile is exported. However, when a project is
	built with the /FD switch, the compiler creates a file that contains the
	dependency information for the project. This file has the same base name as the
	program database (.pdb) file. By default, the file is VC50.idb.
	
	Once a project is built, Developer Studio uses the dependency information from
	the .idb file (unless you encounter this bug).
	
	If you export a makefile, an .idb file is not generated. Dependency information
	generated to export the makefile is lost when you close the workspace. This is
	by design.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build a project.
	
	2. On the Project menu, click Settings. Click the C/C++ tab, and in the Project
	  Options edit box, name the .pdb file without an extension. For example, in a
	  sample named AutoBld, you would use the following switch:
	
	     /Fd"Debug/AutoBld"
	
	3. Make a change to a header file.
	
	4. Build the project.
	
	     Result: 0 error(s), 0 warning(s)
	
	     Expected: something should compile
	
	To work around this bug, use one of the following:
	
	  /Fd"Debug/AutoBld.pdb"
	
	-or-
	
	  /Fd"Debug/AutoBld/"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

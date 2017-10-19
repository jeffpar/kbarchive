---
layout: page
title: "Q167325: FIX: Env Vars Not Used in Exported Makefile Dependencies"
permalink: /kb/167/Q167325/
---

## Q167325: FIX: Env Vars Not Used in Exported Makefile Dependencies

	Article: Q167325
	Product(s): Microsoft C Compiler
	Version(s): 5.0 6.0
	Operating System(s): 
	Keyword(s): kbtool kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Environment variables used in the Persist As field are not written to the
	makefile for dependencies.
	
	RESOLUTION
	==========
	
	This bug should only be a problem if the makefile is exported on one computer
	and used on a different computer with a different directory structure for the
	project. Either use the same directory structure for your project on multiple
	computers, or use Developer Studio to export the makefile for the project to the
	computer that you want to use the makefile on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	In FileView, select a file and choose Properties from the View menu. This
	displays the Properties page for the selected file. On the Properties page is
	the "Persist As" field, which lets you use an environment variable to set the
	location of the selected file. When the environment variable is expanded and
	concatenated with the rest of the path in the Persist As field to form the full
	path to the selected file, that full path must be a valid path to the selected
	file.
	
	If this file is a dependency of another file (such as a header file), when a
	makefile for the project is exported, either the fully qualified path or a
	relative path to the files that are dependencies is written to the makefile.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Go to a command prompt and set a variable MYAPP=D:\Projects\MyApp.
	
	2. From this command prompt, start Msdev.exe.
	
	3. Create a default MFC AppWizard .exe named MyApp in D:\Projects\MyApp.
	
	4. In FileView, select MyApp.h and choose Properties from the View menu.
	
	5. In the Persist As field, type: $(MYAPP)\MyApp.h
	
	6. Close the property page for MyApp.h.
	
	7. From the File menu, choose Save All.
	
	8. From the Project menu, choose Export Makefile.
	
	9. Open MyApp.mak and search for MyApp.h. Notice that the path doesn't include
	  $(MYAPP).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbide kbVC kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0 6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

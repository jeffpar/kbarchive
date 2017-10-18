---
layout: page
title: "Q191272: HOWTO: A Brief Exploration of the Project Object Model"
permalink: kb/191/Q191272/
---

## Q191272: HOWTO: A Brief Exploration of the Project Object Model

	Article: Q191272
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the new features of Visual FoxPro 6.0 is the Project Object. The Project
	Object allows the programmatic manipulation of the project's contents, such as
	adding and deleting files, enumerating the files and types, building various
	file types, modifying version, author information, and so forth.
	
	MORE INFORMATION
	================
	
	The Online documentation describes in detail the Project Object and its
	components. This document explores the components of the Project Object and
	describes how you can access the object model. The attached sample file shows
	some of the more simple operations that you can perform with the Project Object.
	Hopefully, the example will spur more creative use of this new functionality.
	
	Here are some brief examples of using the Project Object:
	
	- When a project is created, as in CREATE PROJECT Test1, the project object, as
	  well as, the ProjectHooks object, is instantiated. The NOSHOW and
	  NOPROJECTHOOK clauses can be specified. If the NOSHOW clause is specified,
	  the Project Manager can be made visible as follows:
	
	        CREATE PROJECT Test1 NOSHOW && Project is not visible.
	        _VFP.ACTIVEPROJECT.VISIBLE = .T.
	
	A project called "Test1" is created but is not shown. The second line in the
	preceding example makes the Project Manager visible.
	
	You can use the following line to determine how many project objects currently
	exist:
	
	     _VFP.PROJECTS.COUNT
	
	The various other Project Object properties are listed in the Online
	documentation and are not fully demonstrated in this article.
	
	Files can be programmatically added to the Project as follows:
	
	     STRTOFILE("* Main Test File", "MAIN.PRG") && Creates a program file.
	     _VFP.ACTIVEPROJECT.FILES.ADD("main.prg") && Adds file to the project.
	
	     ?_VFP.ACTIVEPROJECT.MAINFILE     && Displays the name of the main file.
	     ?_VFP.ACTIVEPROJECT.FILES.COUNT && Displays the number of project files.
	     ?_VFP.ACTIVEPROJECT.FILES(1).TYPE  && Displays the file type.
	
	A description for the file can be programmatically added as follows:
	
	     _VFP.ACTIVEPROJECT.FILES(1).DESCRIPTION = "Added Programmatically."
	     ?_VFP.ACTIVEPROJECT.FILES(1).DESCRIPTION && Displays description.
	     ?_VFP.ACTIVEPROJECT.FILES(1).LASTMODIFIED && Displays file date.
	     ?_VFP.ACTIVEPROJECT.FILES(1).SCCSTATUS
	        && Identifies the file's source code control status.
	     ?_VFP.ACTIVEPROJECT.FILES(1).EXCLUDE
	
	Other components of the Project Object are described in the Programmer's Guide,
	Chapter 32, titled "Application Development and Developer Productivity".
	
	REFERENCES
	==========
	
	Visual FoxPro Help: search on: "Project Object"; "ActiveProject"; "Projects
	Collection"; "Files Collection"; "File Object"; "ProjectHooks"
	
	Programmer's Guide, Chapter 32, "Application Development and Developer
	Productivity".
	
	Additional query words: kbVFp600 kbProjManager
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

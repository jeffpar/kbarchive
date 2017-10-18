---
layout: page
title: "Q167905: HOWTO: Exclude Include File Class Definitions from ClassView"
permalink: kb/167/Q167905/
---

## Q167905: HOWTO: Exclude Include File Class Definitions from ClassView

	Article: Q167905
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbATL kbide kbVC400 kbVC420 kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you include components, such as the Active Template Library or the DAO SDK,
	the ClassView of the Project Workspace displays each class found in these
	components as part of your project. For larger components, the number of classes
	displayed can swamp the classes you have created for your project.
	
	MORE INFORMATION
	================
	
	To prevent classes from being displayed in the ClassView pane, you need to
	remove the header with the class declarations from the project's dependency
	list. To do this, follow these steps:
	
	1. If the include file is in the same directory as your project, you need to
	  move it to a different location.
	
	  a. Create a directory where you want to relocate the header file(s) that you
	     want to remove from the dependency list. For example:
	
	     mkdir c:\msdev\projects\myproj\inc
	
	  b. Move the header files to this new directory.
	
	  c. Add this directory to your include search path by using the Directories
	     tab in the Options dialog box (click Options on the Tools menu.
	
	2. Create a text file named Msvcincl.dat, and list the header files you want to
	  exclude from the dependencies list. Save this file to your Windows directory.
	  An example is shown below for both the DAO SDK and the Active Template
	  Library.
	
	     dbdao.h
	     atlcom.h
	     atlbase.h
	
	3. Close Developer Studio, and delete the project's .ncb file.
	
	4. Restart Developer Studio, and load your project. The classes declared in the
	  headers listed in the Msvcincl.dat file should no longer appear in the
	  ClassView pane.
	
	NOTE: The Msvcincl.dat file must be located in your Windows directory, and your
	#include directives must not specify a full pathname to these headers.
	Otherwise, these files will remain in the project's dependencies list.
	
	REFERENCES
	==========
	
	  Q138735 Visual C++ 4.0 Frequently Asked Questions List
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbide kbVC400 kbVC420 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	

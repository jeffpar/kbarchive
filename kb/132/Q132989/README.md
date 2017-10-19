---
layout: page
title: "Q132989: HOWTO: Use Relative Paths in 32-bit Visual C++ .MAK Files"
permalink: /kb/132/Q132989/
---

## Q132989: HOWTO: Use Relative Paths in 32-bit Visual C++ .MAK Files

	Article: Q132989
	Product(s): Microsoft C Compiler
	Version(s): WINNT:2.0,2.1,4.0;
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC200 kbVC210 kbVC400 kbhowto kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to edit the .MAK file produced by the development
	environment to change the absolute paths of dependents to be relative paths. The
	Visual C++ interface doesn[ASCII 146]t change these paths back to absolute paths
	and still loads the makefile as an internal makefile.
	
	Beginning with version 5.0, Visual C++ uses relative paths automatically when
	exporting a .mak file.
	
	MORE INFORMATION
	================
	
	The Visual C++ development environment creates a .MAK file when a project is
	created. The paths to files within the makefile often contain hard-coded paths.
	Some developers have indicated that they desire the makefile to contain relative
	paths instead.
	
	Under normal circumstances, you cannot edit a makefile produced by Visual C++ and
	still load the makefile as an internal makefile, thus allowing you to continue
	to use the graphical development environment to maintain your project. However,
	making the paths to dependents in your makefile relative is one exception.
	
	Visual C++ has full support for relative paths, but defaults to using absolute
	paths for files not in or below the project root. Currently there is no way to
	override this behavior from the Visual C++ Development Environment. However,
	once you edit the makefile to change the absolute paths for your existing files
	to relative paths, Visual C++ maintains the use of relative paths for those
	changes.
	
	NOTE: If you choose to use Visual C++ to edit the makefile text, be careful when
	loading it into the editor. The Visual C++ editor often truncates extremely long
	lines. Other editors remove necessary blanks at the end of the lines. NOTEPAD is
	a safe editor to use on .MAK files. Also be sure to save the original .MAK file
	before making your changes, so you have a backup in case you encounter a
	problem.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC200 kbVC210 kbVC400 kbhowto kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC200 kbVC210
	Version           : WINNT:2.0,2.1,4.0;
	Issue type        : kbhowto
	
	=============================================================================
	

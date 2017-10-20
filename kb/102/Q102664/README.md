---
layout: page
title: "Q102664: FIX: BSCMAKE Fails When Project Contains Only Object Files"
permalink: /kb/102/Q102664/
---

## Q102664: FIX: BSCMAKE Fails When Project Contains Only Object Files

{% raw %}

	Article: Q102664
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0 
	- Microsoft Visual C++, version 1.0 
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	An attempt to run BSCMAKE on a project fails and BSCMAKE displays its usage
	screen.
	
	CAUSE
	=====
	
	The project contains only object files.
	
	Visual Workbench creates a makefile for the project that contains an NMAKE macro
	called "SBRS" that holds the names of the .SBR files for BSCMAKE to process.
	Because the project does not contain any source files, SBRS is an empty string.
	When the makefile sends the empty string to BSCMAKE through an inline response
	file, the resulting command line is "BSCMAKE /o<project_name>.bsc"
	
	The Visual Workbench creates a makefile for the project that contains an NMAKE
	macro called "SBRS". This macro is used to hold the names of the .SBR files to
	be fed into BSCMAKE via an inline response file. Since the project has no source
	files, the Visual Workbench assigns "SBRS" to an empty string. This empty string
	gets fed to BSCMAKE. The resulting command line is "bscmake
	/o<project_name>.bsc" which is invalid.
	
	RESOLUTION
	==========
	
	There are two methods to address this situation when you build a project that
	contains only OBJ files, as follows:
	
	- Choose Project from the Options menu. Choose the Compiler button. Select the
	  Listing Files option and remove the check from the Browser Information
	  option.
	
	- Edit the makefile to list the names of the .SBR files in the "SBRS" macro.
	
	  NOTE: Making this manual modification converts the project makefile into an
	  external makefile. Visual Workbench does not update an external makefile when
	  new files are added or project options change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ 32-bit Edition,
	version 2.0.
	
	Additional query words: 1.00 1.10
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper _IKkbbogus kbFortranSearch kbvc100 kbZNotKeyword3 kbFORTRANPower100DOS kbVWB
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

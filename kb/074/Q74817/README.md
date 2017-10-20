---
layout: page
title: "Q74817: Using Different Filename Extensions with PWB Program List"
permalink: /kb/074/Q74817/
---

## Q74817: Using Different Filename Extensions with PWB Program List

{% raw %}

	Article: Q74817
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Files that do not have default name extensions for a given language (such as an
	extension different than the default .BAS for Basic or .C for the C compiler)
	cannot be added to a program list and cannot be compiled or linked from within
	the Programmer's WorkBench (PWB) environment without adding some information to
	the TOOLS.INI file. None of the options from PWB's Make menu option will be
	available except for Set Program List; therefore, you cannot make an executable
	file. If you select the Set Program List option, you will not be allowed to add
	the file to the program list. You will receive the following error:
	
	  program list: file <filename> will be ignored
	
	  file type unused by current build options
	
	This information applies to Programmer's Work Bench versions 1.0 and 1.1 for
	MS-DOS and MS OS/2.
	
	MORE INFORMATION
	================
	
	To allow for the successful addition of the program to a program list or the
	successful compilation and linking of the file alone, you must add some lines to
	the build section of your TOOLS.INI file. For example, if you want to add Basic
	source files with the ".X" extension, you must do the following:
	
	1. From PWB's Options menu, choose the Editor Settings option.
	
	2. Scroll to the Build section and find the following line:
	
	  build: inference .bas.obj bc_bas_obj
	
	3. Add a new line, as follows:
	
	  " build: inference .x.obj bc_bas_obj" (without the quotation marks)
	
	4. From the File menu, choose Save.
	
	5. Press the F2 key to return to your program.
	
	At this point, go to the Make menu option and note that all the options are
	available; you can choose the Rebuild All option to create an executable, or you
	can add the program to a program list and have it compile successfully.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}

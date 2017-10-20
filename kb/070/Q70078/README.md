---
layout: page
title: "Q70078: Forcing CVW to Find Source Files in Another Directory"
permalink: /kb/070/Q70078/
---

## Q70078: Forcing CVW to Find Source Files in Another Directory

{% raw %}

	Article: Q70078
	Product(s): Microsoft Programming Utilities
	Version(s): 3.05,3.14,4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 3.05, 3.14, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When CodeView for Windows (CVW) loads an EXE or DLL file, by default, CVW looks
	for the source code files in the same directory. If CVW cannot find the source
	files, it will prompt for the file location(s) with a dialog box. Complete
	pathnames can then be added to direct CVW to the correct source directory.
	
	To prevent CVW from prompting for alternate directories, two methods can be
	used:
	
	1. Add the path information to the source module on the C Compiler command line.
	
	-or-
	
	2. Change the default directory prior to invoking CVW.
	
	MORE INFORMATION
	================
	
	There are two methods that can be used to prevent CVW from displaying a dialog
	box to get pathnames to source files:
	
	1. Add the path information to the source module on the C compiler command line
	  in the makefile. The compiler will place the path information in the OBJ
	  file. The linker preserves this information and makes it available to CVW. A
	  typical makefile change might look similar to the following:
	
	  cl -Gw -W3 -Zpi -Od myapp.c
	
	  is changed to
	
	  cl -Gw -W3 -Zpi -Od c:\windev\c\myapp.c
	
	2. Change the default directory for CVW by "setting the path" to the source
	  directory before starting CVW. Do this by starting the MS-DOS Executive (from
	  the Program Manager's File menu, choose Run and enter "msdos" as the
	  application to execute). Then, select the directory containing the EXE file
	  and source files. This sets the default directory. Start CVW using the File
	  Run command. Enter "cvw <optional parameters>" as the application to
	  execute.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView305 kbCodeView314 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.05,3.14,4.0,4.01,4.1
	
	=============================================================================
	

{% endraw %}

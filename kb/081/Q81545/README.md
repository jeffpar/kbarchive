---
layout: page
title: "Q81545: PWB Macros to Rebuild All, Build Target, Run, and Debug"
permalink: /kb/081/Q81545/
---

## Q81545: PWB Macros to Rebuild All, Build Target, Run, and Debug

	Article: Q81545
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
	
	Adding the lines shown below to your TOOLS.INI file will allow you to execute a
	Rebuild All, Build Target, Compile, Run Program, or Debug Program with macros in
	Programmers WorkBench (PWB) versions 1.0 and 1.1. These lines should be placed
	after the pwb tag [pwb] in the TOOLS.INI file.
	
	This information applies to PWB 2.0 as well, except that a program list does not
	need to be set for the macros to work.
	
	MORE INFORMATION
	================
	
	For the function keys to work as expected, a program list must first be set
	within PWB. For more information on PWB macros, consult the documentation and
	online help included with your version of the compiler or assembler. The
	"Microsoft Programmer's WorkBench" application note also contains additional
	information on PWB and is available from Microsoft Product Support. Query on
	SW0330 to learn more about this application note.
	
	Example
	-------
	
	  [pwb]
	  ;macro definitions
	          RebuildAll:=arg meta "all" compile
	          compile_file:= arg compile
	          build_project:=arg "all" compile
	          run_program:=arg "run" compile
	          debug_program:=arg "debug" compile
	
	  ;key assignments
	          RebuildAll:CTRL+R
	          compile_file:Ctrl+f5
	          build_project:Shift+F5
	          run_program:F5
	          debug_program:Alt+f5
	
	Additional query words: kbinf 1.00 1.10 2.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

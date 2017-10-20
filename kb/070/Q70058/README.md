---
layout: page
title: "Q70058: Only Spaces May Separate Additional Libraries in PWB"
permalink: /kb/070/Q70058/
---

## Q70058: Only Spaces May Separate Additional Libraries in PWB

{% raw %}

	Article: Q70058
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several dialog boxes in the Programmer's WorkBench (PWB) that include
	a field titled "Additional Libraries" where you may specify the names of
	external libraries to be used in a project. When specifying the names of more
	than one library in any of these fields, the library names should be separated
	only by spaces, not commas or semicolons. Using any separator other than a space
	will result in LINK errors or the generation of an incorrect LINK command line.
	
	MORE INFORMATION
	================
	
	When compiling and linking a program within PWB, the following error may be
	produced if commas are used to separate libraries in any of the Additional
	Libraries fields:
	
	  Link: fatal error L1092: cannot open module-definition file
	
	When you use commas to separate library names, PWB does not remove the commas.
	Instead, PWB places the entire Additional Libraries string in the makefile as
	the LLIB_G, LLIB_D, or LLIB_R macro (depending on whether you enter the library
	in the global, debug, or release Additional Libraries field). Then, PWB
	generates commands in the makefile to create a response file where all sequences
	of spaces in the macro are replaced with a single space, a plus sign, and a
	newline.
	
	When LINK is invoked with the resulting response file, it assumes that the first
	comma between libraries is the normal LINK command-line separator that delimits
	the library field from the next field, the module-definition (.DEF) file field.
	Thus, LINK tries to read the following plus sign as if it is the name of a .DEF
	file, and therefore, fails with the L1092 error.
	
	If semicolons are used to separate the library names, the makefile is again
	generated as described above, so the semicolons are written to the response
	file. As soon as LINK reads the first semicolon, it assumes the default response
	for remaining LINK input and does not read the remaining response file data.
	This causes particular problems with LINK options specified in PWB because the
	PWB generated makefile places all LINK options on the last line of the response
	file. Thus, all LINK options are ignored if a semicolon is encountered first in
	the libraries field.
	
	A different, more obscure problem occurs when the libraries in the Additional
	Libraries field are specified with complete names with the .LIB extension and
	they are separated only with commas and no intervening spaces. In this case,
	LINK fails with the following error:
	
	  LibraryName.lib(1) : syntax error
	
	Also, if the incremental linker (ILINK.EXE) is used with these scenarios, the
	following ILINK error may be generated:
	
	  ILINK : warning L4266 : invalid .EXE file
	
	Note that none of these errors is due to problems in LINK or PWB. To achieve the
	intended results, only spaces should be used to separate libraries in the
	Additional Libraries field.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}

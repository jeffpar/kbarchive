---
layout: page
title: "Q81454: Creating Inference Rules for Nonstandard File Extensions"
permalink: kb/081/Q81454/
---

## Q81454: Creating Inference Rules for Nonstandard File Extensions

	Article: Q81454
	Product(s): Microsoft Programming Utilities
	Version(s): 1.11,1.12,1.13,1.2,1.21,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.11, 1.12, 1.13, 1.2, 1.3 
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use NMAKE to create an Inference Rule for a file with a nonstandard file
	extension (for example, an extension other than .ASM, .BAS, .C, and so forth),
	you must specify the extension in the .SUFFIXES list in the makefile.
	
	MORE INFORMATION
	================
	
	It is sometimes necessary or desirable to compile a source file that has a
	nonstandard file extension. For example, you may want to store a Microsoft
	QuickBasic source-code file as TEST.SRC rather than the standard TEST.BAS. To
	compile this file with NMAKE, you must create a new inference rule for that
	extension. The text below is an example of an inference rule to compile a
	QuickBasic file with the extension .SRC that is out-of-date with respect to its
	target object (.OBJ) file:
	
	     .src.obj:
	
	        @echo Compiling Source File
	        bc $<;
	
	However, another step is required for NMAKE to recognize the .SRC filename
	extension. You must add the extension to the .SUFFIXES list for NMAKE to
	recognize the new extension. Otherwise, NMAKE ignores the compiler call without
	any errors. The text below demonstrates the syntax for the .SUFFIXES statement
	in a makefile:
	
	  .SUFFIXES: .src
	
	The resulting makefile would resemble the following:
	
	  The resulting makefile would resemble the following:
	
	  .SUFFIXES: .src
	
	  .src.obj:
	     @echo Compiling Source File
	     bc $<;
	
	  test.obj : test.src
	
	Additional query words: kbinf 1.10 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2
	Version           : :1.11,1.12,1.13,1.2,1.21,1.3
	
	=============================================================================
	

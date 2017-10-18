---
layout: page
title: "Q44131: Specifying a Path in an NMAKE Inference Rule"
permalink: kb/044/Q44131/
---

## Q44131: Specifying a Path in an NMAKE Inference Rule

	Article: Q44131
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS 
	- Microsoft NMAKE Utility for OS/2 
	- Microsoft NMAKE Utility for Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an NMAKE makefile, you can specify a path in an inference rule. The syntax of
	an inference rule without a path is as follows:
	
	  .<from extension>.<to extension >:
	
	This syntax is somewhat limited because both the "from file" and "to file" are
	evaluated as if each exists in the current directory. In NMAKE, you can add a
	path specifier to an inference rule by using the following syntax:
	
	  {frompath}.<from extension>{topath}.<to extension>:
	
	Note: If you specify a path for one element of an inference rule, you must
	specify a path for both rules. For example, to compare a C source code file in
	the current directory with its corresponding object file in the C:\OBJECTS
	directory, use an inference rule like the following:
	
	  {}.c{c:\objects}.obj:
	  cl /c $<;
	
	MORE INFORMATION
	================
	
	When NMAKE encounters a target and dependency line that is not followed by any
	commands, NMAKE searches the makefile for an inference rule to use. During the
	process of searching for a match, NMAKE uses the directories of the target and
	the dependent. In other words, the following target and dependency line does not
	use the inference rule defined above because the object file path does not match
	the path specified in the inference rule:
	
	  test.obj : test.c
	
	This line would invoke the predefined .c.obj: inference rule. To invoke the above
	inference rule, modify the line to the following:
	
	  c:\objects\test.obj : test.c
	
	Additional query words: kbinf 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch
	Version           : :
	
	=============================================================================
	

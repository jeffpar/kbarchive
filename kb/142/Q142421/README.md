---
layout: page
title: "Q142421: FIX: D2004 Caused by /Tp or /Tc Option in Visual C++ 4.0"
permalink: kb/142/Q142421/
---

## Q142421: FIX: D2004 Caused by /Tp or /Tc Option in Visual C++ 4.0

	Article: Q142421
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400bug kbVC410fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the /Tp or /Tc compiler option is used in a project built within the
	Developer Studio, one of the following errors occurs:
	
	  Command line error D2004 : '/Tp' requires an argument
	
	  -or-
	
	  Command line error D2004 : '/Tc' requires an argument
	
	RESOLUTION
	==========
	
	To work around the problem:
	
	- Build the project from the command line. For example:
	
	  nmake /f <projectname.mak>
	
	  NOTE: You may need to run Vcvars32.bat from the \Msdev\Bin directory to set up
	  the environment variables needed to build from the command line.
	
	-or-
	
	- Rename the source files to have the needed extension so the /Tp or /Tc option
	  is not needed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	The /Tc option specifies that the file is a C source file, even if it doesn't
	have a .c extension. The /Tp option specifies that the file is a C++ source
	file, even if it doesn't have a .cpp or .cxx extension. These options worked for
	projects built within the Visual C++ 2.x environment. If you convert a project
	from version 2.x to 4.0 that has these options, you will get the previously
	described error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC400bug kbVC410fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC32bitSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

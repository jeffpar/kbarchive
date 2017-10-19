---
layout: page
title: "Q140440: FIX: Global Overloaded Delete Operator Causes LNK2005"
permalink: /kb/140/Q140440/
---

## Q140440: FIX: Global Overloaded Delete Operator Causes LNK2005

	Article: Q140440
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC400bug kbVC410fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When globally overloading operator delete, the linker may generate the following
	errors when building in the debug mode and using the static C run-time
	libraries:
	
	  error LNK2005: "void __cdecl operator delete(void *)"(??3@YAXPAX@Z)
	  already defined in file.obj
	
	  fatal error LNK1169: one or more multiply defined symbols found
	
	RESOLUTION
	==========
	
	The problem only appears with the static C run-time libraries for the debug
	mode; it does not occur when using the release mode. Also at this time, the
	problem is noted to occur only when an iostream object is linked in. For
	example, in the code fragment listed in the "Steps to Reproduce Problem" section
	of this article, if you change the statement to output to "cout" into a comment
	inside main(), the problem does not occur.
	
	To work around this problem:
	
	1. Use the DLL version of the C Run-Time library.
	
	2. Bring up the Project Settings dialog box. On the Build menu, click Settings.
	  Click the Link tab, and select the Customize category. Select the Force File
	  output option. This forces the linker to generate the executable regardless
	  of the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Build the following program as a console application using the debug mode.
	
	  // test.cpp
	
	  #include <iostream.h>
	  #include <malloc.h>
	
	  void operator delete (void *p)
	  {
	     free (p);
	  }
	
	  void main()
	  {
	     cout << "main" << endl;
	  }
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC400bug kbVC410fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

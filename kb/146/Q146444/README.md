---
layout: page
title: "Q146444: FIX: Working Directory Setting with Trailing Backslash Fails"
permalink: kb/146/Q146444/
---

## Q146444: FIX: Working Directory Setting with Trailing Backslash Fails

	Article: Q146444
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500fix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify the working directory with a path that ends with a backslash
	(\) or something like the following the debugger does not recognize the working
	directory specified.
	
	  c:
	  c:\
	  c:\.
	
	It uses the default working directory. The debugger will recognize any valid path
	that does not end with a backslash.
	
	RESOLUTION
	==========
	
	To work around this problem, do not include trailing backslashes in the Working
	Directory field of the Debug, General settings. Also avoid using the paths
	listed in the "Symptoms" section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following sample program can be used to find the current working directory.
	
	     /* Compile options needed: None
	     */ 
	
	     //test.cpp
	
	     #include <iostream.h>
	     #include <windows.h>
	
	     void main(void){
	
	        char cur_dir[100];
	        GetCurrentDirectory(sizeof(cur_dir),cur_dir);
	        cout <<"Current Working Directory is " <<cur_dir <<endl;
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbide kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

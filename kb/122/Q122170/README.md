---
layout: page
title: "Q122170: FIX: Cannot Set Breakpoint if Project Contains &#92;C++&#92; in Path"
permalink: /kb/122/Q122170/
---

## Q122170: FIX: Cannot Set Breakpoint if Project Contains &#92;C++&#92; in Path

{% raw %}

	Article: Q122170
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The debugger is unable to set breakpoints when you use the Visual C++ integrated
	debugger to debug a project located in a directory that contains
	non-alphanumeric characters (for example, a path that contains \C++\) -- which
	is a directory name supported by the Windows NT File System (NTFS).
	
	It is possible to set a breakpoint in a source file, but attempting to start a
	debug session generates this error message:
	
	  The breakpoint "{,test.cpp,}.linenum" cannot be set
	
	Here test.cpp is the source file and linenum is the line number where the
	breakpoint is set.
	
	CAUSE
	=====
	
	The integrated debugger can't handle file names supported only on NTFS.
	
	RESOLUTION
	==========
	
	Avoid the use of NTFS-specific file names or directory names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an MFC AppWizard project. When placing the project in a directory,
	  give a directory name that contains special characters (for example, C++).
	
	2. Build the project for debug mode.
	
	3. Place a breakpoint on a line of code in your project.
	
	4. Press the F5 key. A dialog box should appear that reads, "The breakpoint ...
	  cannot be set."
	
	Additional query words: IDE 2.00 buglist2.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

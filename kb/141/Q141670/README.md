---
layout: page
title: "Q141670: FIX: Profiling May Fail If Install Dir Contains Long File Name"
permalink: /kb/141/Q141670/
---

## Q141670: FIX: Profiling May Fail If Install Dir Contains Long File Name

{% raw %}

	Article: Q141670
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC410fix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SYMPTOMS
	========
	
	If you have installed Visual C++ in a directory that has a long file name like
	this one:
	
	  C:\Microsoft Program Files\Development Platforms
	
	you will get the following error message when you attempt to profile a project:
	
	  VcSpawn is a utility program required by Visual C++ Development
	  Environment.
	  prep failed.
	
	NOTE: This problem only occurs if the long file name contains spaces.
	
	RESOLUTION
	==========
	
	To work around the problem, you can run the profiling tools from the command
	line rather than through Developer Studio. Start a command prompt, and run the
	Vcvars32.bat file in the Bin subdirectory of your Visual C++ installation. This
	will ensure that the profiling tools directory is included in your PATH
	environment variable. Now you can run one of the standard profiling batch files,
	such as Fcount.bat, to profile your project. For more information on the
	standard batch files, refer to Profiler Reference in the online documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : kbide kbVC kbVC410fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

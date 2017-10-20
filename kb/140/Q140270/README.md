---
layout: page
title: "Q140270: FIX:ClassView Add Function/Variable Fails If Header File Moved"
permalink: /kb/140/Q140270/
---

## Q140270: FIX:ClassView Add Function/Variable Fails If Header File Moved

{% raw %}

	Article: Q140270
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10
	Operating System(s): 
	Keyword(s): kbide kbVC400bug kbVC410bug kbVC420fix kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to add a function or variable to a class by using ClassView fails and
	returns this message:
	
	  One or more of the files for <class name> are read-only.
	
	Here <class name> corresponds to the class that is selected.
	
	
	CAUSE
	=====
	
	This is a bug that occurs if the header file for the class has been moved from
	its original directory.
	
	RESOLUTION
	==========
	
	Either choose not to move the header files from their original location, or add
	member functions and variables manually if you must move the files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 4.2.
	
	MORE INFORMATION
	================
	
	Moving the wizard-generated header files to another directory results in their
	appearing as read-only when you attempt to use the ClassView add function or add
	variable commands. Even if you add the new directory to the include directory
	search path and update all dependencies, this problem persists.
	
	The files are not really read-only; they can be opened for editing through all
	available avenues.
	
	Additional query words: class view workspace
	
	======================================================================
	Keywords          : kbide kbVC400bug kbVC410bug kbVC420fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410
	Version           : 4.00 4.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

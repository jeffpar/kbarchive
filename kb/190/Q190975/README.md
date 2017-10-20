---
layout: page
title: "Q190975: FIX: Delete Files from Project Doesn't Update IntelliSense"
permalink: /kb/190/Q190975/
---

## Q190975: FIX: Delete Files from Project Doesn't Update IntelliSense

{% raw %}

	Article: Q190975
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When files are deleted from a project, IntelliSense continues to recognize the
	functions and classes that the removed file contained.
	
	CAUSE
	=====
	
	When a file is removed, none of the functions or classes are removed from
	IntelliSense's "memory."
	
	RESOLUTION
	==========
	
	To have IntelliSense remove these functions and classes, close the project
	workspace, and delete the project's .ncb file. When the project is reopened in
	Visual C++, the .ncb file will be re-created with the correct information.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In a Visual C++ project, click New on the File menu.
	
	2. On the Files tab, select C/C++ Header file.
	
	3. Name the new file Test.h.
	
	4. In Test.h type the following text:
	
	        class CTest
	        {
	        public :
	           void MyTest(){}
	        }
	
	5. In the FileView pane, select Test.h and press the DEL key. Test.h is now
	  removed from the project.
	
	6. In another source file, type the following:
	
	        CTest test;
	        test.
	
	Notice that the Members list for the test object displays, even though the class
	definition has been removed by deleting the file.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153284 Limitations of IntelliSense in Visual C++ 6.0
	
	Additional query words: kbvc600bug
	
	======================================================================
	Keywords          : kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

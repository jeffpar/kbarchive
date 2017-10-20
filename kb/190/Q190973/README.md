---
layout: page
title: "Q190973: PRB: IntelliSense Does Not Display Enumerated Elements"
permalink: /kb/190/Q190973/
---

## Q190973: PRB: IntelliSense Does Not Display Enumerated Elements

{% raw %}

	Article: Q190973
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Enumerated elements are not displayed in the Members list.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In a Visual C++ project, add the following code to a source file:
	
	        enum TestEnum
	        {
	           Test_One,
	           Test_Two,
	           Test_Three
	        };
	
	2. On a blank line in the source file, press CTRL+SPACEBAR.
	
	3. The global Members list should appear.
	
	4. Scroll through the list and notice that IntelliSense does not display
	  Test_One, Test_Two, or Test_Three.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153284 Limitations of IntelliSense in Visual C++ 6.0
	
	"About Automatic Statement Completion"; Visual C++ Documentation, Using Visual
	C++, Visual C++ Users Guide, Text Editor, Overview: Text Editor, About Automatic
	Statement Completion.
	
	"Automatically Completing Statements;" Visual C++ Documentation, Using Visual
	C++, Visual C++ Users Guide, Text Editor, How do I ... Topics: Text Editor,
	Automatically completing Statements.
	
	Additional query words: kbvc600
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

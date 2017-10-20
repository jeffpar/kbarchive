---
layout: page
title: "Q190974: PRB: Function Prototypes Do Not Generate Parameter Info"
permalink: /kb/190/Q190974/
---

## Q190974: PRB: Function Prototypes Do Not Generate Parameter Info

{% raw %}

	Article: Q190974
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Parameter Info for global functions is generated only from the function
	definition, not the prototype.
	
	
	RESOLUTION
	==========
	
	The function must be implemented, or the source file with the implementation
	must be added to the project.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In a Visual C++ project, create a new C/C++ Source file.
	
	2. Type the following code into the new source file:
	
	        void Test(DWORD dw, UINT ui);
	        void UseTest();
	
	        void UseTest()
	        {
	        }
	
	3. Inside of the UseTest function definition, type the following:
	
	        Test(
	
	  Notice that no Parameter Info appears for the Test function.
	
	4. Delete the code entered in step 3.
	
	5. Add the following code to the end of the source file:
	
	        void Test(DWORD dw, UINT ui)
	        {
	        }
	
	6. Perform step 3 again. Parameter Info now appears for the Test function.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153284 Limitations of IntelliSense in Visual C++ 6.0
	
	"Template Topics;" Visual C++ Documentation, Using Visual C++, Visual C++
	Programmers Guide, Adding Program Functionality, Details, Template Topics.
	
	"About Automatic Statement Completion;" Visual C++ Documentation, Using, Visual
	C++, Visual C++ Users Guide, Text Editor, Overview: Text Editor, About Automatic
	Statement Completion.
	
	Additional query words: kbvc600
	
	======================================================================
	Keywords          : kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

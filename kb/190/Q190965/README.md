---
layout: page
title: "Q190965: PRB: IntelliSense Limitations with #define Macros"
permalink: kb/190/Q190965/
---

## Q190965: PRB: IntelliSense Limitations with #define Macros

	Article: Q190965
	Product(s): Microsoft C Compiler
	Version(s): WINNT:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When working with macro definitions in Microsoft Visual C++, the following two
	IntelliSense limitations occur:
	
	- IntelliSense does not dynamically resolve macro definitions.
	
	- Using #ifdef or #ifndef to define functions produces unexpected results.
	
	STATUS
	======
	
	Microsoft is researching these problems and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	IntelliSense Does Not Dynamically Resolve Macro Definitions
	-----------------------------------------------------------
	
	Visual C++ 6.0 does not preprocess any macros while code is being edited. Because
	of this, IntelliSense does not appear as it would if the macro were not used.
	For example, the following TEST_FUNC macro aliases the Test() function:
	
	     #define TEST_FUNC Test
	     void Test(char *pszName);
	     void Test(char *pszName){ printf("Name = %s", pszName); }
	
	In another part of the code, typing "Test" followed by an open parenthesis
	displays the Parameter Info ToolTip for the Test() function. However, typing
	"TEST_FUNC" followed by an open parenthesis does not activate IntelliSense, even
	though it will become the Test() function when it is compiled. This same
	limitation applies to many other uses of macros, because IntelliSense does not
	dynamically resolve macros to known identifiers.
	
	This limitation can also cause problems with standard functions and structures.
	Although most of the standard Win32 functions are handled properly, some header
	files use macros to alias functions and structures. This can result in
	IntelliSense not recognizing the macro. To verify whether this may be the cause
	of the problem, search for the structure or function in the VC98\Include
	directory. If the documented function or structure is actually a macro, this
	could explain why IntelliSense is not recognizing it.
	
	
	Using #ifdef or #ifndef to Define Functions Produces Unexpected Results
	-----------------------------------------------------------------------
	
	When functions are conditionally defined using #ifdef or #ifndef, IntelliSense
	first determines whether the constant is defined in the project. If the macro is
	defined, IntelliSense displays information on the correct function. If the macro
	is undefined in the project, IntelliSense displays information for the first
	function, regardless of whether #ifdef or #ifndef is used. IntelliSense can not
	predict whether a constant will be defined, because constants can be set with
	compiler switches. Do not depend on IntelliSense to always provide the
	appropriate information when code is conditionally included in this way.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153284 Limitations of IntelliSense in Visual C++ 6.0
	
	"About Automatic Statement Completion;" Visual C++ Documentation, Using Visual
	C++, Visual C++ Users Guide, Text Editor, Overview: Text Editor, About Automatic
	Statement Completion.
	
	"Automatically Completing Statements;" Visual C++ Documentation, Using Visual
	C++, Visual C++ Users Guide, Text Editor, How do I ... Topics: Text Editor,
	Automatically completing Statements.
	
	Additional query words: kbvc600
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : WINNT:6.0
	Issue type        : kbprb
	
	=============================================================================
	

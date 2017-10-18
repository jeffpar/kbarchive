---
layout: page
title: "Q190976: PRB: IntelliSense Ignores Unicode/ANSI Versions of Win32 API"
permalink: kb/190/Q190976/
---

## Q190976: PRB: IntelliSense Ignores Unicode/ANSI Versions of Win32 API

	Article: Q190976
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
	
	Parameter Info and Type Info are not generated for the Unicode or ANSI versions
	of the Win32 API. These functions can usually be formed by adding "A" or "W"
	onto a standard Win32 API function.
	
	RESOLUTION
	==========
	
	Use the generic version of each function. For information on using UNICODE, see
	the REFERENCES section.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99359 INFO: UNICODE and _UNICODE Needed to Compile for Unicode
	
	
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
	Solution Type     : kbnofix
	
	=============================================================================
	

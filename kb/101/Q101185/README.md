---
layout: page
title: "Q101185: INFO: Using cout in an Application and DLL"
permalink: /kb/101/Q101185/
---

## Q101185: INFO: Using cout in an Application and DLL

	Article: Q101185
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbDSupport
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The standard output stream (cout) can be used in an application or Dynamic- Link
	Library (DLL) to display information. When using cout in an application and a
	DLL simultaneously, special care is needed to ensure that the text display is
	synchronized.
	
	Because the cout text stream is buffered, text from a DLL may not appear correct
	relative to text from the application. To correct this problem, always use the
	endl manipulator when outputting text with cout. Below is an example:
	
	     cout << "Hello World" << endl;
	
	The endl manipulator inserts a newline character and then flushes the stream
	buffer. This ensures that text displayed from the application and DLL is
	synchronized.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangCPP kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

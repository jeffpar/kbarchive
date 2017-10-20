---
layout: page
title: "Q229415: INFO: Visual Basic Supports P-Code and Native Code Compilation"
permalink: /kb/229/Q229415/
---

## Q229415: INFO: Visual Basic Supports P-Code and Native Code Compilation

{% raw %}

	Article: Q229415
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbFAQ kbVBp600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Basic is a Rapid Application Development (RAD) tool that offers
	the flexibility of compiling applications to p-code (pseudo code) or native
	code.
	
	Compiling to p-code optimizes for the smallest size, making p-code the choice for
	creating Internet applications in low bandwidth situations. Native code
	compilation is highly optimized for speed, but the executable files produced are
	larger than the p-code versions. Visual Basic is the only RAD tool to support
	both rapid application development through p-code as well as native code
	compiling for performance.
	
	NOTE: Visual Basic projects compiled as p-code or native code programs still
	require the Visual Basic run-time DLL (MSVBVM50.DLL or MSVBVM60.DLL) to be
	installed in the target system. This run-time DLL provides a number of services
	for your compiled program, such as startup and shutdown code for your
	application, functionality for forms and intrinsic controls, and run-time
	functions such as Format and CLng.
	
	REFERENCES
	==========
	
	For more information about p-code and native code compilation, please see:
	
	Compiling Your Project to Native Code in the Online Help or the MSDN Web site
	at:
	
	http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconcompilingyourprojecttonativecode.htm.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbFAQ kbVBp600FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

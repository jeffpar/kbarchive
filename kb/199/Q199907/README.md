---
layout: page
title: "Q199907: DOC: Debugger.Evaluate Method Doesn't Evaluate Functions"
permalink: /kb/199/Q199907/
---

## Q199907: DOC: Debugger.Evaluate Method Doesn't Evaluate Functions

{% raw %}

	Article: Q199907
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbdocerr kbDebug kbHTMLHelp kbide kbMSDN kbVC500 kbVC600 kbDSupport kbGrpDSTools
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Developer Network Visual Studio Edition, versions 6.0, 97 
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MSDN library documentation for the Evaluate method of the Debugger object
	incorrectly states that this method is functionally identical to typing in the
	Visual C++ debugger's Watch window. For example, the Watch window can evaluate
	C/C++ function calls and the Evaluate method cannot.
	
	MORE INFORMATION
	================
	
	Launch the MSDN library and follow this path:
	
	  
	
	  Visual C++ documentation
	 Using Visual C++
	   Visual C++ User's Guide
	     Automating Tasks in Visual Studio
	       Developer Studio Objects
	         Reference: Developer Studio Objects
	           Objects
	             Debugger Object
	
	Click Evaluate. The documentation states the following:
	
	  
	
	  Evaluates an expression, as if you typed it in the Visual C++ debugger's Watch window.
	
	This is incorrect. Debugger.Evaluate cannot evaluate functions during a debug
	session of C/C++ code in Visual C++. However, Debugger.Evaluate can evaluate
	such mathematical expressions as "2+2".
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbDebug kbHTMLHelp kbide kbMSDN kbVC500 kbVC600 kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper kbZNotKeyword8 kbMSDNSearch _IKkbZNotKeyword4 kbZNotKeyword2 kbVC500 kbVC600 kbVC32bitSearch kbMSDN600VS kbMSDN97VS kbVC500Search
	Version           : winnt:5.0,6.0,97
	
	=============================================================================
	

{% endraw %}

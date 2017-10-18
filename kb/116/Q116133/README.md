---
layout: page
title: "Q116133: PRB: /INFO or /VERBOSE Option May Delay Stopping a Build"
permalink: kb/116/Q116133/
---

## Q116133: PRB: /INFO or /VERBOSE Option May Delay Stopping a Build

	Article: Q116133
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbide kbVC
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the /INFO option from Visual C++ for Windows or the /VERBOSE option from
	Visual C++ 32-bit Edition may delay the Microsoft Visual Workbench from stopping
	the build process during the linking phase of the build.
	
	CAUSE
	=====
	
	The /INFO and /VERBOSE options display a great deal of information, and the
	Visual Workbench attempts to display this information. As a result, the Visual
	Workbench is "too busy" to actually stop the build. In some cases, the Visual
	Workbench does receive the Stop Build message, but displays the remaining link
	information before it processes the Stop Build message.
	
	This problem appears more often when using the Visual Workbench for Windows than
	when using the Visual Workbench 32-bit Edition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Microsoft products listed
	above. We are researching the problem and will post new information in the
	Microsoft Knowledge Base as soon as it becomes available.
	
	Additional query words: doesn't respond response
	
	======================================================================
	Keywords          : kbide kbVC 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q157255: DOCERR: About _Coverage Wrong in Documentation and Help"
permalink: kb/157/Q157255/
---

## Q157255: DOCERR: About _Coverage Wrong in Documentation and Help

	Article: Q157255
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro 5.0 Language Reference, Help, and online Language Reference
	provide incorrect information about the "_COVERAGE" system variable.
	
	MORE INFORMATION
	================
	
	The topic "_COVERAGE" in the Visual FoxPro Help file and in the Language
	Reference in the Online Documentation provide the following information:
	
	  Contains the name of the Visual FoxPro application that creates the Debugger
	  coverage and profiler output.
	
	  By default, _COVERAGE contains Coverage.app, installed in your Visual FoxPro
	  directory. You can specify a different name for the coverage output
	  application.
	
	However, issuing either of the following commands in the Command window results
	in an empty string.
	
	     ? _COVERAGE
	     ? SET("COVERAGE")
	
	A file called Coverage.app does not exist in any of the directories installed by
	Visual FoxPro.
	
	A default coverage application, Coverage.app, does not exist. The _COVERAGE
	system variable is not assigned any application by default, but one can be
	assigned to it. This variable allows you to create your own coverage application
	and make it callable from Visual FoxPro.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	

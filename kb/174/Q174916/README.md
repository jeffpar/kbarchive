---
layout: page
title: "Q174916: PRB: APPEND PROCEDURES Causes &quot;Feature Not Available&quot; in Runtime"
permalink: kb/174/Q174916/
---

## Q174916: PRB: APPEND PROCEDURES Causes &quot;Feature Not Available&quot; in Runtime

	Article: Q174916
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	"Feature is not available" error occurs when issuing an APPEND PROCEDURES
	command in a FoxPro executable.
	
	CAUSE
	=====
	
	The COMPILE feature is not available in a distributed application. The APPEND
	PROCEDURES command performs an implicit COMPILE of the database when stored
	procedures are added.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This error message occurs because Visual FoxPro attempts to recompile the
	database code when the APPEND PROCEDURES command is issued. Visual FoxPro cannot
	perform this action in the runtime environment.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database using the following command:
	
	        CREATE DATA mytestdata
	
	2. Create a procedure file with the command MODIFY COMMAND myprocs and add the
	  following lines of code:
	
	        PROCEDURE myproc
	        ENDPROC
	
	3. Create a project with the following MAIN program code:
	
	        OPEN DATA mytestdata
	        APPEND PROCEDURES FROM myprocs.prg
	
	4. Build an executable, quit Visual FoxPro, and run the executable.
	
	The "Feature is not available" error will occur on the APPEND PROCEDURES command.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q139386 Features not Available in a Distributed Application
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

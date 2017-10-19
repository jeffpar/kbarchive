---
layout: page
title: "Q194781: PRB: Version Information in Project Causes Invalid .Exe File"
permalink: /kb/194/Q194781/
---

## Q194781: PRB: Version Information in Project Causes Invalid .Exe File

	Article: Q194781
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the German version of Visual FoxPro 6.0, an executable built from a project
	that contains version information or has the Auto Increment check box selected
	fails to run under the German version of Windows NT 4.0. The following error
	message appears:
	
	  <path>/P.EXE ist keine zulassige Anwendung fur Windows.
	
	A rough translation in English follows:
	
	  <path>/P.exe is not a permissible application for Windows.
	
	RESOLUTION
	==========
	
	Remove version information in the Project Manager and make sure that the Auto
	Increment check box is not selected.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project called Ztest.
	
	2. Add a main program to the project that contains a WAIT WINDOW command then
	  save the program.
	
	3. In the Project Manager, click Build... (ERSTELLEN...) and choose Build
	  Executable (EXE ERSTELLEN).
	
	4. Next, select the VERSION button.
	
	5. Place a number in either the Major, Minor, or Revision text boxes or select
	  the Auto Increment check box.
	
	6. Click OK twice and then build the executable file.
	
	7. Start Explorer and attempt to start the executable.
	
	RESULTS: The following error appears:
	
	  <path>/P.EXE ist keine zulassige Anwendung fur Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

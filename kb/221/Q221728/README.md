---
layout: page
title: "Q221728: FIX: C0000005 Fatal Error With MODIFY WINDOW SCREEN in EXE"
permalink: kb/221/Q221728/
---

## Q221728: FIX: C0000005 Fatal Error With MODIFY WINDOW SCREEN in EXE

	Article: Q221728
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSF
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have an application that uses the Visual FoxPro run-time files. Upon issuing
	a MODIFY WINDOW SCREEN command, the application exits with the following error:
	
	  Fatal error: Exception code=C0000005
	  Called from - <procedure name and line number> {<path and
	  filename>}
	
	The procedure name and line number contain the method or procedure containing the
	MODIFY WINDOW SCREEN command and the line number. Note that the line number will
	be 0 if the executable was built without the Debug Info checkbox in the Project
	Information dialog box. The path and filename contain the path and filename of
	the file containing the method or procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The MODIFY WINDOW SCREEN command can be used to reset the Visual FoxPro desktop
	window to its default size and color settings.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project and name it test.
	
	2. Add a program named Main that contains the following code:
	
	     MODIFY WINDOW SCREEN
	     WAIT WINDOW "PRESS ANY KEY TO QUIT"
	
	3. Build the project into an executable file.
	
	4. Run the executable file.
	
	RESULTS: The fatal error occurs.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

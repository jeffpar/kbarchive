---
layout: page
title: "Q157985: INFO: Anyone Can Run SSARC.EXE if There Is No Admin Password"
permalink: kb/157/Q157985/
---

## Q157985: INFO: Anyone Can Run SSARC.EXE if There Is No Admin Password

	Article: Q157985
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SSARC.EXE and SSRESTOR.EXE are utilities included with Visual SourceSafe 5.0
	that allow users to archive specific versions of projects or files and restore
	those archives back to the original or to a different database.
	
	According to the documentation, SSARC.EXE can only be run by the SourceSafe
	administrator. However, if the administrator has no password, any user can run
	the program.
	
	MORE INFORMATION
	================
	
	1. Run or switch to the SourceSafe Administrator utility and remove the admin
	  password (if there is one).
	
	2. From the DOS prompt, switch to the VSS\WIN32 directory, and then type:
	
	  "SS WHOAMI" (without the quotation marks)
	
	  Your login name is echoed to the console.
	
	3. From the server installation of SourceSafe, switch to the WIN32 subdirectory
	  and run SSARC.EXE <archive file to create> <project>. Note that
	  the program runs.
	
	4. Run or switch to the SourceSafe Administrator utility and create an admin
	  password.
	
	5. Repeat steps 2 and 3, and note that you will be prompted for the admin
	  password.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	

---
layout: page
title: "Q166940: PRB: Error Attempting to Run Visual FoxPro Online Documentation"
permalink: kb/166/Q166940/
---

## Q166940: PRB: Error Attempting to Run Visual FoxPro Online Documentation

	Article: Q166940
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbdocerr kbvfp
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run the Visual FoxPro Online Documentation, the following, or
	similar, error may occur:
	
	  VFPDOCS
	  Run-time error '5'
	  Invalid procedure call
	
	The error occurs after attempting to read the CD-ROM in the drive.
	
	CAUSE
	=====
	
	The cause of the error is most likely corrupted or invalid registry entries.
	
	RESOLUTION
	==========
	
	To solve the problem, first delete the registry key "Visual FoxPro Online
	Documentation." The location of this key in the registry is as follows:
	
	  My Computer
	    HKEY_CURRENT_USER
	      Software
	        VB and VBA Program Settings
	          MSeries
	
	After deleting the key from the registry, rerun the Online Documentation. When
	the dialog box prompts for the location of the documentation, point to the file
	"Vfp\Online\Vfpdocs.exe" on the CD.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbprb
	
	=============================================================================
	

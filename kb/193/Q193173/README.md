---
layout: page
title: "Q193173: PRB: Silent Setup of PDW Package Cannot Create New Folder"
permalink: kb/193/Q193173/
---

## Q193173: PRB: Silent Setup of PDW Package Cannot Create New Folder

	Article: Q193173
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Package and Deployment Wizard (PDW) in silent mode, it gives
	the following error if the script contains a folder that does not already
	exist:
	
	  "Cannot package the project in silent mode because the package folder
	  <path to folder> does not exist."
	
	CAUSE
	=====
	
	Unlike the interactive PDW, the silent mode works without user intervention. It
	is not supposed to create a new folder without approval from the user. To allow
	PDW to work silently, the folder must exist and must be empty.
	
	RESOLUTION
	==========
	
	To create a new folder as part of batch processing, you can have your batch file
	create the folder before performing silent packaging and deployment.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	MSDN, article "Starting the Package and Deployment Wizard", section "Running the
	Wizard in Silent Mode"
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbWizard kbAppSetup
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

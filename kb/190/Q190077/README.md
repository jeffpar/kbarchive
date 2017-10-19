---
layout: page
title: "Q190077: HOWTO: Set Number of .CAB's in Setup.lst After Repackaging"
permalink: /kb/190/Q190077/
---

## Q190077: HOWTO: Set Number of .CAB's in Setup.lst After Repackaging

	Article: Q190077
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When repackaging cabinet files (.CAB) using the batch program located in the
	Support directory, you can encounter errors when installing the application.
	
	MORE INFORMATION
	================
	
	When using the Package and Deployment Wizard (PDW) to package an application for
	distribution, the PDW creates a Support subdirectory in the directory used by
	the PDW to package the application. This subdirectory contains a batch file
	named after the main application EXE. For example, if the application is named
	MyApp.Exe, then the batch file will be named MyApp.bat. This batch file can be
	run to recreate the cabinet files (.CAB) created by the PDW.
	
	Once the .CAB files have been created, you may need to open the Setup.lst file
	for the application to reflect the correct number of .CAB files created. The
	Setup.lst file is located one directory up from the batch file, in the main
	directory created by the PDW. You can view this text file in Notepad.exe or any
	text editor.
	
	To ensure the PDW knows of the existence of all .CAB files, locate the following
	line in the [BootStrap] section:
	
	     Cabs=#
	
	where # is the number of .CAB files necessary to distribute the application.
	
	If this entry does not exist or is not the correct number, add or modify the
	entry to reflect the correct number of .CAB files.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q189743 : INFO: Description of Setup.lst Sections
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

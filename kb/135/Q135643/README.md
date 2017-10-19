---
layout: page
title: "Q135643: INFO: Basic Troubleshooting Converting from Delta to SourceSafe"
permalink: /kb/135/Q135643/
---

## Q135643: INFO: Basic Troubleshooting Converting from Delta to SourceSafe

	Article: Q135643
	Product(s): Microsoft SourceSafe
	Version(s): MS-DOS:3.1; WINDOWS:3.1,4.0,5.0; winnt:3.1
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe310
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers the undocumented tips and tricks to using the Delta_SS
	conversion program in order to pull Microsoft Delta projects into Microsoft
	SourceSafe.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Ensure that your Delta project is having no problems. The Delta to SourceSafe
	  conversion program runs the Delta RETRV DOS command to get the information
	  pulled from Delta. If the Delta project is having problems within Delta,
	  those problems need to be fixed before the Delta_SS conversion will run
	  successfully.
	
	  For additional information on how to troubleshoot basic Delta problems, please
	  see the following article in the Microsoft Knowledge Base:
	
	  Q131862 Basic Troubleshooting When Having Problems with Delta
	
	2. Check all the project files into Delta before locking the project. The
	  project should be locked before DELTA_SS is run.
	
	3. Make sure Delta is in your path, preferably the first directory.
	
	4. Make sure the DELTA_USER environment variable is set before running DELTA_SS.
	  Add "SET DELTA_USER=guest" to the Autoexec.bat file.
	
	5. Confirm that you are using the correct path to SourceSafe.
	
	6. Make sure you are using the correct Delta project name.
	
	
	Additional query words: delta
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe310 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe400 kbSSafe500 kbSSafe310NT
	Version           : MS-DOS:3.1; WINDOWS:3.1,4.0,5.0; winnt:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

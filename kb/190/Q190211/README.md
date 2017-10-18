---
layout: page
title: "Q190211: PRB: Problems with Visual Basic 5.0 and 6.0 on the Same System"
permalink: kb/190/Q190211/
---

## Q190211: PRB: Problems with Visual Basic 5.0 and 6.0 on the Same System

	Article: Q190211
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Installing Visual Basic 6.0 on a computer without uninstalling the existing
	Visual Basic 5.0 may cause both products to function improperly. This article
	describes some of the possible problems that can occur.
	
	MORE INFORMATION
	================
	
	Because Visual Basic 5.0 and Visual Basic 6.0 employ the same license keys and
	names for some files, conflict can arise if a machine has both of them
	installed.
	
	After installing Visual Basic 6.0 on a machine that already has Visual Basic 5.0
	installed, both the Application Performance Explorer (APE) and the T-SQL
	Debugger in Visual Basic 5.0 will not work properly. Please see Scenario 3 below
	for more information.
	
	
	Visual Basic 6.0 will work without noticeable problems. Although the Add-In
	Manager DialogBox will list duplicated entries, these entries are
	distinguishable by Visual Basic 5.0 and Visual Basic 6.0. If Visual Basic 5.0 is
	uninstalled, the following components will no longer work properly in Visual
	Basic 6.0:
	
	- APE
	
	- Visual Data Manager (Visdata)
	
	- T-SQL Debugger
	
	- Remote Data Control (MSRDC)
	
	If Visual Basic 6.0 is uninstalled, APE, Visdata, and API Viewer might not work
	properly in Visual Basic 5.0.
	
	
	Following are scenarios of some possible problems:
	
	Scenario 1
	----------
	
	1. Install Visual Basic 5.0.
	
	2. Install Visual Basic 6.0.
	
	3. In the Control Panel, select Add/Remove Programs, and then select Visual
	  Basic 5.0 for Removal. Note that the APE, VisData, and T-SQL Debugger are not
	  working, and MSRDC reports that it loses its license to run.
	
	Scenario 2
	----------
	
	1. Install Visual Basic 5.0.
	
	2. Install Visual Basic 6.0.
	
	3. In Control Panel, select Add/Remove Programs, and then select Visual Basic
	  6.0 for Removal. Note that the APE, Visdata, and API Viewer do not work
	  properly.
	
	Scenario 3
	----------
	
	1. Install Visual Basic 5.0.
	
	2. Install Visual Basic 6.0.
	
	3. Run Visual Basic 5.0 and start APE. An error message is received about an
	  incorrect version of aesvrmgr.exe.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q217017 INFO: Visual Basic 5.0 and 6.0 Compatibility Issues
	
	  Q221990 PRB: Cannot Add Windows Common Controls or Common Dialog Control to
	  Project
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbConfig kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

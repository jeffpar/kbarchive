---
layout: page
title: "Q87696: PRB: Application Unable to Edit Database Files"
permalink: kb/087/Q87696/
---

## Q87696: PRB: Application Unable to Edit Database Files

	Article: Q87696
	Product(s): Microsoft FoxPro
	Version(s): 2.0,2.5,2.5a,2.5b,2.6,2.6a,3.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 07-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0, 7.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application cannot edit database files.
	
	RESOLUTION
	==========
	
	Mark the database as excluded in the project file by selecting the database,
	then choosing Exclude from the Project menu. Rebuild the project and the
	application. Distribute the database .DBF and .FPT files to the end users with
	the application.
	
	If a database is included in a project, it is marked read-only unless it is
	explicitly excluded.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.50 2.50a 2.50b 2.60 2.60a Cannot update the cursor
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP500 kbVFP600 kbVFP700
	Version           : :2.0,2.5,2.5a,2.5b,2.6,2.6a,3.0,5.0,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

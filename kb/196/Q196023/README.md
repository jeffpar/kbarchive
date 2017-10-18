---
layout: page
title: "Q196023: PRB: Cannot Get Individual Items from the Projects Collection"
permalink: kb/196/Q196023/
---

## Q196023: PRB: Cannot Get Individual Items from the Projects Collection

	Article: Q196023
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Referencing a project collection's item without the keyword 'Item' may cause the
	following error:
	
	  File '<filename>' does not exist.
	
	RESOLUTION
	==========
	
	To access an individual item, use the following syntax:
	
	     oProj = APPLICATION.ACTIVEPROJECT
	     oFiles = oProj.FILES
	     oFile = oFiles.Item[1]
	     ?oFile.NAME
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from a program file with a project in memory that has at
	least one file attached to it:
	
	     oProj = APPLICATION.ACTIVEPROJECT
	     oFiles = oProj.FILES
	     oFile = oFiles[1]
	     ?oFile.NAME
	
	RESULTS: The third line returns the following error:
	
	  File 'ofiles.prg' does not exist.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

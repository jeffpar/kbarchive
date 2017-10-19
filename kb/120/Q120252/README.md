---
layout: page
title: "Q120252: PRB: Viewer Title Setup Error in INICM.C Line 185"
permalink: /kb/120/Q120252/
---

## Q120252: PRB: Viewer Title Setup Error in INICM.C Line 185

	Article: Q120252
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the following Microsoft Multimedia Viewer Publishing Toolkit Setup
	command to install a title, you encounter this error: "Setup has encountered a
	problem. Please report File='INSTALL\INICM.C', Line='185' to Microsoft Product
	Support Services."
	
	  \MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\USA\SETUP.EXE
	
	CAUSE
	=====
	
	SETUP.EXE uses the TITLE.MST file in the same directory for directions on how to
	install the title. TITLE.MST has seven variables. The values for all seven
	variables must be set by the author of the Viewer title. These variables contain
	information such as the name of the Viewer title and the destination directory
	for the title. If any of these variables are not initialized, SETUP.EXE will
	report an error in INICM.C.
	
	RESOLUTION
	==========
	
	The first 85 lines of TITLE.MST contain comments with instructions on how to
	initialize the seven variables.
	
	Additional query words: 2.00 setup mssetup toolkit
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	Issue type        : kbprb
	
	=============================================================================
	

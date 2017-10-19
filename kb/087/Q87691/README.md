---
layout: page
title: "Q87691: PRB: &quot;File in Use by Another&quot; Errors in Networked FoxPro"
permalink: /kb/087/Q87691/
---

## Q87691: PRB: &quot;File in Use by Another&quot; Errors in Networked FoxPro

	Article: Q87691
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a | 2.50 2.50a 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxBASE+ for MS-DOS, version 1.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to run Microsoft FoxPro or Microsoft FoxBASE+ across a network fails
	with a "File in use by another" error.
	
	CAUSE
	=====
	
	The files are locked by another user on the network.
	
	RESOLUTION
	==========
	
	Verify that each user has EXCLUSIVE set to OFF. This command must be issued
	prior to either user opening the database file.
	
	On a peer-to-peer network, also do the following:
	
	1. Change the attributes of the FoxPro .EXE and .OVL files and the FoxBASE+
	  .EXE, .OVL, and .RSC files to read-only.
	
	2. Load the MS-DOS SHARE utility on both the workstation and the server. Specify
	  the /F:5120 and /L:500 parameters.
	
	3. Share the FoxPro FOXUSER database by marking the file as read-only.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.x
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbFoxBASE121DOS kbFoxBASESearch kbVFP300
	Version           : 2.00 2.50 2.50a | 2.50 2.50a 3.0
	
	=============================================================================
	

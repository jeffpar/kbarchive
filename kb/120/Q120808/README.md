---
layout: page
title: "Q120808: PRB: Viewer Setup Error in INICM.C Line 185 or in PROGCM.C"
permalink: kb/120/Q120808/
---

## Q120808: PRB: Viewer Setup Error in INICM.C Line 185 or in PROGCM.C

	Article: Q120808
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1; :2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating the setup program for your Viewer title by following the
	instructions in the Viewer Authoring Guide (Chapter 13, "Completing the
	Package"), you test the setup by running SETUP.EXE. This results in the
	following setup error message:
	
	  Setup has encountered a problem.
	  Please report File='INSTALL\INICM.C', Line='185' to
	  Microsoft Product Support Services.
	
	The error message may report a different file and a different line number, such
	as:
	
	  Please report File='INSTALL\PROGCM.C', Line='298' to
	  Microsoft Product Support Services.
	  Please report File='INSTALL\PROGCM.C', Line='468' to
	  Microsoft Product Support Services.
	
	CAUSE
	=====
	
	You must initialize the seven global variables before the setup will run
	correctly. Invalid values in these variables cause the error messages:
	
	- An error occurs in INICM.C on line 185 occurs when the setup script calls the
	  function CreateIniKeyValue if the MVBFileName$ variable is set to an empty
	  string ("").
	
	- An error occurs in PROGCM.C on line 298 occurs when the setup script calls
	  the function CreateProgmanGroup if the ProgmanGroup$ variable is set to an
	  empty string ("").
	
	- An error occurs in PROGCM.C on line 468 when the setup script calls the
	  function CreateProgmanItem if the ProgmanItem$ variable is set to an empty
	  string ("").
	
	RESOLUTION
	==========
	
	Fill in correct string values for all seven global variables near the top of the
	TITLE.MST file. For information on how to correctly fill in these values, see
	the "Completing the Package" chapter of the Authoring Guide, which contains a
	section called "Customizing TITLE.MST." Follow these instructions, and read the
	comments in the TITLE.MST file.
	
	MORE INFORMATION
	================
	
	Do not change the name of the TITLE.MST file. If you change the name of the
	TITLE.MST file, you may get one of the following errors:
	
	  Setup Initialization Error
	  Setup cannot access required initialization file:
	  '<path>\TITLE.MST'."
	
	  -or-
	
	  Microsoft Test Driver (dumb shell)
	  Can't read the file 'title.mst'"
	
	Additional query words: 3.10 install setup 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHomeProdSearch kbHomeMMsearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbMMViewer200 kbMMViewer200a
	Version           : WINDOWS:3.1; :2.0,2.0a
	Issue type        : kbprb
	
	=============================================================================
	

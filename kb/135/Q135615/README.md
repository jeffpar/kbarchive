---
layout: page
title: "Q135615: PRB: Setup Fails If Too Much Copyright Information Is Entered"
permalink: /kb/135/Q135615/
---

## Q135615: PRB: Setup Fails If Too Much Copyright Information Is Entered

	Article: Q135615
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Step 4 of the Setup Wizard has an edit region to input Copyright information. If
	the information entered in this region exceeds 214 characters in length, various
	errors occur when you run Setup on disk 1.
	
	CAUSE
	=====
	
	The Copyright edit region of Step 4 of the Setup Wizard contains more than 214
	characters.
	
	RESOLUTION
	==========
	
	Keep the Copyright information to 214 or less characters in length.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Depending on the amount of characters actually entered, Setup fails in different
	ways. If the length entered is 215, Setup runs up through the Confirmation of
	Name & Organization. Once that is confirmed, Setup displays a message window
	stating, "Setup was not completed successfully" and then exits.
	
	If the length entered is between 216 and 255 characters, Setup immediately
	presents a window stating "Setup was not completed successfully" and then
	exits.
	
	If the length exceeds 255 characters, Setup starts and immediately gives the
	following two error messages and then exits:
	
	  Error One:
	
	  Window Title: Error in Table Syntax - Top Level
	  Message Text: Bad Setup Version Field.
	
	  Error Two:
	
	  Window Title: Setup Message
	  Message Text: Processing Top Level Information Field.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q133244: PRB: CD Command Results in &quot;Unrecognized command verb&quot; Error"
permalink: /kb/133/Q133244/
---

## Q133244: PRB: CD Command Results in &quot;Unrecognized command verb&quot; Error

	Article: Q133244
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the CD.. command in the Visual FoxPro Command window to change to the
	parent directory, generates this error message:
	
	  Unrecognized command verb.
	
	CAUSE
	=====
	
	The Visual FoxPro parsing algorithm looks at CD.. as one token, so it generates
	the error.
	
	RESOLUTION
	==========
	
	Use the following correct syntax when using the CD command to change to the
	parent directory:
	
	  CD ..
	
	NOTE: There must be a space between CD and the two periods. This information is
	documented in the "CD|CHDIR Command" topic of the Help menu.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin change directory MS-DOS DOS
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

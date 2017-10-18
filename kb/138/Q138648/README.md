---
layout: page
title: "Q138648: CLEAR ALL Command Releases Objects Added to _SCREEN"
permalink: kb/138/Q138648/
---

## Q138648: CLEAR ALL Command Releases Objects Added to _SCREEN

	Article: Q138648
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After adding objects to _SCREEN, you can use a CLEAR ALL command to remove the
	objects from memory. The CLEAR ALL command removes all objects, variables, and
	controls from memory regardless of whether they are scoped to a form or to the
	screen.
	
	MORE INFORMATION
	================
	
	If a form is open when you issue a CLEAR ALL command from the Command window,
	the form and all of its objects disappears. If an object is scoped to the screen
	with the _SCREEN.ADDOBJECT() command, the object will be cleared from memory,
	but the screen will still be available. You can use the _SCREEN.REMOVEOBJECT()
	command to remove objects from the screen, but if you use the CLEAR ALL command,
	the objects that were scoped to the screen will have to be recreated. These
	objects should be created in a procedure or program (.prg) file, so that they
	can be recreated after the CLEAR ALL command is issued.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

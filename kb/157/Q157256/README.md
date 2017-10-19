---
layout: page
title: "Q157256: DOCERR:  DEBUG and SET DEBUG Incorrect in Help"
permalink: /kb/157/Q157256/
---

## Q157256: DOCERR:  DEBUG and SET DEBUG Incorrect in Help

	Article: Q157256
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Incorrect Information is given about the DEBUG and SET DEBUG commands in the
	Visual FoxPro 5.0 Help file.
	
	MORE INFORMATION
	================
	
	The topics "Unsupported dBASEIV Commands, Functions, and Clauses" and "DEBUG" in
	the Visual FoxPro Help file incorrectly state the following:
	
	  In Visual FoxPro, the dBASE DEBUG command generates an error.
	
	However, the DEBUG command does not generate an error in Visual FoxPro 5.0, but
	instead invokes the Visual FoxPro Debugger. For more information, search for
	"DEBUG" in the Visual FoxPro Help file.
	
	The topic "SET DEBUG" in the Visual FoxPro Help file states the following:
	
	  Makes the Debug and Trace windows either available or unavailable from the
	  Visual FoxPro menu system
	
	In Visual FoxPro 5.0, SET DEBUG is always set to ON and cannot be changed to OFF.
	The SET DEBUG OFF command is ignored by Visual FoxPro. SET("DEBUG") always
	returns ON.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	

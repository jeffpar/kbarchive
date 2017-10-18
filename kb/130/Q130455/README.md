---
layout: page
title: "Q130455: PRB: Long Variable Names from 2.x Not Found in Visual FoxPro"
permalink: kb/130/Q130455/
---

## Q130455: PRB: Long Variable Names from 2.x Not Found in Visual FoxPro

	Article: Q130455
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A program written in version 2.x of FoxPro demonstrates unpredictable behavior
	when run in Visual FoxPro if it refers to fields or memory variables with names
	containing more than 10 characters.
	
	CAUSE
	=====
	
	This behavior occurs because of additional features that have been added to
	Visual FoxPro. The field or memory variable name may have been typed incorrectly
	on one or more lines of code.
	
	In FoxPro version 2.x, only the first 10 characters of procedure, field, and
	memory variable names were considered significant. The following lines of code
	would both update a memory variable named lmLongVari:
	
	     lmLongVariable = "ABCD"
	     lmLongVaribale = "DEFG"
	
	After running this code in version 2.x, a single memory variable (lmLongVari)
	exists, which contains a value of DEFG.
	
	However, Visual FoxPro allows names with up to 254 characters. The same code in
	Visual FoxPro would create two variables, each containing a different value.
	
	RESOLUTION
	==========
	
	Verify that all names over 10 characters long are identically named in all code
	that refers to them.
	
	MORE INFORMATION
	================
	
	The cross reference report contained in the version 2.x FoxDoc application, or
	the Visual FoxPro Documentation Wizard, can be helpful in determining each
	location where a long variable name has been used.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

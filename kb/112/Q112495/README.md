---
layout: page
title: "Q112495: PRB: Macro Substitution Doesn't Work with M Prefix"
permalink: kb/112/Q112495/
---

## Q112495: PRB: Macro Substitution Doesn't Work with M Prefix

	Article: Q112495
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Macro substitution fails on variables that use the M prefix ("m." or "m->").
	
	RESOLUTION
	==========
	
	Use the variable without the M prefix.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The M prefix is used to differentiate between memory variables and database
	fields with the same name. It is not needed for memory variables whose names do
	not match any field names in the current work area.
	
	Steps to Reproduce Problem
	--------------------------
	
	Assuming a database called CUSTOMER.DBF (you can use the one from the TUTORIAL
	subdirectory) is in the current directory, type the following in the Command
	window:
	
	     testvar = "CUSTOMER"
	     USE &m.testvar
	
	This causes the following error message:
	
	  File '&m.testvar' does not exist.
	
	Other Error Messages
	--------------------
	
	Using a variable with the M prefix in macro substitution for the WHEN clause of a
	SQL SELECT statement may cause the following error message:
	
	  Syntax Error.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin period dot errmsg err msg akz
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	

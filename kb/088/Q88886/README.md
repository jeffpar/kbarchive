---
layout: page
title: "Q88886: Using ON KEY Command in FoxBASE+"
permalink: kb/088/Q88886/
---

## Q88886: Using ON KEY Command in FoxBASE+

	Article: Q88886
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:1.21,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, versions 1.21, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Only one ON KEY command can be active at one time. It is active only during a
	READ or when a full-screen editing command is in effect.
	
	This restriction applies to all ON commands in FoxBASE+ (ON ERROR, ON ESCAPE, and
	ON KEY). Once issued, an ON command remains in effect until another ON command
	of the same type is issued or the application ends.
	
	MORE INFORMATION
	================
	
	The following program illustrates that when an application issues a second ON
	KEY command, it replaces the first ON KEY command:
	
	     CLEAR
	     mvarname = "                    "
	     ON KEY = 315 DO prg1
	     ON KEY = 316 DO prg2
	     @ 3,5 SAY "This is a test of on key"
	     @ 4,5 SAY "Please enter a string when finished"
	     @ 5,5 GET mvarname
	     @ 6,5 SAY "F1 = prg1   F2 = prg2"
	     READ
	
	     ** PROCEDURE file prg1 **
	     PROCEDURE prg1
	     @7,5 SAY "This won't display"
	     RETURN
	
	     ** PROCEDURE file prg2 **
	     PROCEDURE prg2
	     @8,5 SAY "This will display"
	     RETURN
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASESearch
	Version           : MS-DOS:1.21,2.1
	
	=============================================================================
	

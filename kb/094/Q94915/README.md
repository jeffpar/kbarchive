---
layout: page
title: "Q94915: DOCERR: LIB Command Line Documented Incorrectly"
permalink: kb/094/Q94915/
---

## Q94915: DOCERR: LIB Command Line Documented Incorrectly

	Article: Q94915
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Library Manager Utility for MS-DOS, version 3.2 
	-------------------------------------------------------------------------------
	
	Page 698 of the Microsoft C/C++ "Environment and Tools" manual for version
	7.0 includes the following statement to document the Microsoft Library
	Manager Utility (LIB):
	
	  The following example instructs LIB to combine the object file FIRST.OBJ and
	  SECOND.OBJ and to name the combined library THIRD.LIB:
	
	  LIB FIRST +SECOND, , THIRD
	
	
	This statement, which is incorrect, also appears on page 582 of the
	Environment and Tools manual of the Microsoft Macro Assembler (MASM)
	version 6.1.
	
	The command line in the example attempts to open the FIRST.LIB library. If
	FIRST.LIB exists, LIB adds the object modules in SECOND.OBJ to it and
	stores the result as THIRD.LIB. If FIRST.LIB does not exist, LIB creates
	FIRST.LIB with the object modules in SECOND.OBJ and ignores THIRD.
	
	The correct command to build a THIRD.LIB library as described in the
	documentation is as follows:
	
	  LIB THIRD +FIRST +SECOND;
	
	Additional query words: 3.20 6.10 7.00 7.00a
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan320DOS
	Version           : MS-DOS:3.2
	
	=============================================================================
	

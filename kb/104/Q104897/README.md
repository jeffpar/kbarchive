---
layout: page
title: "Q104897: BUG: Syntax Error in Makefile with Projects &gt; 511 Files"
permalink: kb/104/Q104897/
---

## Q104897: BUG: Syntax Error in Makefile with Projects &gt; 511 Files

	Article: Q104897
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Workbench cannot recognize a project makefile that contains more than
	511 files. A syntax error is reported for the internal makefile.
	
	CAUSE
	=====
	
	An internal makefile can contain no more than 511 continuation lines, and there
	is a continuation line for every file in the SBR section.
	
	RESOLUTION
	==========
	
	There are two solutions to the project makefile problem that contains more than
	511 files:
	
	- Load the makefile as an external makefile.
	
	-or-
	
	- Edit the SBR section so that it has less than 512 continuation lines. More
	  than one file can be on each line. For example, change
	
	  A511.SBR \
	  A512.SBR
	
	  to the following:
	
	  A511.SBR A512.SBR
	
	The disadvantage to the first solution is that the project cannot be edited. The
	disadvantage to the second solution is that it has to be redone each time the
	project is edited.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0 and version 1.0a.
	
	This is not a problem in FORTRAN PowerStation 32.
	
	Additional query words: 1.00 nofpsnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

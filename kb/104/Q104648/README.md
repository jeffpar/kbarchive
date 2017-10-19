---
layout: page
title: "Q104648: BUG: NMAKE /V Option Does Not Work in Versions 1.2 and Later"
permalink: /kb/104/Q104648/
---

## Q104648: BUG: NMAKE /V Option Does Not Work in Versions 1.2 and Later

	Article: Q104648
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.2
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The /V option for inheriting macro definitions in recursive calls to NMAKE in
	NMAKE version 1.2 does not work correctly. This option was removed from NMAKE
	versions 1.3 and later.
	
	RESOLUTION
	==========
	
	There are several different methods that can be used to inherit macros using
	NMAKE.
	
	- To inherit environment variables defined in a makefile, use the SET command
	  to set the variable. For example, if you wanted to use a new library path and
	  inherit that path in NEXTFILE.MAK, you could do the following:
	
	     NEWLIB=C:\MSVC\LIB;C:\MYLIBS;C:\MSVC\MFC\LIB
	
	     ALL:
	       set LIB=$(NEWLIB)
	       NMAKE /f nextfile.mak
	
	-or-
	
	- To inherit a small number of macros, define a macro on the command line for
	  the recursive call:
	
	   ALL:
	      NMAKE /f nextfile.mak "MYMACRO=something"
	
	-or-
	
	- Define the macros in the TOOLS.INI initialization file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with NMAKE version 1.2. The option
	was removed from later versions of NMAKE.
	
	Additional Reference Words: 1.20 buglist1.20
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE120DOS
	Version           : MS-DOS:1.2
	
	=============================================================================
	

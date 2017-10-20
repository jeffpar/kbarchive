---
layout: page
title: "Q100084: Using the LINK32 -LIB Command"
permalink: /kb/100/Q100084/
---

## Q100084: Using the LINK32 -LIB Command

{% raw %}

	Article: Q100084
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below presents the LINK32 librarian, its command line options, and how
	to use the utility.
	
	This information differs somewhat for the FORTRAN PowerStation 32 for Windows NT
	linker, LINK. Please see the documentation for that product for more details.
	
	MORE INFORMATION
	================
	
	LINK32.EXE performs several functions, specified by one of the following
	command-line options:
	
	  -LINK   Create an executable file (linking)
	  -LIB    Create or modify a library (librarian)
	  -DUMP   Display information about a library
	
	The LINK32 librarian is a fairly simple tool that adds, removes, and extracts
	COFF object files from libraries.
	
	The LINK32 -LIB options are as follows:
	
	   -DEBUGTYPE:{COFF|CV|BOTH}  Do not use
	  -DEF:[filename]            Create an import library
	  -EXTRACT:membername        Extract an object file from a library
	  -LIST                      List object files in a library
	  -MACHINE:i386              Required with the -DEF option,
	                                not used otherwise
	  -OUT:filename              Specifies library name
	  -REMOVE:membername         Remove object module from library
	  -SUBSYSTEM                 Do not use
	  -VERBOSE                   Do not use
	
	The following examples demonstrate using these options to perform common library
	management tasks.
	
	Example #1
	----------
	
	To build the library TEST.LIB that contains the modules A.OBJ and B.OBJ, use the
	following command line:
	
	  LINK32 -LIB -OUT:TEST.LIB A.OBJ B.OBJ
	
	Example #2
	----------
	
	To modify the existing library TEST.LIB to add the modules A.OBJ and B.OBJ, use
	the following command line:
	
	  LINK32 -LIB TEST.LIB A.OBJ B.OBJ
	
	Example #3
	----------
	
	To create a file that lists the object modules in a library, use the following
	command line:
	
	  LINK32 -LIB -LIST TEST.LIB >TEST.LST
	
	This command line generates a listing that contains the names of the object files
	in the library; the listing does not list the routines in each object file. To
	retrieve this information, use the -DUMP option.
	
	Example #4
	----------
	
	To update a library with a new version of an object module, use the following
	command lines:
	
	  LINK32 -LIB TEST.LIB -REMOVE:A.OBJ
	  LINK32 -LIB TEST.LIB A.OBJ
	
	No single command can do this. Avoid the following commands:
	
	  LINK32 -LIB TEST.LIB A.OBJ             !if A.OBJ is in TEST.LIB
	  LINK32 -LIB TEST.LIB A.OBJ -OUT:TEST.LIB
	  LINK32 -LIB TEST.LIB -REMOVE:A.OBJ A.OBJ
	
	NOTE: Modules cannot be added to a library which has had all of the modules
	removed.
	
	NOTE: The object module specified by -REMOVE:obj_name must have the same case as
	shown by:
	
	  LINK32 -LIB -LIST
	
	In other words, -REMOVE is case sensitive.
	
	Additional query words: kbinf 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}

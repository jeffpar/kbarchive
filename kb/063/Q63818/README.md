---
layout: page
title: "Q63818: Using NMAKE to Compile FORTRAN Programs in M Editor in OS/2"
permalink: /kb/063/Q63818/
---

## Q63818: Using NMAKE to Compile FORTRAN Programs in M Editor in OS/2

{% raw %}

	Article: Q63818
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To compile Microsoft FORTRAN programs using the NMAKE utility in the M Editor
	under OS/2, add the following line to the TOOLS.INI file:
	
	  " extmake: text nmake /f %s " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The NMAKE utility (also known as the Microsoft Program-Maintenance Utility)
	interprets a text file of commands, the description file, to compare dates of
	files and carry out other operations on the basis of the comparison. That is,
	NMAKE will check to see if any of the FORTRAN programs listed in the description
	file have been modified. If any have, NMAKE will issue commands to recompile and
	relink the modified programs.
	
	NMAKE is often utilized to compile and link several FORTRAN programs at once. For
	simplicity, only one FORTRAN program will be used here to demonstrate how to use
	NMAKE to compile FORTRAN programs in the M Editor.
	
	The extmake switch above indicates that the text setting, the %s symbol, should
	be used when a compilation is run. When running a compilation you pass the text
	argument to the COMPILE function and the editor executes the NMAKE utility
	according to this text argument.
	
	NMAKE uses the text argument, %s, as the description file because the /F option
	is used. The /F option specifies that the filename following it is the
	description file to use. Additional information about the /F option can be found
	on Page 287 of the "Microsoft CodeView and Utilities User's Guide."
	
	To compile a FORTRAN program, TEST.FOR, using the NMAKE utility in the M Editor
	under OS/2, do the following:
	
	1. Invoke the M Editor by typing "MEP TEST.FOR" (without the quotation marks) at
	  the OS/2 prompt.
	
	2. If desired, add the following macro and keystroke definitions to the
	  TOOLS.INI file, and then press ALT+C to generate a compile window:
	
	     CompWindow:= savecur home meta down  \   ;open compile log window
	                  up up up up arg window  \ 
	                  window arg "<compile>" setfile  \ 
	                  window restcur
	     CompWindow: alt+c       ;MACRO open compile window
	
	
	1. Run NMAKE according to the extmake switch above by pressing ALT+A, entering
	  "MAKEFILE" (without the quotation marks) or the appropriate description
	  filename, and pressing SHIFT+F3.
	
	The following is the description file MAKEFILE for the FORTRAN program TEST.FOR:
	
	  all : test
	  test.obj : test.for
	     fl /c $**
	  test : test.obj
	     link $**;
	
	The following is the FORTRAN program TEST.FOR compiled using NMAKE in the M
	Editor:
	
	        write(*,*) ' It works!'
	        end
	
	Compiling FORTRAN programs using the NMAKE utility in the M Editor in MS-DOS or
	the MS-DOS compatibility box of OS/2 is not possible because there is not enough
	memory to load all the files needed.
	
	Additional query words: kbinf 5.00 5.10 nofps
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500OS2 kbFORTRAN510OS2
	Version           : :5.0,5.1
	
	=============================================================================
	

{% endraw %}

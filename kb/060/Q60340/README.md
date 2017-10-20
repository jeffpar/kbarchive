---
layout: page
title: "Q60340: Example Demonstrates Using Paths in NMAKE"
permalink: /kb/060/Q60340/
---

## Q60340: Example Demonstrates Using Paths in NMAKE

{% raw %}

	Article: Q60340
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below includes an NMAKE makefile that uses paths in macros, inference
	rules, and target dependencies (descriptor blocks).
	
	MORE INFORMATION
	================
	
	The makefile compares the modification dates of the header (.H) and source code
	(.C) files with the object (.OBJ) files and the dates of the object files with
	the executable (.EXE) file. If any of the dependent files changed more recently
	than the target file changed, NMAKE executes the specified commands. The dates
	of the header and source code files in the WORK directory are compared to the
	dates of the object files in the LIB directory.
	
	If any of the source files changed since its associated object file was created,
	NMAKE calls the compiler to create the object file and copies it from the
	current directory to the LIB directory. Then NMAKE compares the dates of the
	object files in the LIB directory with the date of the executable file in the
	current directory. If any of the object files changed since the executable file
	was created, NMAKE calls LINK to rebuild the executable file.
	
	The following makefile example uses several predefined macro modifiers. For more
	information on the macro modifiers, please refer to the macro section of the
	NMAKE documentation provided with your compiler.
	
	If none of the object files exist, NMAKE executes the following commands when it
	runs this makefile:
	
	   cl /c c:\work\test1.c
	     copy test1.obj c:\lib\test1.obj
	        1 file(s) copied
	     erase test1.obj
	
	     cl /c c:\work\test2.c
	     copy test2.obj c:\lib\test2.obj
	        1 file(s) copied
	     erase test2.obj
	
	     cl /c c:\work\test3.c
	     copy test3.obj c:\lib\test3.obj
	        1 file(s) copied
	     erase test3.obj
	
	     link c:\lib\test1 c:\lib\test2 c:\lib\test3;
	
	Sample Makefile
	---------------
	
	  # macros
	
	  objdir = c:\lib
	  wrkdir = c:\work
	  list   = $(objdir)\test1.obj $(objdir)\test2.obj $(objdir)\test3.obj
	
	  # inference rules
	
	  # compile
	  # $< represents the dependent file.
	  # $(*F) represents the targets base name.
	  # $(*R) represents the targets base name and directory.
	
	  {$(wrkdir)}.c{$(objdir)}.obj:
	     cl /c $<
	     copy $(*F).obj $(*R).obj
	     erase $(*F).obj
	
	  # link
	  # $(**R) represents all the dependents including directories.
	
	  {$(objdir)}.obj{}.exe:
	     link $(**R);
	
	  # target-dependencies
	  # $$(@B) represents the base name of the current target.
	
	  test1.exe : $(list)
	
	  $(objdir)\*.obj : $(wrkdir)\$$(@B).c $(wrkdir)\test1.h $(wrkdir)\test2.h
	
	Additional query words: kbinf 1.10 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	

{% endraw %}

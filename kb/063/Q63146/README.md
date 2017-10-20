---
layout: page
title: "Q63146: NMAKE Always Evaluates Expressions in Square Brackets &quot;&#91;&#93;&quot;"
permalink: /kb/063/Q63146/
---

## Q63146: NMAKE Always Evaluates Expressions in Square Brackets &quot;&#91;&#93;&quot;

{% raw %}

	Article: Q63146
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In NMAKE, if you use the !IF directive with an expression in square brackets
	"[]", NMAKE evaluates the expression when it first reads the makefile, before it
	evaluates any dependency blocks or executes any commands.
	
	MORE INFORMATION
	================
	
	NMAKE uses square brackets to run an application in an !IF expression.
	
	NMAKE is designed to run all specified programs when it first starts, it does not
	matter whether they are contained in a dependency block. NMAKE uses the values
	returned by the programs to evaluate the !IF expression.
	
	The following makefile displays this behavior:
	
	  test.exe: test.c
	
	  !IF ( [check /f] < 3 )
	  cl test.c
	  !ENDIF
	
	In this example, NMAKE runs the CHECK program each time it evaluates the
	makefile. It does not matter that TEST.EXE is up to date with TEST.C or not.
	
	Additional query words: kbinf 1.10 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	

{% endraw %}

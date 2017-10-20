---
layout: page
title: "Q76298: PATH Command Has No Effect in NMAKE"
permalink: /kb/076/Q76298/
---

## Q76298: PATH Command Has No Effect in NMAKE

{% raw %}

	Article: Q76298
	Product(s): Microsoft Programming Utilities
	Version(s): 1.01,1.11,1.12,1.13,1.2,1.21,1.3,1.4,1.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In NMAKE, a command line that changes the operating system PATH command does not
	affect the other commands that NMAKE processes. This is part of the design
	behavior of NMAKE. To change the PATH environment variable, use the SET command.
	
	MORE INFORMATION
	================
	
	The NMAKE documentation provided with Microsoft C version 6.0 and Microsoft
	Macro Assembler (MASM) version 6.0 state that NMAKE supports any command that
	you can run at the MS-DOS command prompt. This statement is not entirely true.
	NMAKE does not emulate the PATH command and ignores it.
	
	There are two methods to modify the PATH environment variable in NMAKE. You can
	create a PATH macro to contain the path to assign to the PATH system variable.
	The macro name "PATH" must be in uppercase letters. Alternately, you can use the
	SET command. For example, you could place the following line into a description
	block: "SET PATH=c:\;c:\dos" (without the quotation marks).
	
	The following sample makefiles demonstrate these concepts. In the first makefile,
	the PATH command has no effect. The second and third makefiles demonstrate two
	methods to modify the PATH, effectively emulating the PATH command entered at
	the MS-DOS or OS/2 prompt.
	
	Sample Makefile #1
	------------------
	
	  # The PATH command has no effect on the contents of the PATH
	  # environment variable.
	  all:
	     path c:\c700\bin;
	     cl /c sample.c
	
	Sample Makefile #2
	------------------
	
	  # The SET command in this makefile temporarily modifies the PATH
	  # system variable for commands that are processed for the duration
	  # of the makefile.
	
	  all:
	  set path=c:\c700\bin;
	     cl /c sample.c
	
	Sample Makefile #3
	------------------
	
	  # The macro called PATH modifies the PATH system variable for the
	  # duration of the makefile.
	
	  PATH=c:\c700\bin;
	  all:
	  cl /c sample.c
	
	Additional query words: kbinf 1.10 1.20 1.21 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : :1.01,1.11,1.12,1.13,1.2,1.21,1.3,1.4,1.5
	
	=============================================================================
	

{% endraw %}

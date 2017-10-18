---
layout: page
title: "Q59409: Trouble with Filenames With a Dollar Sign (&#36;) in Inline Files"
permalink: kb/059/Q59409/
---

## Q59409: Trouble with Filenames With a Dollar Sign (&#36;) in Inline Files

	Article: Q59409
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use a filename that contains a dollar sign ($) in a NMAKE description
	file, you can use the escape character (^) to tell NMAKE that the dollar sign is
	part of your filename, not a macro character. However, to use the dollar sign in
	an inline response file or as a literal character in a command, use two dollar
	signs ($$) instead.
	
	MORE INFORMATION
	================
	
	Consider the following NMAKE description file:
	
	 all:test^$.exe
	
	  test^$.obj: test^$.c
	     cl /c test^$.c
	
	  test^$.exe: test^$.obj
	     link @<<
	           test^$.obj,
	           test^$.exe,
	           NUL,;
	     <<
	
	In this file, the escape character (^) is used to tell NMAKE that the $ is part
	of the filename TEST$.* and does not denote a macro. When TEST$.C is compiled,
	everything works correctly. However, the inline response file for LINK does not
	work as expected. NMAKE does not interpret the ^ character, but instead passes
	it on to LINK.EXE. LINK then tries to link TEST^$.OBJ instead of TEST$.OBJ and
	fails. If you eliminate the ^ to pass TEST$.OBJ to link, NMAKE fails. NMAKE
	version 1.4 generates the following error:
	
	  U1002: syntax error: invalid macro invocation '$'
	
	The following presents two methods to work around this situation:
	
	1. Use an external response file. Change the LINK command in the make file to
	  something similar to "LINK @FILE.RES" (without the quotation marks). You can
	  put the filename TEST$.OBJ directly in the response file.
	
	-or-
	
	2. Use $$ as the escape sequence in the inline response file and in other
	  command blocks instead of ^$. For example, change the example above as
	  follows:
	
	  
	  link @<<
	         test$$.obj,
	         test$$.exe,
	         NUL,;
	     <<
	
	  NMAKE correctly passes TEST$.OBJ to LINK.
	
	Additional query words: kbinf 1.20 1.30 1.40
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	

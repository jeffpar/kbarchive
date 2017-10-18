---
layout: page
title: "Q64032: DOCERR: NMAKE Predefined Macro &#36;(@D) Has Same Value As &#36;@"
permalink: kb/064/Q64032/
---

## Q64032: DOCERR: NMAKE Predefined Macro &#36;(@D) Has Same Value As &#36;@

	Article: Q64032
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.11; OS/2:1.11
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, version 1.11 
	- Microsoft NMAKE Utility for OS/2, version 1.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With NMAKE version 1.11 the predefined macros $@ and $(@D) both expand to the
	same value. Page 114 of the "Microsoft C Advanced Programming Techniques" manual
	that ships with C versions 6.0 and 6.0a shows an example value of the predefined
	NMAKE macro $@ as:
	
	  C:\SOURCE\PROG\SORT.OBJ
	
	The macro $(@D) is listed as having a sample value of:
	
	  C:\SOURCE\PROG
	
	With NMAKE version 1.11, both macros give the value of the full path, filename,
	and extension, or:
	
	  C:\SOURCE\PROG\SORT.OBJ
	
	RESOLUTION
	==========
	
	This problem has been fixed in NMAKE versions 1.12 and later.
	
	MORE INFORMATION
	================
	
	Running NMAKE version 1.11 with the following makefile gives the result:
	
	  echo c:\config.sys c:\config.sys
	
	The result should be:
	
	  echo c:\config c:\config
	
	Sample Makefile
	---------------
	
	c:\config.sys :
	
	  echo $(@D)
	
	Additional query words: 1.11
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS kbNMAKE111OS2
	Version           : MS-DOS:1.11; OS/2:1.11
	
	=============================================================================
	

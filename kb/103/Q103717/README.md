---
layout: page
title: "Q103717: INFO: Differences Between LINK and LINK32"
permalink: /kb/103/Q103717/
---

## Q103717: INFO: Differences Between LINK and LINK32

	Article: Q103717
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for Windows NT, versions 1.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 32-bit LINK.EXE provided with Visual C++ for Windows NT is similar to the
	LINK32.EXE utility provided with the Microsoft Win32 Software Development Kit
	for Windows NT. Although LINK and LINK32 have many common options, there are a
	few differences to be aware of when converting a build from LINK32 to LINK.
	
	MORE INFORMATION
	================
	
	The following options are unique to LINK and are invalid for LINK32:
	
	  /COMMENT
	  /DEF
	  /DEFAULTLIB
	  /EXPORT
	  /IMPLIB
	  /NODEFAULTLIB
	  /NOLOGO
	  /OPT
	  /WARN
	
	The following LINK32 options are invalid for LINK:
	
	  /GPSIZE
	  /HEAP
	  /IGNORE
	  /ROM
	  /STRICT
	
	LINK uses the environment variables described in "LINK Environment Variables" on
	page 80 of the "Build Tools User's Guide." LINK32 uses only the LIB environment
	variables.
	
	The map files produced by each linker have different formats.
	
	For further information on differences between the Visual C++ for NT linker and
	other linkers, refer to the section on a "A Comparison of LINK to Other Linkers"
	on page 75-77 of the "Build Tools Users Guide."
	
	Additional query words: mapfile mapfiles
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbLINKSearch kbLINK100NT kbLINK250NT
	Version           : :1.0,2.5
	Issue type        : kbinfo
	
	=============================================================================
	

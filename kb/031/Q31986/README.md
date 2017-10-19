---
layout: page
title: "Q31986: Maximum Number of Libraries LINK Supports"
permalink: /kb/031/Q31986/
---

## Q31986: Maximum Number of Libraries LINK Supports

	Article: Q31986
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS 
	-------------------------------------------------------------------------------
	
	The Microsoft LINK utility can process no more than 32 libraries
	simultaneously. In other words, the linker library field can include up to
	32 libraries.
	
	If an application requires more than 32 libraries, perform one of the
	following two steps:
	
	- Use the LIB utility to combine libraries
	
	- Extract all of the necessary object modules from the libraries using the LIB
	  utility and link with them.
	
	Additional query words: kbinf 5.01.20 5.01.21 5.03 5.05 5.10 5.13 5.15 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch
	Version           : :
	
	=============================================================================
	

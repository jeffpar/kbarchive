---
layout: page
title: "Q31998: How the Linker Searches the Libraries"
permalink: /kb/031/Q31998/
---

## Q31998: How the Linker Searches the Libraries

	Article: Q31998
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS 
	- Microsoft LINK for Windows NT 
	-------------------------------------------------------------------------------
	
	The linker searches for unresolved externals in the following order:
	
	
	1. Find all modules in the library that define current unresolved externals.
	
	2. Process those modules (you may pickup more unresolved externals). The linker
	  keeps making passes through that library until no new unresolved externals
	  are picked up.
	
	3. It then advances to the next library.
	
	In a similar manner, the linker makes a pass through the entire set of
	libraries. After the last library is searched, if new unresolved
	externals have been picked up, it returns to the first library and
	makes another pass.
	
	Problems can be avoided if you do not use bidirectional cross-library
	references (that is, avoid library A calling something in library B
	that calls something else in library A). Try to make each library as
	self-contained as possible.
	
	Additional query words: kbinf 5.50 5.60 1.00 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbZNotKeyword3 kbLINKSearch
	Version           : :
	
	=============================================================================
	

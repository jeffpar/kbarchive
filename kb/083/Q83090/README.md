---
layout: page
title: "Q83090: BUG: LIB Corrupts Import Library Extended Dictionary"
permalink: kb/083/Q83090/
---

## Q83090: BUG: LIB Corrupts Import Library Extended Dictionary

	Article: Q83090
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.17,3.18,3.2,3.31,3.4; OS/2:3.17,3.18
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LIB for MS-DOS, versions 3.17, 3.18, 3.2, 3.31, 3.4 
	- Microsoft LIB for OS/2, versions 3.17, 3.18 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Library Manager (LIB) can be used to merge import libraries,
	created with IMPLIB, into larger import libraries. This may be useful when
	IMPLIB runs into capacity limits while trying to create one large import
	library. However, if you use LIB to merge multiple import libraries and use
	default options, the resulting import library will have an invalid extended
	dictionary.
	
	RESOLUTION
	==========
	
	Import libraries should not have extended dictionaries. You can use the /NOE
	switch to avoid the generation of an invalid extended dictionary when merging
	import libraries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LIB versions 3.17, 3.18, 3.2,
	and 3.31 for MS-DOS and versions 3.17 and 3.18 for OS/2. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	LINK uses the extended dictionary to speed up library searching. For example, if
	a function in module A of a library calls functions in module B and module C of
	the same library, the extended dictionary informs LINK, so that if your program
	requires module A from the library, LINK pulls in modules A, B, and C all at
	once. This way, LINK does not have to search the library again to resolve
	references from module A to functions in modules B and C.
	
	In import libraries, modules do not contain any code; they only contain
	references to DLLs. Thus, import library modules do not contain function calls
	or external references to other modules. Because there are no cross dependencies
	between modules, the extended dictionary for an import library need not contain
	anything.
	
	Additional query words: 3.17 3.18 3.20 3.31 3.40
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan318DOS kbLibMan317DOS kbLibMan320DOS kbLibMan331DOS kbLibMan340DOS kbLibMan317OS2
	Version           : MS-DOS:3.17,3.18,3.2,3.31,3.4; OS/2:3.17,3.18
	
	=============================================================================
	

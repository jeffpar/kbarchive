---
layout: page
title: "Q44896: Combined Library Much Larger than Components"
permalink: /kb/044/Q44896/
---

## Q44896: Combined Library Much Larger than Components

	Article: Q44896
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.1,3.11,3.17,3.18,3.2,3.20.010,3.31,3.4; OS/2:3.1,3.11,3.17,3.2
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LIB for MS-DOS, versions 3.1, 3.11, 3.17, 3.18, 3.2, 3.20.010, 3.31, 3.4 
	- Microsoft LIB for OS/2, versions 3.1, 3.11, 3.17, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use LIB.EXE to combine your libraries with a third-party library, the
	resultant library may be much larger than expected. For example:
	
	  LIB1.LIB 5K bytes
	  LIB2.LIB 250K bytes
	
	  LIB1.LIB + LIB2.LIB = 305K bytes
	
	MORE INFORMATION
	================
	
	This size difference may be the result of different page sizes among the
	libraries being combined. The page size of a library affects the alignment of
	modules stored in the library. When libraries with different page sizes are
	combined, the resultant library uses the largest page size from the constituent
	libraries. Thus, the actual increase in file size represents wasted space
	between modules in the library. To reduce the amount of wasted space, you should
	specify a smaller page size for the new library. This may be accomplished by
	using the library manager as follows:
	
	  LIB BIG.LIB /PAGESIZE:16;
	
	This sets the page size for the library BIG.LIB to 16 bytes.
	
	As indicated in the library manager documentation, the page size must be an
	integer power of 2 from 16 to 32,768 bytes.
	
	Additional query words: kbinf 3.20
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan318DOS kbLibMan310DOS kbLibMan311DOS kbLibMan317DOS kbLibMan320DOS kbLibMan320010DOS kbLibMan331DOS kbLibMan340DOS kbLibMan311OS2 kbLibMan317OS2 kbLibMan320OS2
	Version           : MS-DOS:3.1,3.11,3.17,3.18,3.2,3.20.010,3.31,3.4; OS/2:3.1,3.11,3.17,3.2
	
	=============================================================================
	

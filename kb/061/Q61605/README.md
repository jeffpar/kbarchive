---
layout: page
title: "Q61605: DOCERR: NODATA and pwords Parameters Switched in EXPORT Docs"
permalink: /kb/061/Q61605/
---

## Q61605: DOCERR: NODATA and pwords Parameters Switched in EXPORT Docs

{% raw %}

	Article: Q61605
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.01.21,5.02,5.03,5.05,5.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.01.21, 5.02, 5.03, 5.05, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The EXPORT statement used in module definition (.DEF) files is incorrectly
	documented in several places with the last two parameters reversed. The "pwords"
	parameter should be the last parameter, but it is listed second from the end.
	The "NODATA" parameter is listed last, but should be second from the end. The
	correct EXPORT statement syntax is as follows:
	
	     entryname [=internalname] [@ord[RESIDENTNAME]] [NODATA] [pwords]
	
	Note that the "pwords" parameter is listed as "iopl-parmwords" in some of the
	documentation.
	
	MORE INFORMATION
	================
	
	The documentation with the incorrect EXPORT statement syntax with reversed
	parameters is as follows:
	
	- The C versions 6.0 and 6.0a online help for LINK under the EXPORT statement
	  syntax
	
	- On page 334 of "The Microsoft CodeView and Utilities User's Guide" for
	  version 2.3 in Section 19.9, "The EXPORTS Statement" (shipped with FORTRAN
	  5.0 and BASIC PDS 7.0)
	
	- On page Update-52 of "The Microsoft CodeView and Utilities Update" for
	  version 2.2 in Section 7.8, "The EXPORTS Statement" (shipped with C 5.1, MASM
	  5.1, and Pascal 4.0)
	
	LINK version 5.13 (shipped with MASM 6.0) was corrected.
	
	Additional query words: 5.01.21 5.03 5.05 5.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50121DOS kbLINK503DOS kbLINK510DOS kbLINK505DOS
	Version           : MS-DOS:5.01.21,5.02,5.03,5.05,5.1
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q35044: Microsoft LINK Return Codes"
permalink: /kb/035/Q35044/
---

## Q35044: Microsoft LINK Return Codes

{% raw %}

	Article: Q35044
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 5.01.20, 5.01.21, 5.03, 5.05, 5.1, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	Microsoft LINK can return some values that are not listed in the
	documentation. The table below lists the codes returned by the LINK
	utility:
	
	
	Code  Meaning
	-------------
	
	  0 No errors or unresolved reference were encountered.
	
	  1 An error occurred that was not covered by the other codes.
	
	  2 Program error. Commands or files given as input to the linker produced an
	  error.
	
	  4 System error. The linker:
	
	  -Ran out of space on output files.mBR/> -Was unable to reopen the temporary
	  file.
	  -Experienced an internal error.
	  -Was interrupted by the user.
	
	  16 A data record was too large to process.
	
	  32 No object files were specified in the command line or response file.
	
	  33 The map file could not be created.
	
	  66 A COMMON area was declared that is larger than 65535.
	
	  96 Too many libraries were specified.
	
	  144 An invalid object module was detected.
	
	  145 Too many TYPEDEFs were found in the specified object modules.
	
	  146 Too many group, segment, or class names were found in one objectmodule.
	
	  147 Too many segments were found in all the object modules combined, or too
	  many segments were found in one object module.
	
	  148 Too many overlays were specified.
	
	  149 The size of a segment exceeded 65535.
	
	  150 Too many groups or GRPDEFs were found in one object module.
	
	  151 Too many external symbols were found in one object module.
	
	  177 The size of a group exceeded 65535.
	
	Additional query words: kbinf 5.01.20 5.01.21 5.03 5.05 5.10 5.13 5.15 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK50120DOS kbLINK50121DOS kbLINK503DOS kbLINK510DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK505DOS
	Version           : MS-DOS:3.x,5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6
	
	=============================================================================
	

{% endraw %}

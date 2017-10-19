---
layout: page
title: "Q67085: DOCERR: NOF Is Default for LINK"
permalink: /kb/067/Q67085/
---

## Q67085: DOCERR: NOF Is Default for LINK

	Article: Q67085
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.1; OS/2:5.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, version 5.1 
	- Microsoft LINK for OS/2, version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On pages 30 and 31 of the "Microsoft C Reference" manual shipped with C versions
	6.00 and 6.00a, there are contradictory references to the far-call translation
	options available for LINK. On page 30 under the /F[ARCALLTRANSLATION] option,
	far-call translations are listed as being "turned on by default." On the other
	hand, on page 31 under the /NOF[ARCALLTRANSLATION] option, far-calls are listed
	as being "off by default."
	
	The statement on page 30 is the one that is incorrect because the correct default
	for far-call translations is "off." Far calls are done only when /F is
	explicitly specified to LINK.
	
	Note that when the CL command is used to invoke LINK, CL itself is responsible
	for passing the /F option to the linker.
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK510DOS kbLINK510OS2
	Version           : MS-DOS:5.1; OS/2:5.1
	
	=============================================================================
	

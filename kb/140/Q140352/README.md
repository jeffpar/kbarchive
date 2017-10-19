---
layout: page
title: "Q140352: BUG: RC1120: RC Out of Memory When Compiling for Macintosh"
permalink: /kb/140/Q140352/
---

## Q140352: BUG: RC1120: RC Out of Memory When Compiling for Macintosh

	Article: Q140352
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbHWMAC kbVCkbbuglist
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a resource script (.rc file), the resource compiler gives the
	following error message:
	
	  RC : fatal error RC1120 : out of memory, needed xxxx bytes
	
	This error happens only when compiling for a Macintosh or a Power Macintosh
	target. Also, the error occurs on large .rc files only.
	
	RESOLUTION
	==========
	
	Break the large .rc file into multiple smaller .rc files. Breaking an .rc file
	into two .rc files can be done conveniently by using Developer Studio's Resource
	Editor. Because the Resource Editor supports drag and drop between two .rc
	files, move the resources from one .rc file to another.
	
	Developer Studio's build system does not support including more than one .rc
	files. Include only one .rc file in the project. Instead of including the second
	.rc file, compile it from command prompt and include the resulting .rsc file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 mac pmac rc wings ppc
	
	======================================================================
	Keywords          : kbHWMAC kbVC kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac
	Version           : winnt:
	
	=============================================================================
	

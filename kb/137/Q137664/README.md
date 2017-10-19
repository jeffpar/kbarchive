---
layout: page
title: "Q137664: BUG: Number of Lines on First Page of Listing File Incorrect"
permalink: /kb/137/Q137664/
---

## Q137664: BUG: Number of Lines on First Page of Listing File Incorrect

	Article: Q137664
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0x,6.11x,6.1x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0x, 6.1x, 6.11x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the PAGE directive to specify the number of lines per page of the
	listing file, the first listing page contains more lines than specified by the
	PAGE directive.
	
	CAUSE
	=====
	
	The problem apparently occurs because the internal counter used to track the
	number of lines per page does not include the four-line header on the first page
	or any comments that start on the first line of the source file. However, it
	does count the header on subsequent pages. As a result, all pages have the
	correct number of lines except for the first page, which contains additional
	lines.
	
	
	RESOLUTION
	==========
	
	If reducing the number of lines per page to account for the first page is not an
	option, the PAGE directive used without an argument can be placed in the source
	file at or near the correct position. This will force a page break on the first
	page. Some experimentation will be necessary, and the position of the forced
	page break will have to be adjusted if the source above the forced page break
	changes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.11c 6.11d 6.00 6.00a 6.00b 6.10 6.10a 6.11 6.11a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper
	Version           : :6.0x,6.11x,6.1x
	
	=============================================================================
	

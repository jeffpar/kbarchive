---
layout: page
title: "Q68388: &#36;&#36;(@F) Macro Doesn't Work with NMAKE Version 1.01"
permalink: /kb/068/Q68388/
---

## Q68388: &#36;&#36;(@F) Macro Doesn't Work with NMAKE Version 1.01

{% raw %}

	Article: Q68388
	Product(s): See article
	Version(s): 1.01   | 1.01
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist1.01 fixlist1.11 | mspl13_basic
	Last Modified: 24-JAN-1991
	
	The $$(@F) macro illustrated on page 297 of the "Microsoft FORTRAN
	CodeView and Utilities User's Guide" for version 5.00 will not
	function correctly in NMAKE version 1.01. This has been corrected in
	NMAKE version 1.11, which shipped with Microsoft C version 6.00.
	
	The following is the example from page 297:
	
	DIR=c:\include
	$(DIR)\global.h $(DIR)\types.h $(DIR)\macros.h: $$(@F)
	     !COPY $? $@
	
	With NMAKE version 1.01, this will only work for the first file in the
	list. Subsequent files are not processed. NMAKE 1.11 correctly copies
	all three files to the c:\include directory.

{% endraw %}

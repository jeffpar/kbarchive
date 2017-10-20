---
layout: page
title: "Q61192: C 6.00 README: The offsetof Macro"
permalink: /kb/061/Q61192/
---

## Q61192: C 6.00 README: The offsetof Macro

{% raw %}

	Article: Q61192
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 15-AUG-1990
	
	The following information is taken from the C Version 6.00 README.DOC
	file.
	
	The offsetof Macro
	------------------
	
	The offsetof macro (defined in STDDEF.H) takes a struct type name and
	member name, and returns a type size_t value giving the offset in
	bytes of the member from the beginning of the struct.
	
	The expression
	
	   offsetof( type, member_name )
	
	yields the byte offset of the member from the beginning of the struct.

{% endraw %}

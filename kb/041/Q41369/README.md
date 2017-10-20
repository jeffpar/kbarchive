---
layout: page
title: "Q41369: Run-Time Library Reference vfprintf Documentation Error"
permalink: /kb/041/Q41369/
---

## Q41369: Run-Time Library Reference vfprintf Documentation Error

{% raw %}

	Article: Q41369
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr s_quickc | mspl13_c
	Last Modified: 16-MAY-1989
	
	Page 636 of the "Microsoft C 5.10 Optimizing Compiler Run-Time Library
	Reference" and the "Microsoft QuickC Run-Time Library Reference"
	contains an error. In the example listed, the line
	
	   error("Error: line %d, file  filename);
	
	should read
	
	   error("Error: line %d, file %s\n", line, filename);

{% endraw %}

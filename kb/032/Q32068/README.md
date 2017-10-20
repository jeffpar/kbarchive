---
layout: page
title: "Q32068: Compiler C2061 Syntax Error: Identifier 'dev_t' in stat.h"
permalink: /kb/032/Q32068/
---

## Q32068: Compiler C2061 Syntax Error: Identifier 'dev_t' in stat.h

{% raw %}

	Article: Q32068
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 15-JAN-1990
	
	When compiling a file that includes stat.h or stat.h followed by an
	include of types.h, the following error is generated:
	
	   C2061 syntax error: identifier 'dev_t'
	
	The error occurs because dev_t is defined in types.h and is not
	defined in stat.h.
	
	When using the include file stat.h, you must also include the file
	types.h. Specifically, the file types.h must be included before the
	file stat.h. For example:
	
	#include <sys\types.h>
	#include <sys\stat.h>
	
	The order in which these files are included must occur as shown to
	eliminate the compiler error message.

{% endraw %}

---
layout: page
title: "Q63722: &quot;C For Yourself&quot; Documentation Error"
permalink: /kb/063/Q63722/
---

## Q63722: &quot;C For Yourself&quot; Documentation Error

{% raw %}

	Article: Q63722
	Product(s): See article
	Version(s): 2.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 15-AUG-1990
	
	On Page 246 of the "C For Yourself" manual supplied with QuickC
	version 2.50 and Quick Assembler version 2.51, there is a macro under
	the heading "EGA Color Mixing."
	
	The macro is incorrectly defined as follows:
	
	   #define EGARGB( r, g, b ) (0x3F3F3FL & ((long)(b) << 20 | (g) << 12 \
	   | (r << 4)))
	
	This macro should read as follows:
	
	   #define EGARGB( r, g, b ) (0x303030L & ((long)(b) << 20 | (g) << 12 \
	   | (r << 4)))
	
	Note that the backslashes can be omitted if you put the #define all on
	one line.

{% endraw %}

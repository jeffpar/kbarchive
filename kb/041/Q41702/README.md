---
layout: page
title: "Q41702: #define Source-Code Line Error in Manual"
permalink: /kb/041/Q41702/
---

## Q41702: #define Source-Code Line Error in Manual

{% raw %}

	Article: Q41702
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 28-FEB-1989
	
	The following documentation error occurs on Page 173 of the "Microsoft
	QuickC 2.00 Graphics Library Reference" manual. The source-code line
	reads as follows:
	
	   #define RGB(r,g,b) (((long) ((b) < 8 | (g)) < 8) | (r))
	
	The line should read as follows:
	
	   #define RGB(r,g,b) (((long) ((b) << 8 | (g)) << 8) | (r))
	
	The bit-shift operator should replace the logical less than
	sign.

{% endraw %}

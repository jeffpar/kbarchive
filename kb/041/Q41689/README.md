---
layout: page
title: "Q41689: Documentation on Global Variable _osversion Is Incomplete"
permalink: /kb/041/Q41689/
---

## Q41689: Documentation on Global Variable _osversion Is Incomplete

{% raw %}

	Article: Q41689
	Product(s): See article
	Version(s): 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 16-MAY-1989
	
	Page 36 of the "Microsoft C 5.10 Optimizing Compiler Run-Time Library
	Reference" states the global variable _osversion "provides the
	complete version number" of DOS the program is running under. This
	information is correct, but the format of _osversion is not mentioned.
	
	The high-order byte of _osversion is the "minor" version number, or
	_osminor. The low-order byte is the "major" version number, or
	_osmajor.
	
	If you were to write out these values in hex on a system running DOS
	Version 3.30 your output would be as follows:
	
	   _osversion = 1e03
	   _osminor   = 1e    (30 in decimal)
	   _osmajor   = 03
	
	See the C run-time library reference guide, Page 36 for more
	information.

{% endraw %}

---
layout: page
title: "Q63056: Fatal Error C1043 When Compiling with C1L.EXE"
permalink: /kb/063/Q63056/
---

## Q63056: Fatal Error C1043 When Compiling with C1L.EXE

{% raw %}

	Article: Q63056
	Product(s): See article
	Version(s): 6.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist6.00 | mspl13_c
	Last Modified: 25-JUL-1990
	
	The following compiler command line under Microsoft C version 6.00
	will cause a fatal error C1043:
	
	   cl /B1 C1L /Zi /Fs hello.c
	
	The following error message is produced when any program is compiled
	under DOS with the above command line with no further explanation of
	the error message:
	
	   hello.c
	   fatal error C1043:
	
	Removal of any of the above command-line switches will eliminate the
	error message, which does not occur under OS/2.
	
	Microsoft has confirmed this to be a problem with C version 6.00. We
	are researching this problem and will post new information here as it
	becomes available.

{% endraw %}

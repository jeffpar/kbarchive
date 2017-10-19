---
layout: page
title: "Q57233: C 5.1 Run-Time Reference Example for atan2() Is Missing &quot;)&quot;"
permalink: /kb/057/Q57233/
---

## Q57233: C 5.1 Run-Time Reference Example for atan2() Is Missing &quot;)&quot;

	Article: Q57233
	Product(s): See article
	Version(s): 5.10    | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 15-JAN-1990
	
	On Page 123 in the "Microsoft C 5.1 Optimizing Compiler Run-Time
	Library Reference," there is a right parenthesis missing in the last
	line of the example program for the atan() and atan2() functions. The
	line should read as follows:
	
	   printf("%.7f\n",atan2(-1.0,1.0));

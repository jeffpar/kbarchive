---
layout: page
title: "Q39974: Error C2177: Constant Too Big"
permalink: /kb/039/Q39974/
---

## Q39974: Error C2177: Constant Too Big

	Article: Q39974
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 9-JAN-1989
	
	The code below produces compiler error "C2177 : constant too big,"
	even though variable p is an unsigned long. The compiler does not
	generate this error if the number is 2,147,483,647 (maximum signed
	long possible) or less. Casting p to an unsigned long or putting L
	(for long) on the end of the number had no effect.
	
	This information also applies to QuickC.
	
	The following example demonstrates the error:
	
	#include <stdio.h>
	main()
	{
	  unsigned long p;
	  p = 4294967295;      /* maximum unsigned long */
	  printf("%lu is the maximum unsigned long.",p);
	}
	
	According to the include file limits.h, to declare something as
	unsigned long, one must use the hexadecimal form if the number will be
	greater than 2,147,483,647. The code should be changed to the following:
	
	#include <stdio.h>
	main()
	{
	  unsigned long p;
	  p = 0xffffffff;
	  printf("%lu is the maximum unsigned long.",p);
	}
	
	The code will produce the following output:
	
	   4294967295 is the maximum unsigned long.

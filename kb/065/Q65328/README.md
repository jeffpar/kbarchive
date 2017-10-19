---
layout: page
title: "Q65328: C1001: Internal Compiler Error: '@(#)regMD.c:1.100', Line 3837"
permalink: /kb/065/Q65328/
---

## Q65328: C1001: Internal Compiler Error: '@(#)regMD.c:1.100', Line 3837

	Article: Q65328
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist6.00 | mspl13_c
	Last Modified: 31-AUG-1990
	
	The code below generates the following error when compiled with any
	optimization in any memory model:
	
	   fatal error C1001: Internal Compiler Error
	             (compiler file '@(#)regMD.c:1.100', line 3837)
	
	The only workarounds in this case are as follows:
	
	1. Do not use a static array for an index.
	
	2. Do not use register variables for indexing.
	
	Sample Code
	-----------
	
	static int keyList[10];
	
	struct
	{
	  int fdkey[10];
	} fsys[30];
	
	int bar(int i)
	{
	  return;
	}
	
	void foo(int fd)
	{
	  register j,k;
	  int kk;
	
	  for (k=0;k<j;k++)
	  {
	    bar(fsys[fd].fdkey[keyList[k]]);
	  }
	}
	
	Microsoft has confirmed this to be a problem with C version 6.00. We
	are researching this problem and will post new information here as it
	becomes available.

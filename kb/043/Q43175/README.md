---
layout: page
title: "Q43175: Bad Code Produced for specific source when optimizations used"
permalink: /kb/043/Q43175/
---

## Q43175: Bad Code Produced for specific source when optimizations used

{% raw %}

	Article: Q43175
	Product(s): See article
	Version(s): 1.00 1.01 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist1.00 buglist1.01 buglist2.00 | mspl13_c
	Last Modified: 18-MAY-1989
	
	When compiling the source code below, the QuickC and QCL compilers
	will produce incorrect code if any optimizations other than loop
	optimization are enabled. If optimizations are disabled or only loop
	optimization is used, the compilers will generate correct code.
	
	Microsoft is researching this problem and will post new information as
	it becomes available.
	
	This program will demonstrate the problem when compiled with
	optimizations enabled (/O):
	
	#include <stdio.h>
	
	void main( void )
	{
	    int a, b, c;
	
	    a = 0;
	    b = 2 - ( 63 * a );
	    c = ( b % 31 );       /* c should be 2
	                             (the remainder of 2/31) */
	
	    if( b != c )
	    {
	         printf( "FAILED\n" );
	         exit( 1 );
	    }
	    else
	    {
	         printf( "PASSED\n" );
	         exit( 0 );
	    }
	}
	
	                  Laguna Beach, CA 92651

{% endraw %}

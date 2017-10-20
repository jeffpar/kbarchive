---
layout: page
title: "Q46383: Spawned Processes Do Not Always Handle Signals Properly"
permalink: /kb/046/Q46383/
---

## Q46383: Spawned Processes Do Not Always Handle Signals Properly

{% raw %}

	Article: Q46383
	Product(s): See article
	Version(s): 4.x 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_QuickC | mspl13_c
	Last Modified: 9-AUG-1989
	
	In the following example, the CTRL+C signal is not handled as expected
	within the spawned process:
	
	    #include <stdio.h>
	    #include <process.h>
	
	    void main( void )
	    {
	        int err;
	
	        err = system( "TYPE TEST.TXT | MORE" );
	
	        printf( "Return from system: %d\n", err );
	    }
	
	If CTRL+C is pressed while the file is being typed, temporary files
	used by MORE to emulate pipes are left in the root of the current
	drive. The return value from the system does not indicate any
	problems.
	
	This is a limitation of MS-DOS and the way child processes handle
	certain signals, not a problem with the C compiler. Interrupting an
	assembly language program that simply calls DOS interrupt 0x4B to
	spawn "COMMAND /c TYPE TEST.TXT | MORE" gives the same results.

{% endraw %}

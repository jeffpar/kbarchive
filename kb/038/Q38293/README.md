---
layout: page
title: "Q38293: wait and cwait Are for Protected Mode"
permalink: /kb/038/Q38293/
---

## Q38293: wait and cwait Are for Protected Mode

{% raw %}

	Article: Q38293
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 7-DEC-1988
	
	Page 556 of the "Microsoft C 5.1 Optimizing Compiler User's Guide"
	states that to obtain the exit code for an asynchronous spawned
	process, you must call the wait or cwait function and specify the
	process ID.
	
	Wait, Cwait, and asynchronous spawns can only occur in protected mode.
	
	The wait function suspends the calling process until any of the
	caller's immediate child processes terminate. If all of the caller's
	child processes have terminated before it calls the wait function, the
	function returns immediately.
	
	The cwait function suspends the calling process until the specified
	child process terminates.
	
	For more information, refer to the "Microsoft C 5.1 Optimizing
	Compiler User's Guide" Update Pages 30 and 48.

{% endraw %}

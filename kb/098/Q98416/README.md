---
layout: page
title: "Q98416: DosOpen Thread Blocked Pending DosWaitNmPipe"
permalink: /kb/098/Q98416/
---

## Q98416: DosOpen Thread Blocked Pending DosWaitNmPipe

{% raw %}

	Article: Q98416
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	DosOpen() local call threads become blocked if a remote pipe does not open
	pending a DosWaitNmPipe() in a different thread. This is by design in OS/2 and
	is easily worked around.
	
	MORE INFORMATION
	================
	
	Set the ulTIMEOUT parameter of DosWaitNmPipe to a small value that is an
	acceptable postponement for other I/O--maybe 2 seconds--then put the
	DosWaitNmPipe in a loop. The DosWaitNmPipe now, in effect, "waits forever"
	(unless you want to limit the loop instance), but every 2 seconds other I/O from
	threads within the same process are serviced.
	
	OS/2 serializes I/O at the process level, which creates (essentially) a queue of
	I/O requests per process. If two threads within the same process issue I/O calls
	to the operating system, the first one (longest time in queue) becomes the
	DosWaitNmPipe, and the second becomes the DosOpen. The operating system must
	complete processing the DosWaitNmPipe before it can entertain the DosOpen.
	
	This behavior is not present in NT, as NT serializes I/O per thread, not per
	process.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}

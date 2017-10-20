---
layout: page
title: "Q59951: DosWaitNmPipe() Behavior"
permalink: /kb/059/Q59951/
---

## Q59951: DosWaitNmPipe() Behavior

{% raw %}

	Article: Q59951
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The QuickHelp entry for DosWaitNmPipe() says that the longest waiting client
	will receive the first go-ahead. Gordon Letwin's "Inside OS/2" says that the
	highest priority process will receive the first go-ahead.
	
	The following information discusses how WaitNmPipe() works when the clients are
	on separate workstations on a network.
	
	MORE INFORMATION
	================
	
	Suppose a server program has only one instance of a pipe available and it is
	currently used by one client. Suppose there are other N clients waiting at
	DosWaitNmPipe(). As soon as the pipe instance becomes available, the (client)
	process with highest priority will return first from DosWaitNmPipe(). If all
	waiting (client) processes have the same priority, all such (client) processes
	will return from DosWaitNmPipe() together in the (chronological) order they
	called DosWaitNmPipe().
	
	Once a pipe instance becomes available, ALL (client) processes/threads waiting on
	DosWaitNmPipe() will return; each such process/thread will return from
	DosWaitNmPipe() in the order of its priority and the time of blocking on
	DosWaitNmPipe(). Thus, when all processes have the same priority, the process
	waiting the longest will return from DosWaitNmPipe() first.
	
	Once a (client) process has returned successfully from DosWaitNmPipe(), it still
	does not have the pipe instance until it does a DosOpen() again.
	
	For example, suppose all N clients have the same priority. All of the clients
	will then return from DosWaitNmPipe() one by one. Then, the first (client)
	process to call a DosOpen() will get the instance of the pipe; the rest will get
	an ERROR_PIPE_BUSY. The rest (N-1) of the clients must then wait again for the
	next available instance of the pipe.
	
	Usually, in cases such as this, the first (client) process scheduled to run by
	the OS/2 scheduler (which is completely independent of the pipe contention
	scenario above) will get the pipe also.
	
	For remote clients, the behavior is similar. The first DosOpen() request to reach
	the server over the net will get the newly available pipe instance; the rest
	will get an ERROR_PIPE_BUSY response.
	
	Additional query words: 2.00 2.10 2.10a 2.20 DosWaitNmPipe() namedpipe
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q255198: Cannot Change DCOM Call Timeouts in Windows NT 4.0"
permalink: /kb/255/Q255198/
---

## Q255198: Cannot Change DCOM Call Timeouts in Windows NT 4.0

{% raw %}

	Article: Q255198
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Distributed Component Object Model (DCOM) calls may take a long time to time out
	if the network is down, or if the server is unavailable.
	
	CAUSE
	=====
	
	This behavior occurs because DCOM does not give access to the underlying remote
	procedure call (RPC) binding handle, which makes it difficult to configure the
	RPC timeout.
	
	RESOLUTION
	==========
	
	To work around this behavior, use the following method:
	
	When you develop code that uses DCOM on Microsoft Windows NT 4.0, Microsoft
	Windows 95, or Microsoft Windows 98, you can make use of multithreading to give
	up on a DCOM call before the default timeout. You can spawn another thread that
	makes the DCOM call, and have the original thread wait for the desired amount of
	time. The original thread can 'give up' on the spawned thread, and proceed as if
	the call had timed out. There are a few things to consider when implementing
	this solution:
	
	- If the original thread wants to really 'forget' about the thread that is
	  making the DCOM call, it must close the handle to the thread, so that when
	  the original thread ends, the thread object is deleted.
	
	- The original thread might give up and proceed as if the call did not succeed,
	  but then network conditions might improve so that the call does succeed. If
	  the call modifies the state of the server, this can be a problem. It might be
	  possible for the background thread to 'clean up' if it has been abandoned.
	  This type of solution is best for calls that do not modify the state of the
	  server.
	
	- Even though the original thread gives up on the thread that made the DCOM
	  call, the thread is still running until the DCOM call times out. This means
	  that the process cannot end normally because it will wait for the thread to
	  end. You can use TerminateThread in this situation, but it is not
	  recommended.
	
	MORE INFORMATION
	================
	
	The actual DCOM timeout depends on a number of factors, including which network
	protocol DCOM is using and whether the server or network went down before or
	during the call. DCOM makes use of RPC, and although RPC does allow some amount
	of control over call timeout, the programmer cannot normally take advantage of
	it because DCOM does not give access to the underlying RPC binding handle.
	
	DCOM on Microsoft Windows 2000 addresses this problem by providing features such
	as asynchronous calls and call cancelling. If you want to cancel DCOM calls in
	Windows NT 4.0, Windows 95 or Windows 98, you can try using 'apartment model'
	threading and implementing IMessageFilter; however, this does not work well for
	all cases and is not recommended.
	
	These timeouts apply to DCOM in various situations when it is using the User
	Datagram Protocol (UDP):
	
	- If the network or server is down before the start of a call, the call will
	  time out in 32 seconds.
	
	- If the network or server goes down during a call, the timeout depends on how
	  long the call lasted. The maximum timeout is between 64 and 96 seconds.
	
	- Timeouts are longer when DCOM is using Transmission Control Protocol/Internet
	  Protocol (TCP/IP).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

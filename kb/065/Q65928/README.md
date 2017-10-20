---
layout: page
title: "Q65928: FIX: COMM.DRV Locks Up with Full Duplex Communications"
permalink: /kb/065/Q65928/
---

## Q65928: FIX: COMM.DRV Locks Up with Full Duplex Communications

{% raw %}

	Article: Q65928
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When it is subjected to a heavy load during full-duplex communications, the
	transmit portion of the Microsoft Windows communications driver (COMM.DRV) stops
	working (no characters are sent). This problem occurs in real, standard, and
	enhanced modes. The receive portion of the communications driver is unaffected.
	
	CAUSE
	=====
	
	COMM.DRV encounters a "deadlock" situation during full-duplex operation.
	
	RESOLUTION
	==========
	
	To work around this problem, an application must detect whether deadlock has
	occurred. This can be done by setting a timer in Windows that sends a message to
	the application every one or two seconds. When the application receives timer
	message, check the txQueue count in COMM.DRV. If the count has not changed since
	the last message (indicating that no characters have been sent), the application
	calls the FlushComm function and resends the data that was not transmitted. The
	alternative, which is not recommended, is to close the COM port and then reopen
	it. No ill side effects, other than some performance degradation, have been
	observed from using these techniques.
	
	
	For applications that are very transmission intensive -- for example, sending
	data through a full-duplex communications line for an extended period of time --
	the 1 to 2 second wait might be considered too long. For these applications,
	shorten the checking interval as desired. However, if the interval is too short,
	the application may detect deadlock when it has not actually occurred.
	Unnecessary calls to FlushComm and resending data would degrades the performance
	of the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. This
	problem was fixed in the Windows for Workgroups 3.11 COMM.DRV and above.
	
	
	Additional query words: 3.00 hangs DDKCOMM buglist3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

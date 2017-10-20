---
layout: page
title: "Q159350: SNA Server Win32 API Calls May Not Return to Multithreaded App"
permalink: /kb/159/Q159350/
---

## Q159350: SNA Server Win32 API Calls May Not Return to Multithreaded App

{% raw %}

	Article: Q159350
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you write a multithreaded 32-bit Windows application to handle multiple
	concurrent CPIC conversations, you may find that some of the application's
	threads hang, for example on a CPIC request (CMALLC or CMRCV); these threads
	never complete. The problem occurs when up to 90 concurrent threads (each one
	handling a different CPIC conversation) are spawned.
	
	CAUSE
	=====
	
	The problem is caused by the application. The application calls the
	_beginthread() function to create a new thread, and then closes this thread
	handle from the main application as soon as _beginthread() completed
	successfully.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Remove the close request from the application.
	
	2. Terminate each thread by calling the _endthread function.
	
	Also see the reference section below for information on a better way to write
	such applications.
	
	The problem was solved when this close request was removed from his application.
	Each thread was terminated by calling the _endthread function.
	
	MORE INFORMATION
	================
	
	This problem could occur with any 32-bit Windows application that uses threads
	in this manner, when using the SNA Server API's (APPC, CPIC, and LUA RUI or
	SLI), or even Windows sockets.
	
	See the following Microsoft Knowledge Base article in the visualc database for
	information on using the _beginthreadex() and _endthreadex() functions:
	
	  Q132078 How to Use _beginthreadex() and _endthreadex()
	
	These functions ( _beginthreadex() and _endthreadex() ) are recommended instead
	of the _beginthread() and _endthread() functions, which can lead to threading
	problems under certain conditions, as described in the article above.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	

{% endraw %}

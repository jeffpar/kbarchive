---
layout: page
title: "Q241527: System or Processor Queue Length Counter Gives High Values"
permalink: /kb/241/Q241527/
---

## Q241527: System or Processor Queue Length Counter Gives High Values

{% raw %}

	Article: Q241527
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you monitor the System or Processor Queue Length counter from a remote
	location, you can observe higher values than when you monitor this counter
	locally.
	
	CAUSE
	=====
	
	This behavior can occur because the Processor Queue Length counter is an
	instantaneous counter that collects all the threads in the system, and then
	counts all the ready threads at that instant.
	
	If the system is blocked for some reason, for example, the system is handling a
	remote procedure call (RPC) network operation, the ready thread count at that
	instant can build up to a very high number. This high count number is usually
	temporary, however; as soon as the blocking thread is completed, the ready
	threads can be processed.
	
	WORKAROUND
	==========
	
	To work around this behavior, you can obtain a value if you perform the
	Performance Monitor logging locally, and then view the log from a remote
	computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTS351search kbAudDeveloper kbWinNTW400sp6 kbBackOfficeSearch kbBackOfficeServ400 kbBackOfficeServ450
	Version           : :3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

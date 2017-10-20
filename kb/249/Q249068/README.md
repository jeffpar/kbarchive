---
layout: page
title: "Q249068: IO Threading Model Used by SNA Server Services"
permalink: /kb/249/Q249068/
---

## Q249068: IO Threading Model Used by SNA Server Services

{% raw %}

	Article: Q249068
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	To improve SNA Server performance and scalability, SNA Server services have been
	redesigned to use IO Completion Ports (IOCPs). The implementation of IOCPs began
	with the release of SNA Server 3.0 SP1; however, not all of the SNA Server
	services were updated at the same time. Services updated after SNA Server 3.0
	SP1 are noted in the "More Information" section of this article.
	
	MORE INFORMATION
	================
	
	The IOCP algorithms used by the various SNA Server services base the number of
	IO threads created on the number of processors in the SNA Server system.
	
	The following details the algorithms used by specific SNA Server services to
	determine the number of IO threads each will create:
	
	SNA Server service: (4 + 1) * (Number of Processors)
	
	SnaBase service: (4 + 1) * (Number of Processors)
	
	TN3270 service: 5 * (Number of Processors)
	
	Note: The TN3270 service was updated to use IOCPs starting in SNA Server 4.0
	SP2.
	
	SnaPrint service:
	
	  5250 (AS/400) Printing: 5 * (Number of Processors)
	
	  Note: 5250 printing was updated to use IOCPs starting in SNA Server 4.0 SP3.
	
	  3270 Printing: 3270 printing does not make use of IOCPs. The SnaPrint service
	  can create a maximum of 32 threads to service the 3270 print sessions. Each
	  thread can support up to 32 sessions. Thirty-two threads supporting a maximum
	  of 32 sessions each yields 1,024 sessions. Each of the first 32 3270 print
	  sessions cause the Snaprint service to create a new thread. Therefore, if the
	  Snaprint service is configured with 32 3270 print sessions, each print
	  session is assigned to its own thread. Additional 3270 print sessions are
	  assigned to the existing threads in a round-robin order to ensure that the
	  sessions are balanced among the 32 threads. Please refer to the following
	  article for more information on the thread/session usage for 3270 printing:
	
	  Q239861 SNA Server Host Print Service Supports 1,024 3270 Print Sessions
	
	The rest of the SNA Server services (link services, TN5250, etc.) use the same
	IOCP algorithm that the SNA Client for Windows NT uses, which is the following:
	
	  2 * (Number of Processors)
	
	Although the default number of IO threads should be sufficient in the vast
	majority of cases, it is possible to change the number of IO threads used by the
	SNA Server service and the TN3270 service. The following registry entries are
	used to set the number of IO Threads for the SNA Server service and the TN3270
	service:
	
	Note: Each thread created under Windows NT consumes approximately 1 MB of memory,
	so the number of IO threads should not be increased without reason. Adding a
	large number of additional threads has the potential of causing performance
	problems due to the additional memory being used.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	SNA Server Service:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaServr\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: NumberOfIOThreads
	  Data Type: REG_DWORD
	  Value: <Number of IO Threads>
	
	4. Quit Registry Editor.
	
	If this registry entry is specified, the formula to determine the number of IO
	threads is as followis:
	
	  SNA Server: (NumberOfIOThreads + 1) * (Number of Processors)
	
	If the registry entry is not present, the default value for NumberOfIOThreads for
	the SNA Server service is 4. The maximum value for NumberOfIOThreads is 64. If a
	value greater than 64 is specified, a value of 64 will be used.
	
	An SNA Server computer that handles a large number of client log-on requests
	concurrently may experience some performance delays while processing the log-on
	requests. Increasing the number of IO threads in this scenario may help
	alleviate the delays.
	
	A change was made in the way that the SNA Server DMOD handled log-on requests in
	SNA Server 3.0 SP2 because of the problem described in the following article:
	
	  Q168717 SNA Server Performance Degrades If Domain Controller Down
	
	Because of this change, there can only be (NumberOfIOThreads/2 + 1) concurrent
	log-on requests in progress at one time. For a single processor system, this
	means that there can be three concurrent log-on requests in progress at one
	time. This guarantees that there are always enough IO threads to handle
	non-logon messages. Otherwise, all active SNA clients could stop responding if
	all of the IO threads were in use processing log-on requests.
	
	If the number of log-on requests exceed the above limit, new log-on requests are
	queued internally in the DMOD until one of the pending log-on calls completes.
	
	If NumberOfIOThreads is set to 10 in the registry on a single processor system,
	the DMOD can handle six concurrent log-on requests.
	
	TN3270 Service:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\TN3270\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: NumIOThreads
	  Data Type: REG_DWORD
	  Value: <Number of IO Threads>
	
	4. Quit Registry Editor.
	
	If this registry entry does not exist, the default value is 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

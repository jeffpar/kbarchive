---
layout: page
title: "Q233323: Exceeding MaxRequestThreads May Cause Windows NT to Hang"
permalink: /kb/233/Q233323/
---

## Q233323: Exceeding MaxRequestThreads May Cause Windows NT to Hang

	Article: Q233323
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbProgramming kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running Windows NT, a denial of service condition exists if a
	malicious process is run locally or if an improperly written service is
	installed. If more than the maximum number (16 by default) of processes that
	require user input are started without receiving the corresponding input, the
	server may stop responding (hang).
	
	CAUSE
	=====
	
	This vulnerability affects Client Server Runtime Subsystem (CSRSS), which is
	otherwise known as the Win32 subsystem. CSRSS provides Windows NT services to
	client processes running on the local computer. When a client process requests a
	Win32 service, CSRSS generates a worker thread to service the request. If all
	worker threads are occupied, the request is queued until a thread completes its
	work and becomes available.
	
	The underlying vulnerability in this issue is how the CSRSS service in Windows NT
	handles requests that require user input. A worker thread that needs user input
	remains occupied until it receives input. If all worker threads in CSRSS are
	servicing requests that require user input, all threads are occupied but idle
	until they receive the required input, effectively causing the computer to hang
	until the user input is provided. After the user input is received, processing
	returns to normal.
	
	The patch listed below eliminates this vulnerability by ensuring that the last
	available worker thread is never used to process a request that requires user
	input.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	It is important to understand that CSRSS only services requests made by other
	processes on the same local computer, so the computers primarily at risk are
	those that allow users to log on interactively with assigned rights to run a
	program or remotely install a service. Specifically, servers would be the most
	likely targets of such an attack.
	
	Windows NT Workstation may not be affected, because the user can always provide
	the information that's requested, and prevent the supply of worker threads from
	being exhausted. Windows NT 4.0, Terminal Server Edition, is not affected by
	this vulnerability as each user session has its own pool of worker threads and
	this issue would only affect individual Terminal Server clients. A Terminal
	Server client (like NT Workstation) can clear the requests for user input and
	prevent the denial of service condition. The enforcement of recommended security
	practices can prevent anyone but administrators from interactively logging on to
	servers or installing a service that can cause this problem.
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbProgramming kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

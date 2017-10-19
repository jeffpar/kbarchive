---
layout: page
title: "Q225344: ICMP Redirect Attack Hangs Windows NT Server and Workstation"
permalink: /kb/225/Q225344/
---

## Q225344: ICMP Redirect Attack Hangs Windows NT Server and Workstation

	Article: Q225344
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Your computer running Windows NT may stop responding (hang) or the computer's
	performance may degrade drastically when connected to an internetwork segment or
	to the Internet. Other symptoms may include:
	
	- The Perfmon tool's Processor Utilization object may indicate 100 percent
	  utilization.
	
	- Issuing a ROUTE PRINT command at a command prompt shows that the route table
	  has changed.
	
	- If the computer is disconnected from the network segment or the Internet and
	  then restarted, the problem does not occur again until the computer is
	  reconnected to the network segment or Internet.
	
	CAUSE
	=====
	
	This problem is caused by the receipt of multiple Internet Control Message
	Protocol (ICMP) Redirect packets that are used to change routing table entries.
	Too many ICMP Redirect packets in a short period of time may cause Windows NT to
	dedicate an inordinate amount of CPU time to update the routing table and cause
	the computer to stop responding. In many cases, this scenario indicates a denial
	of service attack through the use of a program to send multiple ICMP Redirect
	packets against a specific TCP/IP address.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After you have installed Windows NT 4.0 Service Pack 5, you can enable a Windows
	NT registry entry that allows your computer to disregard ICMP Redirects. To
	disable ICMP Redirects:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  "HKEY_LOCAL_MACHINE\System\Currentcontrolset\Services \Tcpip\Parameters"
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, type "EnableICMPRedirects" (without the
	  quotation marks), click REG_DWORD in the Data Type box, and then click OK.
	
	4. Type "0" (without the quotation marks), and then click OK. NOTE: Setting this
	  registry entry to a value of 1 enables ICMP Redirects.
	
	5. Quit Registry Editor, and then restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	
	For additional information about ICMP Redirect packets, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q195686 Explanation of ICMP Redirect Behavior
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

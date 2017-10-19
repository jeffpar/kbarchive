---
layout: page
title: "Q248611: Setsockopt Is Unable to Mark the Internet Protocol Type of Servi"
permalink: /kb/248/Q248611/
---

## Q248611: Setsockopt Is Unable to Mark the Internet Protocol Type of Servi

	Article: Q248611
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP5 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Windows 2000 does not support the marking of Internet Protocol (IP) Type of
	Service (ToS) bits with the setsockopt function.
	
	MORE INFORMATION
	================
	
	On Windows NT 4.0 and Windows 9x, Winsock applications can set the ToS bits in
	the IP header for UDP and ICMP packets by calling the setsockopt function with
	the IP_TOS option. The ping utility on those platforms also allows the ToS bits
	marking in the ICMP echo packets by using the "-v" option. Please note that the
	ToS bits marking for TCP packets has never been available to Winsock even
	although the setsockopt call with the IP_TOS option on TCP sockets returns 0
	(SUCCESS).
	
	On Windows 2000, the ToS bits marking functionality in Winsock applications and
	the ping utility is disabled by default. The attempt to set the IP_TOS option
	with the setsockopt function on Windows 2000 still returns 0 (SUCCESS) to allow
	applications to continue to run; but the ToS bits in the IP header is not
	marked.
	
	This design change in Windows 2000 is because the former ToS and precedence bits
	specified in Request For Comment (RFC) 1349 have been made obsolete by RFCs 2474
	and 2475. These RFCs replaced ToS with Differentiated Services (DiffServ).
	
	DiffServ Code Point (DSCP) enables packets that pass through network devices
	operating on layer 3 information, such as routers, to have their relative
	priorities differentiated from one another. DSCP is established by setting the
	first six bits of the ToS field in the IP header. DSCP has assumed the function
	of determining IP precedence, but maintains backward compatibility. With DSCP
	marking, layer 3 devices can establish aggregated precedence-based queues and
	provide better service to packets that have a higher relative priority.
	
	The is particularly beneficial when packet services are subject to queuing, as is
	the case under significant network traffic loads associated with streaming media
	presentations and other real-time data streams. For DSCP to be effective, layer
	3 devices must be DSCP-enabled.
	
	On Windows 2000 host devices, the Generic Quality of Service (GQOS)
	implementation determines the DSCP marking. A Winsock GQOS program triggers the
	RSVP service provider to submit policy and resource checks to determine the
	policy control and the availability of resources along a network data path. If
	the intended resource usage is approved, the QOS Packet Scheduler service marks
	the DSCP prioritization in the IP packet headers. The IP_TOS option with the
	setsockopt function would bypass Windows 2000 QOS policy control, and thus is
	disabled by default on Windows 2000.
	
	Microsoft recommends that you implement GQOS in your Winsock programs to take
	advantage of the Windows 2000 GQOS capabilities. However, to allow for behavior
	similar to Windows NT 4.0 IP_TOS on Windows 2000 for backward compatibility, a
	new registry key is added on Windows 2000.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Follow these steps to enable the IP_TOS option for the Winsock setsockopt
	function and the -v option for the ping utility on Windows 2000:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_ MACHINE on Local Machine\System\CurrentControlSet\Services\Tcpip\Parameters\ 
	
	  NOTE: The registry key is one path.
	
	3. On the Edit menu, click Add Value, and then type "DisableUserTOSSetting"
	  (without the quotation marks). Click REG_DWORD in the Data Type box, and then
	  click OK.
	
	4. Enter "0" (without the quotation marks) in the prompt box.
	
	5. Quit Registry Editor, and then restart the computer.
	
	For information about the use and application of the Quality of Service (QoS)
	Application Programming Interfaces (APIs), which have effectively replaced the
	IP_ToS option, see MSDN Online and search for QoS.
	
	For additional information about traffic prioritization, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q222102 Traffic Prioritization Using IP Precedence
	
	  Q222020 Description of 802.1P Signaling
	
	  Q233039 QoS Queuing Techniques
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0,4.0 SP5
	Issue type        : kbinfo
	
	=============================================================================
	

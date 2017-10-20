---
layout: page
title: "Q178550: IP Address Conflict with Address 0.0.0.0"
permalink: /kb/178/Q178550/
---

## Q178550: IP Address Conflict with Address 0.0.0.0

{% raw %}

	Article: Q178550
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install ICMP-fix, the following events may be logged in the system
	event log:
	
	  Event ID: 4199
	  Source: TCP/IP
	  Description: The system detected an address conflict for IP address
	  0.0.0.0 with the system having network hardware address
	  xx:xx:xx:xx:xx:xx. Network operations on this system may be disrupted as
	  a result.
	
	  Event ID: 26
	  Source: Applications Popup
	
	For more information on ICMP-fix, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q143478
	  TITLE : Stop 0A in TCPIP.SYS When Receiving Out Of Band (OOB) Data
	
	CAUSE
	=====
	
	
	The ICMP hotfix includes a fix where ARP requests sent from 0.0.0.0 are now
	processed. The handling of ARP requests sent from 0.0.0.0 has been introduced
	because RFC 1541 suggests that a DHCP client should verify an IP lease offered
	from a DHCP server by sending an ARP request. In the RFC, the sender's IP
	address is defined as 0.0.0.0.
	
	If a computer is in a state where it has no valid IP address lease (for example,
	when starting or when the lease has expired), the computer's TCP/IP stack is
	initialized with the address 0.0.0.0.
	
	If, in this state, an ARP request with sender's IP address 0.0.0.0 is received,
	the above events will be logged.
	
	For additional information on the ICMP hotfix, please see the following article
	in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q154174
	  TITLE : Invalid ICMP Datagram Fragments Hang Windows NT, Windows 95
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

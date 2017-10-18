---
layout: page
title: "Q154460: Denial of Service Attack Against WinNT Simple TCP/IP Services"
permalink: kb/154/Q154460/
---

## Q154460: Denial of Service Attack Against WinNT Simple TCP/IP Services

	Article: Q154460
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	As your computer is being attacked there may be a jump in bandwidth utilization
	on a subnet containing Windows NT computers and performance may suffer. A
	network analyzer shows a large amount of UDP traffic, typically from port 19
	(chargen).
	
	CAUSE
	=====
	
	A malicious attack may be mounted against Windows NT computers with the Simple
	TCP/IP Services installed. The attack consists of a flood of UDP datagrams sent
	to the subnet broadcast address with the destination port set to 19 and a
	spoofed source IP address. The Windows NT computers running Simple TCP/IP
	services respond to each broadcast, creating a flood of UDP datagrams.
	
	RESOLUTION
	==========
	
	Windows NT TCP/IP, Windows Sockets, and Simple TCP/IP services have been
	modified to be more attack resistant. Windows Sockets now supports a new socket
	option, SO_BROADCAST, that can be set to allow the recvfrom() call to pass
	broadcast datagrams to the application. The default for this option is OFF.
	Previous implementations passed broadcasts datagrams to any Windows Sockets
	application that issued a recvfrom() call. Additionally, the chargen service and
	other Simple TCP/IP services have been modified to drop any datagrams that have
	the source port equal to the destination port to prevent "looping" attacks.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/
	hotfixes-postSP3/simptcp-fix
	
	NOTE: An updated version of this hotfix was posted on August 15, 1997.
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4.
	
	
	
	Additional query words: 4.00 prodnt chargen attack
	
	======================================================================
	Keywords          : kbfile kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

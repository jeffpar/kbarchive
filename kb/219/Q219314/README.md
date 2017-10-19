---
layout: page
title: "Q219314: DHCP Scope Marked &quot;Bad&quot; After Windows NT Service Pack 3 Install"
permalink: /kb/219/Q219314/
---

## Q219314: DHCP Scope Marked &quot;Bad&quot; After Windows NT Service Pack 3 Install

	Article: Q219314
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT Server 4.0 Service Pack 3 on a Windows NT-based
	computer that has the Dynamic Host Control Protocol (DHCP) service installed,
	TCP/IP addresses in one or more DHCP scopes may be displayed as "BAD". Entire
	scopes may be displayed this way when an internetworking device (such as a
	router), is not functioning properly, or the DHCP service receives an Internet
	Control Message Protocol (ICMP) packet coded with the destination unreachable
	flag.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0
	Service Packs 3 and 4. This problem was first corrected in Windows NT version
	4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search
	Version           : winnt:4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

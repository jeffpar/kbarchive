---
layout: page
title: "Q192064: Using LMHOSTS to Locate Multiple Preferred Logon Servers"
permalink: /kb/192/Q192064/
---

## Q192064: Using LMHOSTS to Locate Multiple Preferred Logon Servers

{% raw %}

	Article: Q192064
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT 4.0 computer starts up, it normally queries WINS to locate
	domain controllers that it can log on to. WINS does not have any awareness of
	geographical locations of domain controllers, so, if a distant or low-bandwidth
	domain controller is selected, boot and logon times can be slow.
	
	CAUSE
	=====
	
	The starting computer queries WINS for the domain[1C] name list. WINS returns a
	list of domain controllers, and the computer sends a datagram to each of them
	(as well as a subnet broadcast for any domain controllers that happen to be on
	the same subnet). The first DC to respond is chosen as the one to use for
	logging on.
	
	RESOLUTION
	==========
	
	NetBT has been modified to support multiple domain controller entries in the
	LMHOSTS file. Entries can be added to specify preferred domain controllers to
	use when logging on. Entries must appear as shown here:
	
	To take advantage of this new feature, LMHOSTS lookups must be enabled. To enable
	LMHOSTS lookup, go to Control Panel->Network->Protocols->TCP/IP-
	>properties->WINS addresses, and select the "Enable LMHOSTS Lookup"
	checkbox.
	
	  ===
	  10.1.1.1   example1  #PRE    #DOM:mydomain
	  10.1.1.2   example2  #PRE    #DOM:mydomain
	  ===
	
	With the above LMHOSTS file entries, a computer would attempt to use the IP
	addresses 10.1.1.1 and 10.1.1.2 to log on to the domain called mydomain.
	
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
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

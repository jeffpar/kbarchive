---
layout: page
title: "Q166159: NetBIOS Connections from a Multihomed Computer"
permalink: kb/166/Q166159/
---

## Q166159: NetBIOS Connections from a Multihomed Computer

	Article: Q166159
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect from a multihomed computer running Windows NT to another
	computer, the local source IP address used may not be optimal. If the multihomed
	system is attached to two different (disjoint) networks, and the target system
	is on only one of the networks, there may be a delay in establishing the
	connection.
	
	This behavior only occurs on NetBIOS over TCP/IP sessions (such as file and print
	sharing); therefore, this information does not apply to Windows Sockets
	applications such as Web browsers.
	
	
	CAUSE
	=====
	
	The Windows NT 4.0 (and earlier) redirector used the following logic to
	establish a NetBIOS session:
	
	- Place a call to the destination name on all bound transports, in the order
	  they are bound.
	
	- Wait for the "primary" (first-bound) transport to complete, and if it was
	  successful in reaching the target, set up a session on it and disconnect
	  (cancel) the other calls.
	
	In the case of a computer that is multihomed on two connected (by a router)
	networks, if the target system is on only one of those networks, there are two
	paths to the target system. In this case, the call succeeds on both paths, and
	the "primary" transport (for example, the local source IP address associated
	with that binding of NetBT) is the chosen one. The other call is cancelled. This
	means that the less optimal path (through the router) may win out over the more
	optimal (direct) path. In this case, packets sent from the multihomed computer
	are internally routed to the directly connected subnet (because the route table
	shows a direct route to it), but packets sent in response from the target system
	traverse the router. This scenario can be confusing to troubleshoot.
	
	RESOLUTION
	==========
	
	A Windows NT redirector has been produced that allows a new configurable
	behavior, accepting the first transport to complete a call, and immediately
	canceling the calls on the others. A new version of NetBT that supports better
	handling of multiple calls and cancels is also available.
	
	To take advantage of this improvement, a registry parameter must be added as
	follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Rdr\Parameters
	
	  Value Name: IgnoreBindingOrder
	  Value type: REG_DWORD
	  Default: 0
	
	  Setting this value to "1" causes the redirector to accept the first
	  transport to complete a call, rather than waiting for success or failure
	  on the "primary" transport.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This problem and hotfix do not apply to Windows Sockets-based connections. When
	a Windows Sockets application places a call from a multi-homed host the best
	local source address is chosen automatically (using the route table), unless the
	application specifies otherwise by choosing a local IP address to use in the
	bind() call.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

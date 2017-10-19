---
layout: page
title: "Q238009: Loss of Connection with Node Persists Until Node Is Restarted"
permalink: /kb/238/Q238009/
---

## Q238009: Loss of Connection with Node Persists Until Node Is Restarted

	Article: Q238009
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Cluster Server (MSCS) and one node loses its connection
	with another node, subsequent attempts to re-establish the connection may not be
	successful until the second node is restarted. Note that the second node can be
	either a cluster node or a sponsor node.
	
	This behavior may also occur when you install a cluster node to join a sponsor
	node and you cannot establish the connection on the first attempt. When the
	initial join does not complete, all subsequent attempts to join the sponsor node
	are also unsuccessful until you restart the sponsor mode.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The primary issue of this behavior is the join (connection) on the second node.
	Although the occurrence of this behavior is rare, it can occur potentially every
	time a connection between nodes is unsuccessful or stops, and an attempt is made
	to re-establish the connection.
	
	The operating system on the first node is not critical in this situation, you can
	use any operating system that supports Windows NT Server, Enterprise Edition.
	However, you must apply Windows NT 4.0 Service Pack 6 or later on the operating
	system of the second node.
	
	For more information about MSCS and other features of Windows NT Server,
	Enterprise Edition, please visit the following Microsoft Web site:
	
	  http://www.microsoft.com/ntserver/ntserverenterprise/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q182047: DHCP Server Performance Degraded by Large Number of Scopes"
permalink: /kb/182/Q182047/
---

## Q182047: DHCP Server Performance Degraded by Large Number of Scopes

{% raw %}

	Article: Q182047
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a large number of scopes are configured on a Windows NT 4.0 DHCP server,
	performance degrades to where it cannot keep up with large client loads such as
	those experienced after a power failure, or at peak network startup times.
	
	CAUSE
	=====
	
	A list of scopes is maintained in the registry. When a DHCP DISCOVER or DHCP
	REQUEST is received, it must be matched against the configured scopes to see if
	the server is able to provide services to the client subnet. This process of
	searching through the scopes was not optimized for large numbers of scopes.
	Additionally, some database calls could experience suboptimal performance caused
	by nonoptimal database buffer initialization.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This hotfix supersedes the fixes referred to in the following articles in
	the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q141496
	  TITLE : DHCP Client Comment Disappears When Obtaining IP Address
	
	  ARTICLE-ID: Q167708
	  TITLE : BootP Client Names Disappear in DHCP Manager
	
	  ARTICLE-ID: Q163055
	  TITLE : DHCP Client May Fail with WinNT 4.0 SP2 Multinetted DHCP Server
	
	  ARTICLE-ID: Q175035
	  TITLE : Diskless Workstations Cannot Find BOOTP Server with DHCP
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The updated file caches the entire scope list in memory, and uses a binary
	search to quickly determine if the server has a scope that is relevant to each
	client request. This update dramatically reduces the number of times that
	registry keys are opened and searched. It also provides more buffers for
	interaction with the database, which improves database throughput.
	
	Additional query words: reduce
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

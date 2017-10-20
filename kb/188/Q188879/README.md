---
layout: page
title: "Q188879: RPC Endpoint Mapper Will Not Register All Interfaces"
permalink: /kb/188/Q188879/
---

## Q188879: RPC Endpoint Mapper Will Not Register All Interfaces

{% raw %}

	Article: Q188879
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an RPC application uses DCE rpc_ep_register to register endpoints, a
	Windows NT 4.0 computer will only register endpoints on a single adapter into
	the system's local endpoint map.
	
	CAUSE
	=====
	
	The Microsoft RPC Endpoint Mapper did not store the adapter IP address as part
	of the Endpoint Database.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: Service Pack 3 must be applied to Windows NT 4.0 prior to applying this
	fix. This hotfix is dependent on an earlier hotfix to Ole32.dll, and requires a
	version of Ole32.dll dated no earlier than 3/24/98. Ole32.dll is supplied along
	with RPCSS in this hotfix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

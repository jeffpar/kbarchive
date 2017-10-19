---
layout: page
title: "Q164765: How to Enable WINS Proxy Agent in Windows NT 4.0"
permalink: /kb/164/Q164765/
---

## Q164765: How to Enable WINS Proxy Agent in Windows NT 4.0

	Article: Q164765
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows NT 3.5x, the Window Internet Name Service (WINS) Proxy Agent can be
	enabled through the TCP/IP properties in the Network Control Panel. In Windows
	NT 4.0, the WINS Proxy Agent cannot be enabled in the Network Control Panel, but
	can be enabled by changing a registry setting.
	
	MORE INFORMATION
	================
	
	A network administrator can designate one or two WINS-enabled computer for each
	subnet to be WINS Proxy Agents in a local subnet if a WINS server is not
	available on the local subnet. The Proxy Agent helps resolve name queries for
	non-WINS enabled computers (b-node) in routed TCP/IP intranets.
	
	Non-WINS enabled computers use IP broadcasts for name queries. The Proxy Agent
	listens on the local subnet for IP broadcast name queries and resolves the name
	queries by either using the local cached name-to-IP- address mappings or, if the
	name is not found in the cache, by forwarding the query to a WINS server and
	returning the replies to the client. The WINS Proxy Agent can query a WINS
	server across a router. Because the WINS server does not respond to broadcasts,
	a computer configured as a WINS Proxy Agent should be installed on a subnet that
	contains computers that use broadcasts for name resolution.
	
	For more information, see the following article in the Microsoft Knowledge base:
	
	  ARTICLE-ID: Q121004
	  TITLE : WINS Proxy Agent Functionality
	
	For additional information on WINS and the WINS proxy functionality, please see
	the following white paper available on the Microsoft anonymous ftp server:
	
	  File Name: Tcpipimp2.doc
	  Location : ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/
	
	In Windows NT 3.51, to configure a computer as a WINS Proxy Agent, check the
	"Enable WINS Proxy Agent" box in the Advanced properties of the TCP/IP protocol
	in the Network Control Panel.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	In Windows NT 4.0, you must manually change the following registry parameter to 1
	to enable the WINS Proxy Agent:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Netbt\Parameters\ 
	
	  Value Name: EnableProxy
	  Value Type: REG_DWORD
	  Values: Boolean (0 or 1)
	  Default: 0
	
	Restart the computer after changing this registry setting, and the WINS Proxy
	Agent will be enabled.
	
	======================================================================
	Keywords          : kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

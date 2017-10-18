---
layout: page
title: "Q186078: Name Resolution May Fail If NetBios Name Has ASCII Character"
permalink: kb/186/Q186078/
---

## Q186078: Name Resolution May Fail If NetBios Name Has ASCII Character

	Article: Q186078
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
	
	Name resolution may fail if the NetBIOS name has an ASCII sixteenth character.
	The problem occurs with Microsoft Systems Management Server Remote Control
	service when trying to attach to a computer running the Remote Control server
	component. The problem occurs when the name is not registered with WINS, and DNS
	is used to resolve the name.
	
	This problem may occur with any application using ASCII characters for NetBIOS
	name suffix.
	
	CAUSE
	=====
	
	Systems Management Server Remote Control service uses <0x43> (ASCII "C")
	as NetBIOS name suffix for Systems Management Server Administrators Remote
	Control tool.
	
	While generating the fully qualified domain name (FQDN) to be resolved by DNS,
	the NetBIOS service parses the name incorrectly when the suffix is an ASCII
	character.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q163409
	  TITLE : NetBIOS Suffixes (16th Character of the NetBIOS Name)
	
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
	
	
	MORE INFORMATION
	================
	
	Systems Management Server Remote Control client uses the following suffix
	values:
	
	+---------------------------------------------------+
	| Hex  | ASCII | Description                        | 
	+---------------------------------------------------+
	| 0x43 | C     | Administrators Remote Control tool | 
	+---------------------------------------------------+
	| 0x44 | D     | Clients Remote Control             | 
	+---------------------------------------------------+
	| 0x45 | E     | Clients Remote Chat                | 
	+---------------------------------------------------+
	| 0x46 | F     | Clients Remote Transfer            | 
	+---------------------------------------------------+
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

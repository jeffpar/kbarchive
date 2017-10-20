---
layout: page
title: "Q190203: RRAS STOP Msg: 0x0000000A After Applying Hotfix"
permalink: /kb/190/Q190203/
---

## Q190203: RRAS STOP Msg: 0x0000000A After Applying Hotfix

{% raw %}

	Article: Q190203
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restart after applying the PPTP and RRAS hotfix packs, the following
	STOP error message appears soon after Windows NT boots. This STOP message will
	also occur every time a Demand Dial connection tries to dial by using a static
	route:
	
	  *** STOP: 0x0000000A (0xXXXXXXXX,0x00000002,0x00000001,0xF8E5FCE5)
	  IRQL_NOT_LESS_OR_EQUAL
	
	  Address dword dump Build [1381] - Name
	  f8e6fc74 f900956c f900956c 8059XXXX 02e6fccc - wanarp.sys
	
	CAUSE
	=====
	
	You have installed an older version of the RRAS hotfix pack. The Wanarp.sys that
	is currently installed is incompatible with the new version of Tcpip.sys that
	was installed by the PPTP hotfix.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q189594 RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 3.0 Release Notes
	
	  Q189595 PPTP Performance & Security Upgrade for WinNT 4.0 Release Notes
	
	Additional query words: steelhead steel head ntrouter 0x0A
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q149818: WFW Cannot Log On To WinNT Domain across SMC Token Ring Switch"
permalink: /kb/149/Q149818/
---

## Q149818: WFW Cannot Log On To WinNT Domain across SMC Token Ring Switch

{% raw %}

	Article: Q149818
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client computers running Microsoft Windows For Workgroups (WFW) and NWLINK on
	the IPXODI Support Driver (Token Ring) and that are connecting to a Windows NT
	domain controller across an SMC Elite Switch ES/1, will not be authenticated by
	the domain. Instead, the following error message is displayed:
	
	  No domain server was available to validate your password. You were logged on
	  without password validation.
	
	CAUSE
	=====
	
	The Token Ring switch changes the content of the Netlogon request packets that
	the computer running WFW sends to the domain controller. As a result, the domain
	controller does not recognize the Netlogon request and does not respond to it.
	
	
	RESOLUTION
	==========
	
	To work around this problem, use the NDIS driver for your Token Ring card
	instead of the IPXODI Support Driver (Token Ring).
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

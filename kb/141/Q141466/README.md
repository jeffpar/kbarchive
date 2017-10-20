---
layout: page
title: "Q141466: DHCP Client Reserved Name and Comment Changed by Client"
permalink: /kb/141/Q141466/
---

## Q141466: DHCP Client Reserved Name and Comment Changed by Client

{% raw %}

	Article: Q141466
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you reserve a client IP address in DHCP Server Manager and assign a "Client
	Name" and/or "Client Comment" the fields change.
	
	CAUSE
	=====
	
	When the client receives the reserved address from the DHCP server, the "Client
	Name" field is replaced with the NetBIOS name of the client computer. This is
	intentional. The DHCP database should always contain the actual client
	information.
	
	When the client requests the address, the contents of the "Client Comment" field
	are eliminated under certain circumstances.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3
	Version           : winnt:3.5,3.51,4.0; :
	
	=============================================================================
	

{% endraw %}

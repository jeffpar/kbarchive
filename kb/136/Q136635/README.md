---
layout: page
title: "Q136635: TCP/IP-32 3.11b Client Fails to Obtain Reserved DHCP Address"
permalink: /kb/136/Q136635/
---

## Q136635: TCP/IP-32 3.11b Client Fails to Obtain Reserved DHCP Address

{% raw %}

	Article: Q136635
	Product(s): Microsoft Windows NT
	Version(s): 3.11b,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11b 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer running Windows for Workgroups 3.11 with TCP/IP-32 for Windows for
	Workgroups version 3.11b installed fails to obtain a reserved DHCP address from
	the Windows NT DHCP server. Instead, it obtains a dynamic DHCP address.
	
	This problem occurs on a token ring network.
	
	Windows for Workgroups clients do not experience this problem if they are running
	the following configuration:
	
	- The client has TCP/IP-32 3.11a installed and is on a token ring network.
	
	- The client has TCP/IP-32 3.11b installed and is on an ethernet network.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade the server to Windows NT 3.51.
	
	Windows NT 3.51 DHCP server works properly with TCP/IP-32 3.11a and 3.11b
	clients.
	
	
	Additional query words: prodnt 3.11 3.11b dchp token-ring tokenring
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311b
	Version           : :3.11b,3.5
	
	=============================================================================
	

{% endraw %}

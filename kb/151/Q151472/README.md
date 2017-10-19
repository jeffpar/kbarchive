---
layout: page
title: "Q151472: TCP&#92;IP-32B Using DHCP and M-Node Does Not Register All Names"
permalink: /kb/151/Q151472/
---

## Q151472: TCP&#92;IP-32B Using DHCP and M-Node Does Not Register All Names

	Article: Q151472
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows for Workgroups 3.11 Client running Microsoft TCP/IP-32B that gets its
	IP information from DHCP will not register its Server Service with the Secondary
	WINS Server if the Primary WINS Server is down.
	
	CAUSE
	=====
	
	A Windows for Workgroups client running TCP\IP-32B will not register its Server
	Service in WINS when -
	
	- It receives its IP information through DHCP, including Primary and Secondary
	  WINS Servers and Node Type
	
	  - AND -
	
	- A Node Type of M-Node is defined through DHCP
	
	  - AND -
	
	- The Primary WINS Server is down
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP-32 for Windows
	for Workgroups, versions 3.11B. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: networking
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : WINDOWS:; winnt:3.5,3.51
	
	=============================================================================
	

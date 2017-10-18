---
layout: page
title: "Q125963: IPCONFIG Shows Leftover DHCP Parameters On Non-DHCP Clients"
permalink: kb/125/Q125963/
---

## Q125963: IPCONFIG Shows Leftover DHCP Parameters On Non-DHCP Clients

	Article: Q125963
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you configure your TCP/IP-32 client to use DHCP and then re-configure it not
	to use DHCP, when you execute the command, "IPCONFIG /ALL", it will show old
	(DHCP supplied) values for certain parameters. Although, the client will ignore
	these values and use the local configuration, this may be confusing.
	
	Parameters which may appear incorrectly in IPCONFIG include:
	
	- Primary WINS server
	
	- Secondary WINS server
	
	- Node Type
	
	CAUSE
	=====
	
	IPCONFIG is looking at values in the hidden file, DHCP.BIN, which is not updated
	when the client is switched from being DHCP-configured to manually configured.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the hidden file, DHCP.BIN, found in the
	Windows directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 and TCP/IP-32a. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodtcp32 prodtcp 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311
	Version           : WINDOWS:
	
	=============================================================================
	

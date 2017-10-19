---
layout: page
title: "Q135595: IPCONFIG Does Not Display Domain Name if Assigned Via DHCP"
permalink: /kb/135/Q135595/
---

## Q135595: IPCONFIG Does Not Display Domain Name if Assigned Via DHCP

	Article: Q135595
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The IPCONFIG.EXE utility included with Microsoft TCP/IP-32 for Windows for
	Workgroups 3.11 does not display the fully qualified domain name (FQDN) of the
	host computer if the domain name is assigned through DHCP. If the domain name is
	assigned manually, IPCONFIG correctly reports the FQDN.
	
	The version of IPCONFIG supplied with Windows NT does report the domain name.
	
	Sample output from IPCONFIG when run on Windows for Workgroups 3.11 DHCP client:
	
	   Host Name . . . . . . . . . : ENG-LAB041 (should be
	                                ENG-LAB041.NETLAB.DOM in this example)
	  DNS Servers . . . . . . . . : 157.55.136.218
	                                157.55.136.219
	                                157.55.136.220
	  Node Type . . . . . . . . . : Mixed
	  NetBIOS Scope ID. . . . . . :
	  IP Routing Enabled. . . . . : No
	  WINS Proxy Enabled. . . . . : No
	  NetBIOS Resolution uses DNS : No
	
	CAUSE
	=====
	
	IPCONFIG.EXE does not read the domain name from the DHCP.BIN file. The domain
	name is read only from SYSTEM.INI.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups versions 3.11, 3.11a, and 3.11b. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: wfw wfwg 3.11 3.11a 3.11b prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b
	
	=============================================================================
	

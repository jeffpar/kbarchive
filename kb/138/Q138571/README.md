---
layout: page
title: "Q138571: NetBIOS Name Resolution Through DNS Fails Using TCP/IP-32"
permalink: kb/138/Q138571/
---

## Q138571: NetBIOS Name Resolution Through DNS Fails Using TCP/IP-32

	Article: Q138571
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a NetBIOS name to be resolved is not in the local DNS, and you are using
	TCP/IP-32 for Windows for Workgroups 3.11, the NetBIOS name may not traverse up
	on the Domain name hierarchy and therefore may not be resolved.
	
	NOTE: Ping, Telnet, and FTP, which uses Host name (Non-NetBIOS names) resolution,
	work fine.
	
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below.
	
	The search order is now as follows:
	
	Assume the computer is named "yourcomputer", and it's DNS domain is configured to
	be "group1.company1.com." Also, two extra domain suffixes are configured,
	"company2.com" and "company3.com"
	
	Now if you type NET VIEW \\YOURCOMPUTER, dns queries will be tried in the
	following order until one works:
	
	- yourcomputer.group1.company1.com
	
	- yourcomputer.company1.com
	
	- yourcomputer.com
	
	- yourcomputer.company2.com
	
	- yourcomputer.company3.com
	
	If none of these succeed, then Error 53 appears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups version 3.11b. A fix is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words: 3.11 wfw wfwg prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b
	
	=============================================================================
	

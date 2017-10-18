---
layout: page
title: "Q133279: Using a DNS to Resolve NetBIOS Names Not Ending In &lt;00&gt; or &lt;20"
permalink: kb/133/Q133279/
---

## Q133279: Using a DNS to Resolve NetBIOS Names Not Ending In &lt;00&gt; or &lt;20

	Article: Q133279
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Attempts to use a domain name service (DNS) server to resolve NetBIOS names that
	do not end in <00> or <20> fail with error 53.
	
	CAUSE
	=====
	
	Microsoft NetBIOS over TCP/IP supports the use of DNS to resolve NetBIOS names.
	However, TCP/IP-32 versions 3.11, 3.11a, and 3.11b successfully resolve NetBIOS
	names using DNS only if they are "standard" Microsoft networking workstation
	(00) or server (20) names. Other attempts fail with error 53.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups, versions 3.11, 3.11a, and 3.11b. A fix to this problem is in
	development, but has not been regression-tested and may be destabilizing in
	production environments. Microsoft does not recommend implementing this fix at
	this time. Contact Microsoft Product Support Services for more information on
	the availability of this fix.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b; WINDOWS:3.11
	
	=============================================================================
	

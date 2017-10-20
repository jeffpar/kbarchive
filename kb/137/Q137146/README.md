---
layout: page
title: "Q137146: SnaBase Now Limits Domain or Subdomain to 15 SNA Servers"
permalink: /kb/137/Q137146/
---

## Q137146: SnaBase Now Limits Domain or Subdomain to 15 SNA Servers

{% raw %}

	Article: Q137146
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	A new feature has been added to SNA Server in SNA Server 2.11 Service Pack
	1. Now, when the Snabase service starts (as it opens its configuration
	file), it checks the number of SNA Servers in its subdomain. If there are
	already 15 SNA Servers found in the configuration file, the SnaBase service
	fails to start, Event 702 is logged into the Windows NT application log,
	and a warning is displayed.
	
	If the SnaBase service finds its own computer name in the configuration
	file, COM.CFG, it does not stop or log an event, even if there are more
	than 15 servers in the subdomain. This ensures that users who already have
	more than 15 servers in their subdomain can use the updated SNABASE.EXE.
	However, it does prevent an Administrator from adding any new SNA Servers
	to the Windows NT domain or SNA Server "subdomain" which has already
	reached its limit.
	
	This feature was added to prevent complications resulting from too many SNA
	Servers in the same subdomain. If there is a need for 15 or more servers in
	aggregate, subdomains should be used.
	
	NOTE: See the section entitled "G.2. Addition to SNA Server Planning Guide"
	in the SNA Server 2.11 README.WRI file for more information about dividing
	SNA Servers into separate subdomains.
	
	
	SYMPTOMS
	========
	
	
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.11 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

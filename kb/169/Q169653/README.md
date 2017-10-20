---
layout: page
title: "Q169653: XADM: Explanation of Replication Inbound and Outbound Sites"
permalink: /kb/169/Q169653/
---

## Q169653: XADM: Explanation of Replication Inbound and Outbound Sites

{% raw %}

	Article: Q169653
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the Inbound Sites and Outbound Sites tabs of the Directory
	Replication Connector (DRC) property pages. Sites appearing in these two
	property pages depend on the relation of these sites to the site you are
	replicating with.
	
	MORE INFORMATION
	================
	
	Inbound sites include the site that is directly connected to this particular
	DRC, plus any other site that we indirectly know of through this directly
	replicated site. Inbound sites are all sites from which the local site receives
	directory information through this DRC.
	
	Outbound sites include the current site being looked at in the Administrator
	program and any other site that is known about through replication from
	replication connectors to other sites in the Inbound sites page. Outbound sites
	are those sites that the local bridgehead server sends information to, as
	specified in the DRC's General property page. The site in the General property
	page is also known as the directly connected site.
	
	The following example better explains this concept. Suppose you have a 5 site
	organization: A, B, C, D, and E. Directory Replication is set up so that A
	replicates with B and C, and A also replicates with D and E. This configuration
	is shown in the following figure:
	
	  A-B-C
	   |
	   D
	   |
	   E
	
	Examining the Sites tab for the replication connectors on each site will reveal
	the following:
	
	  Site A's connector to B
	  Inbound: B, C, D, and E
	  Outbound: A
	
	  Site B's connector to A
	  Inbound: A
	  Outbound: B, C, D, and E
	
	  Site B's connector to C
	  Inbound: C
	  Outbound: A, B, D, and E
	
	  Site B's connector to D
	  Inbound: D, E
	  Outbound: A, B, C
	
	  Site C's connector to B
	  Inbound: A, B, D, and E
	  Outbound: C
	
	  Site D's connector to B
	  Inbound: A, B, C
	  Outbound: D, E
	
	  Site D's connector to E
	  Inbound: E
	  Outbound: A, B, C, and D
	
	  Site E's connector to D
	  Inbound: A, B, C, and D
	  Outbound: E
	
	One of the most illustrative examples would be Site D's connector to Site B.
	Notice that Inbound sites include A, B, and C. This is because site D is
	directly connected to Site B, and it is through site B that site D gets
	replication information for sites A and C. For outbound sites we see site D and
	site E because site D has another replication connector to site E, and Exchange
	directory replication passes on replication information of all Inbound sites to
	all Outbound sites.
	
	For more information refer to the Exchange Server Administrator's Guide, Chapter
	13.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

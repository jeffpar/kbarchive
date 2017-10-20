---
layout: page
title: "Q159186: XCON: Mail Sent Outside Site via X.400 Takes Illogical Route"
permalink: /kb/159/Q159186/
---

## Q159186: XCON: Mail Sent Outside Site via X.400 Takes Illogical Route

{% raw %}

	Article: Q159186
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail destined outside of the site via X.400 Connector may be rerouted out to
	another seemingly "illogical" and higher cost site, and then routed back into
	the site with the X.400 Connector to the target site. The message then routes
	out the appropriate connector.
	
	Additionally, the GWART0.MTA within a site will list a redundant, "circular"
	route back into itself similar to the following:
	
	  c=<US>
	   a=<SOME-NAME>
	    p=<COMPANY>
	          ROUTE1, 0001
	          /O=SOME-NAME/OU=NEW-YORK/../CN=ROUTE1
	
	          SITE CONNECTOR (UNITED KINGDOM), 0002
	          /O=SOME-NAME/OU=NEW-YORK/../CN=SITE CONNECTOR (UNITED KINGDOM)
	          /O=SOME-NAME/OU=UNITED KINGDOM/../CN=SITE CONNECTOR (NEW-YORK)
	
	According to the above GWART taken from a server in the NEW-YORK site, messages
	addressed to the address space "c=US;a=SOME-NAME;p=COMPANY;..." have two
	possible routes: the lowest cost is via ROUTE1, with a cost of 0001; the second
	route is a site connector to the United Kingdom, but it is a circular route that
	routes out to UNITED KINGDOM, and returns back into the NEW-YORK site.
	
	In extreme cases, this may contribute to slow mail delivery, MTA queue backlogs,
	and possibly non-delivery reports (NDRs).
	
	CAUSE
	=====
	
	The routing calculation logic calculates all possible routes, including circular
	routes. The algorithm then filters out the circular routes, removing them from
	the routing information database (RID). There was a bug in the filtering process
	that resulted in a failure to remove the last circular route.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. On the Configuration menu, click Site Addressing.
	
	2. Clear the "Share address space with other X.400 systems" check box.
	
	NOTE: If Microsoft Exchange Server is deployed in a messaging environment where
	it must coexist with an existing X.400 message handling system (MHS) and share
	the same address space, the "Share address space" check box must be selected. If
	Microsoft Exchange Server must share an existing address space, there is no
	workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	One server in a site is "responsible" for rebuilding the RID for the site. The
	server maintaining this responsibility will have its Distinguished Name (DN)
	listed under raw properties for "Configure, Site Addressing, Rid- Server".
	
	MTAs within the site use an image of this routing table in memory and maintain
	two copies of it in text files on disk
	
	NOTE: Do not modify these files. Editing the following files will not affect
	routing):
	
	  \EXCHSRVR\MTADATA\GWART0.MTA and GWART1.MTA.
	
	GWART0 is a copy of what is currently in use, and GWART1 is a copy of the RID
	prior to the current one. The RID is automatically rebuilt approximately 10
	minutes after any change affecting routing replicates within the site.
	Additionally, it is rebuilt according to the schedule specified under
	"Configuration, Site Addressing, Routing Calculation Schedule" and can be forced
	to rebuild under: "Configuration, Site Addressing, Routing, Recalculate Routing"
	or "<servername>, Message Transfer Agent, Recalculate Routing."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

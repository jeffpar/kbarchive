---
layout: page
title: "Q180547: XADM: Messages Generate NDR When Sent to Certain Sites"
permalink: /kb/180/Q180547/
---

## Q180547: XADM: Messages Generate NDR When Sent to Certain Sites

{% raw %}

	Article: Q180547
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any message sent from the local Exchange Server site to another specific site is
	immediately rejected with a non-delivery report (NDR). The Event Log typically
	contains 254, 142, and 290 information and warning events similar to the
	following:
	
	  254 - MSExchangeMTA - X.400 Service - "Unable to correctly route the DN
	        ... address using information in the gateway address routing
	        table.
	        The O/R address matches the local site address space
	
	  142 - MSExchangeMTA - X.400 Service - "The MTA was unable to route the
	        recipient DN ... the X.400 address ... the message MTSID... Check
	        the routing table for a possible incorrect routing configuration.
	
	  290 - MSExchangeMTA -  X.400 Service - "An NDR has been generated for
	        MESSID, it was originally destined for DN ... and was to be
	        redirected to ."
	
	CAUSE
	=====
	
	One or more recipients in the local site have additional X.400 e-mail addresses
	defined in their properties that duplicate the address space or spaces of the
	destination site for the message.
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem, depending on your configuration:
	
	- If the additional e-mail addresses causing the problem were added in error,
	  you can remove them from whatever recipients have such addresses specified.
	  If the problem occurs suddenly, it is likely that someone has recently
	  created or modified a recipient in the site with an additional e-mail address
	  that duplicates the address space of the other site to which you can no
	  longer send messages. In this case, you can try listing the mailboxes in
	  order of date modified to try to isolate the mailboxes that were changed.
	
	- If the addresses are X.400 addresses and the address space of the other site
	  is truly shared with the local site (up to OU4), you can enable sharing of
	  X.400 address spaces in the Exchange Administrator program (select the "Share
	  address space with other X.400 systems" check box in the Site Addressing
	  object). This option should be used with care, as it disables the sanity
	  checks and makes it possible to create undetected loops if the organization
	  routing is not configured correctly.
	
	MORE INFORMATION
	================
	
	X.400 e-mail addresses for all recipients in a site are scanned each time
	routing is recalculated, and a compilation of these is stored in a property of
	the Site Addressing object. This property is consulted when the MTA routes
	messages; if the destination address space of a message matches an address space
	in this property, the MTA sends an NDR on the message because routing for the
	message is ambiguous, unless the sharing of X.400 addresses spaces has been
	enabled (it is not enabled by default).
	
	This behavior is by design and represents normal sanity checking performed by the
	MTA.
	
	
	Additional query words: X400 address share routing calculation
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

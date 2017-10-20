---
layout: page
title: "Q181948: XCON: Message Size Grows When Re-routing on Same Server"
permalink: /kb/181/Q181948/
---

## Q181948: XCON: Message Size Grows When Re-routing on Same Server

{% raw %}

	Article: Q181948
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusagekbfixlist
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, Japanese version 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If there exist two or more possible routes between two Microsoft Exchange Server
	computers, and one of those servers goes down, messages will attempt to reroute
	between all the possible connections until their hop count is exceeded.
	
	It is possible that before the hop count is exceeded, the server with the
	rerouting message may run out of disk space. This is caused by the successive
	rerouting process, which causes the header of the routed messages to grow in
	size.
	
	When the disk space becomes low, the Exchange Administrator may see the following
	errors generated in the Windows NT Application log:
	
	  Event ID: 9411
	  Source:   MSExchangeMTA
	  Type:     Error
	  Category: Field Engineering
	  Description:
	  The MTA is terminating because the disk where MTADATA is located has
	  less than 10 MB of space, or an error occurred while trying to check for
	  free space on the disk. If disk space is low, free up some disk space
	  and restart the MTA. NT Error code returned: 0(non-zero indicates an
	  error while checking for free space)[BASE IL TIMER 3](16)
	
	  Event ID: 9406
	  Source: MSExchangeMTA
	  Category: Resource
	  There is not enough Performance Monitor memory to display the MTA
	  Connections information. Stop attached Performance Monitors and
	  re-start the MTA. [BASE TIMER 3] (14)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem has been corrected in Microsoft Exchange
	Server version 5.5.
	
	MORE INFORMATION
	================
	
	If two Exchange Server computers are connected with two or more connections and
	one of those servers goes down, messages (addressed to the server that is down)
	on the server that is up will cycle through all possible routes between them.
	
	A problem exists in Exchange versions 4.0 and 5.0 when, as the message passes
	through each turn at a connector, the P1 header grows in size to reflect the
	turn. This header, over time, can become quite large at the hop count for each
	connector is 512. So if there are two connectors between the two servers, the P1
	header information will grow in size about 1,024 times.
	
	This additional information is not needed for reroutes on a single server, So, in
	Exchange Server version 5.5, the additional header information is not added, and
	the message size remains the same.
	
	Note that reroutes that span separate Exchange Server computers cause the P1
	header to grow, because this is required when hopping between separate message
	transfer agents (MTAs).
	
	Additional query words: p1 large disk full
	
	======================================================================
	Keywords          : kbusage kbfixlist
	Technology        : kbHLangJapanese kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

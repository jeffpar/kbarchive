---
layout: page
title: "Q169672: XCON: Missing X.400 Route in GWART"
permalink: kb/169/Q169672/
---

## Q169672: XCON: Missing X.400 Route in GWART

	Article: Q169672
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server Message Transfer Agent (MTA) may fail to add a route for an
	X.400 connector to the Gateway Address Routing Table (GWART) when calculating
	the routing. The X.400 route will fail to appear under Site Addressing, Routing
	in Exchange Admin. In addition, the X.400 route will not be present in the
	GWART0.MTA text file.
	
	The X.400 connector object will appear under the appropriate site's list of
	connectors in admin and any changes to the X.400 connector (e.g. modifying the
	administrative note on the connector to test replication) will be replicated to
	the site that is missing the route. Other sites in the organization may or may
	not be missing the same route.
	
	Any server that is missing the route to this X.400 connector will not be able to
	send or reply to messages originating from the X.400 connector.
	
	The following example illustrates this configuration problem:
	
	                          X.400 System
	                               ^
	                               |
	               X.400 Connector |
	          c=US;a=ABC;p=ABCX400 |
	                               |
	                               V
	  +--------+  Site Connector  +--------+
	  | SITE A |<---------------->| SITE B |
	  +--------+                  +--------+
	  c=US;a=ABC;p=ABCMAIL        c=US;a=ABC;p=ABCMAIL
	
	In this example, the route for the X.400 connector would be missing from the list
	of routes under the Site Addressing object in Site A. The X.400 site addressing
	for Site A was defined as c=US;a=ABC;p=ABCMAIL. The X.400 site addressing for
	Site B was also defined as c=US;a=ABC;p=ABCMAIL. The X.400 connector's address
	space was defined as c=US;a=ABC;p=ABCX400.
	
	Site B's site addressing contains the route for the X.400 connector and messages
	can be sent successfully over this connector. Site A knows that the connector is
	defined in Site B but the route for the X.400 connector is not available. Thus,
	mail cannot be sent to anyone over the X.400 connector from Site A.
	
	This problem is caused when an Exchange mailbox has been defined with an X.400
	address that uses the address space of the X.400 connector in the site that is
	missing the route. In this example, this problem could have been caused if a new
	mailbox was added to a server in Site A with an X.400 address similar to the
	following:
	
	  c=US;a=ABC;p=ABCX400;s=Doe;g=John;
	
	When this X.400 address was entered for the mailbox, a new entry was added to the
	list of site proxy address spaces. This information can be seen by performing
	the following steps:
	
	1. Start the Exchange Server Administrator program in raw mode.
	
	2. Select the Site Addressing object for Site A.
	
	3. View the raw properties by pressing SHIFT+ENTER.
	
	4. Select the Site-Proxy-Space object attribute.
	
	In this example, there would now be two address spaces listed for this
	attribute:
	
	  c=US;a=ABC;p=ABCMAIL
	  c=US;a=ABC;p=ABCX400
	
	Only the first address space would have been listed prior to creating the mailbox
	with the X.400 address of c=US;a=ABC;p=ABCX400;s=Doe;g=John. The missing route
	is caused by the presence of the second address space that shares the same
	address space as the X.400 connector.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Modify the mailbox's X.400 address in Site A so that it no longer uses the
	  same address space as the X.400 connector does. In the example above, the
	  mailbox's X.400 address would be modified to:
	
	     c=US;a=ABC;p=ABCMAIL;s=Doe;g=John
	
	The route for the X.400 connector should appear in the site's GWART the next time
	routing is calculated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

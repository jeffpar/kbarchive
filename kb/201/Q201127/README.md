---
layout: page
title: "Q201127: XIMS: Rerouting SMTP Mail to Another Organization"
permalink: kb/201/Q201127/
---

## Q201127: XIMS: Rerouting SMTP Mail to Another Organization

	Article: Q201127
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up the Microsoft Exchange Server Internet Mail
	Service to reroute SMTP message to different Exchange Organizations using the
	SMTP protocol.
	
	MORE INFORMATION
	================
	
	Scenario
	--------
	
	- Two Exchange Organizations on the same segment:
	
	   - Org1: Microsoft (domain: Microsoft.com) (Site:abc) (Server:123)
	   - Org2: Microsoft-Europe (domain: Microsoft-Europe.com and
	     Microsoft-Africa.com) (Site:def) (Server:456)
	
	- MX records for all domains are pointing to the Exchange Server (Microsoft)
	
	Configuration
	-------------
	
	1. On the Microsoft-Europe Organization, open the Internet Mail Service
	  Properties page, and on the Routing tab, remove the Microsoft.com domain.
	
	2. Keep the Microsoft-Europe.com and Microsoft-Africa.com domains as inbound.
	
	3. Stop and re-start the Internet Mail Service.
	
	4. On the Microsoft Organization, open the Internet Mail Service Properties
	  page, and on the Routing tab, remove all domains except Microsoft.com; keep
	  Microsoft.com as inbound only.
	
	5. Go to the Connections tab, and under Message Delivery, click E-mail Domain.
	  In the "Forward all messages for this domain to host" box, add the
	  Microsoft-Europe.com and Microsoft-Africa.com domains, and enter the IP of
	  the Microsoft-Europe mail server.
	
	6. Stop and re-start the Internet Mail Service.
	
	7. Make sure that either Domain Name System (DNS) is configured with correct
	  host records, or use the Hosts file for proper hostname resolution.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

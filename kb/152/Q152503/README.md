---
layout: page
title: "Q152503: XADM: How to Eliminate DNS's MX records with Multiple Sites"
permalink: kb/152/Q152503/
---

## Q152503: XADM: How to Eliminate DNS's MX records with Multiple Sites

	Article: Q152503
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MX record on DNS server is used to map a Fully Qualified Domain Name (FQDN)
	to a specific Microsoft Exchange Site or Host. This record can be eliminated if
	you do not want to use MX records on your DNS server. It can be done by changing
	the Microsoft Exchange Site Address to match the FQDN ("A" record) on your DNS
	server.
	
	MORE INFORMATION
	================
	
	You can change this in the Microsoft Exchange Administrator program on the Site
	Addressing tab of the Site Addressing Property Page. When you are prompted to
	change the Mailbox address, reply yes so that all user SMTP e- mail addresses
	match the Site SMTP address. This must be done to all Microsoft Exchange Sites
	within the Organization.
	
	The drawback to this type of configuration is that no two SMTP addresses can be
	the same within an Organization. Microsoft Exchange will keep this from
	happening on new mailbox creations if Directory Replication has happened between
	every Site in the Organization, and providing that no two instances of the
	Microsoft Exchange Administrator program are creating the same SMTP address at
	the same time.
	
	For faster name resolution, it is common to have an MX defined, even if the A
	record is the same. This information is from the Microsoft Exchange Concepts and
	Planning Guide, page 46.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

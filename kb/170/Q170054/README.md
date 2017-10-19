---
layout: page
title: "Q170054: XCON: Read Receipt May Not Be Returned From ISOCOR MTA"
permalink: /kb/170/Q170054/
---

## Q170054: XCON: Read Receipt May Not Be Returned From ISOCOR MTA

	Article: Q170054
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a Microsoft Exchange user sends a message with a read receipt request to an
	ISOCOR message transfer agent (MTA) user, the ISOCOR MTA may not send back a
	read notification report.
	
	CAUSE
	=====
	
	This behavior can occur when the Microsoft Exchange user sends the message to an
	ISOCOR user with the following X.400 address:
	
	  C=us;A-md;P=prmd;O=organization;S=surname;CN=common-name
	
	When the CN address field is used over a 1984 mode X.400 connection, it is moved
	to the Domain Defined Attribute (DDA) field during the downgrade process. If the
	message also contains a delivery receipt request, the ISOCOR MTA sends that, but
	does not send back a read notification report. This has been found to be a
	limitation in the ISOCOR ISOPLEX 800 v.1.15. This behavior is by product design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

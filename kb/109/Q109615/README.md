---
layout: page
title: "Q109615: SMTP: Return-Receipt-To Field Is Nonstandard"
permalink: /kb/109/Q109615/
---

## Q109615: SMTP: Return-Receipt-To Field Is Nonstandard

	Article: Q109615
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	The Microsoft Mail Gateway to SMTP receives messages from the SMTP world
	for delivery to Microsoft Mail users. Some incoming messages may specify a
	field in the RFC 822 headers called "Return Receipt To". This field is NOT
	a part of the standard (RFC 822), and is an innovation of some versions of
	the Sendmail program.
	
	Although this field is not part of the RFC, it is supported by the SMTP
	gateway.
	
	The Sendmail program is the mailer program commonly used on UNIX TCP/IP
	hosts. Other mailer programs include PMDF, and MMDF. Some mailer programs
	use "Rr" instead of the field name "Return Receipt To" to perform the
	same function.
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

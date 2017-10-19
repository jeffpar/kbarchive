---
layout: page
title: "Q151976: TN3270E Users Do Not Need Windows NT User Accounts"
permalink: /kb/151/Q151976/
---

## Q151976: TN3270E Users Do Not Need Windows NT User Accounts

	Article: Q151976
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	TN3270E users do not need a Microsoft Windows NT user account to access SNA
	resources through the SNA Server TN3270 Service, as defined by the TN3270
	protocol.
	
	The SNA Server TN3270 Service can be configured to assign LUs to specific
	IP addresses, though TN3270 clients are not authenticated against the
	Windows NT user accounts database.
	
	Additional query words: prodsna tn3270
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0,4.0
	
	=============================================================================
	

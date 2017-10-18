---
layout: page
title: "Q193703: XADM: Error Msg: Event ID 1189; IMAP4 Object Not Found"
permalink: kb/193/Q193703/
---

## Q193703: XADM: Error Msg: Event ID 1189; IMAP4 Object Not Found

	Article: Q193703
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear on a computer running Exchange Server 5.0
	that is in a site containing computers running Exchange Server 5.5:
	
	  Event ID: 1189
	  Source: MSExchangeIS
	  The object /o=Organization/ou=Site/cn=Configuration/cn=Servers/cn=Server
	  Name/cn=Protocols/cn=IMAP4 was registered for directory notification by
	  an Internet protocol, but the object could not be found in the
	  directory, ignoring.
	
	WORKAROUND
	==========
	
	
	
	RESOLUTION
	==========
	
	This error message can be disregarded. IMAP4 does not exist in Exchange 5.0, so
	the error is reported.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

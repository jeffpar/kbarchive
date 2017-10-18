---
layout: page
title: "Q262303: XFOR: Mail Sent to Windows 2000 Contact from Notes/OL May Loop"
permalink: kb/262/Q262303/
---

## Q262303: XFOR: Mail Sent to Windows 2000 Contact from Notes/OL May Loop

	Article: Q262303
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages sent to a mail-enabled Windows 2000 contact for Lotus Notes may start
	to loop, and the Microsoft Exchange Connector for Lotus Notes does not detect
	it.
	
	CAUSE
	=====
	
	The current design of the transport does not generate the appropriate trace
	information for the expansion of the distribution list, or for the redirection
	of messages. All messages are assumed to be non-looping by the Message Transfer
	Agent (MTA).
	
	WORKAROUND
	==========
	
	To work around this behavior, place the AllowUnresolvedAddresses=No parameter in
	the [LME-GWISE-MEXIN] or [LME-NOTES-MEXIN] section, or place the
	AllowUnresolvedAddresses parameter in the registry of the Notes Connector, and
	use an asterisk (*) for the address space. A non-delivery report (NDR) should
	then be generated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 2000 Server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

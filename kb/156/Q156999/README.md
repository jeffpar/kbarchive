---
layout: page
title: "Q156999: XFOR: SMTP Headers Lost for DOS MS Mail Client"
permalink: kb/156/Q156999/
---

## Q156999: XFOR: SMTP Headers Lost for DOS MS Mail Client

	Article: Q156999
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an MS-DOS Microsoft Mail client receives SMTP mail through the Microsoft
	Exchange Internet Mail Connector (IMC) to a Microsoft Mail Postoffice, the
	recipient will not see the SMTP headers.
	
	CAUSE
	=====
	
	The Microsoft Exchange Microsoft Mail Interchange (MSMI) stores the SMTP headers
	in the Transport Neutral Encapsulation Format (TNEF) part of the message when it
	pulls the message from Microsoft Exchange Server and creates a Microsoft Mail
	file for it. The MS-DOS Microsoft Mail client will not interpret any of the TNEF
	data, unlike the Window 16 and Windows 32 clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

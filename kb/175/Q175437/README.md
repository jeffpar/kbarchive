---
layout: page
title: "Q175437: XFOR: Thai Characters not Translated by the MS Mail Connector"
permalink: /kb/175/Q175437/
---

## Q175437: XFOR: Thai Characters not Translated by the MS Mail Connector

	Article: Q175437
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Mail messages containing Thai characters sent between a Microsoft Exchange
	client on a Microsoft Exchange Server and a Microsoft Mail client on a Microsoft
	Mail for PC Networks Postoffice are not translated correctly. These symptoms
	occur when the message is sent via the Microsoft Mail Connector.
	
	CAUSE
	=====
	
	The Microsoft Exchange Microsoft Mail Connector requires a Primary Language for
	clients, to allow correct conversion for a Microsoft Mail for PC Networks
	Postoffice. The Primary Language is set from the Interchange panel when viewing
	the properties page of the Microsoft Mail Connector in the Microsoft Exchange
	Administrator program. Thai is not a valid option to set for this conversion, so
	the correct conversion does not happen. The fix indicated below will allow the
	Primary Language to be set to Thai.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	MORE INFORMATION
	================
	
	Because different Microsoft Mail for PC Networks client versions require a
	different conversion, there is more than one fix required to add this
	functionality. The Windows for Workgroups (Thai) client, Microsoft Mail 3.5
	(USA), and Microsoft Mail 3.2 (USA) client are the three clients tested that
	exhibit this incorrect behavior.
	
	Additional query words: SP1 MSMI WFW LANGUAGE PCMAIL
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

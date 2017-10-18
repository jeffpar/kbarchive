---
layout: page
title: "Q175978: XFOR: List of Reserved Microsoft Mail Network Names"
permalink: kb/175/Q175978/
---

## Q175978: XFOR: List of Reserved Microsoft Mail Network Names

	Article: Q175978
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange Server and configure connections in the
	Microsoft Mail Connector Connections tab, you may receive the following error:
	
	  <network name> is a reserved network name. Enter a
	  different name.
	
	CAUSE
	=====
	
	This error occurs when you enter a reserved name for the Microsoft Mail network
	name. The following list contains the names that cannot be used as network
	names:
	
	    ATTMAIL            GTE           SMTP
	    COMPUSERVE         MCI           SNADS
	    DISOSS             MHS           SOURCE
	    EASYLINK           MSMAIL        VMGATE
	    ENVOY              OV            X400
	    FAX                PROFS         *EMS
	
	These are network names of some common gateways for Microsoft Mail, which is why
	they are reserved. If the network name for any Microsoft Mail postoffice is in
	this list, then you will not be able to connect to that postoffice when you use
	the Microsoft Mail Connector.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

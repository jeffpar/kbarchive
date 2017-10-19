---
layout: page
title: "Q178303: XADM: Chat 5.5 Err Msg: Unable To Start Microsoft Chat Service"
permalink: /kb/178/Q178303/
---

## Q178303: XADM: Chat 5.5 Err Msg: Unable To Start Microsoft Chat Service

	Article: Q178303
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Microsoft Chat Server version 5.5 from the Microsoft Exchange
	Server 5.5 CD, setup may report the message "Unable to start Microsoft Chat
	Service," although the service is started. This message occurs near the end of
	the "copying files" stage of setup.
	
	CAUSE
	=====
	
	When you install Microsoft Chat Server version 5.5 over an existing Chat 1.0
	installation and the Chat 1.0 services are running, setup will incorrectly
	report that it is unable to start the services and tell you to check the event
	log for further details.
	
	WORKAROUND
	==========
	
	The services should be started and the message can be ignored.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	

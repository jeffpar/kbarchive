---
layout: page
title: "Q153097: XFOR: Apple Talk MTA not Transferring Mail"
permalink: kb/153/Q153097/
---

## Q153097: XFOR: Apple Talk MTA not Transferring Mail

	Article: Q153097
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When messages are sent to the Apple Talk queue and are not delivered to the
	%exchange_root%\connect\msmcon\maildata\macgate\store\pctomac directory, the
	service account is not able to access the mailbag on the Microsoft Mail
	Connector postoffice.
	
	CAUSE
	=====
	
	The Apple Talk service will attempt to deliver a message from the Apple Talk
	queue to the Microsoft Mail Connector postoffice. If the postoffice mailbag used
	by the Apple Talk queue is corrupt, doesn't exist, or is inaccessible due to
	permissions problems, messages will appear to be stuck in the queue.
	
	RESOLUTION
	==========
	
	The mailbag on the Microsoft Mail Connector postoffice used by the Apple Talk
	service needs to be recreated or rights need to be given to the service account
	for the specified directory. The 00000002.mbg mailbag and 00000002.key keyfile
	are used by the ATMTA to deliver mail from Microsoft Exchange to Apple Talk.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

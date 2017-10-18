---
layout: page
title: "Q271984: XADM: Event ID 1101 Error 0x8004010f with Background Processing"
permalink: kb/271/Q271984/
---

## Q271984: XADM: Event ID 1101 Error 0x8004010f with Background Processing

	Article: Q271984
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a routine background processing, the following event may be logged in the
	Application event log:
	
	  Event Source: MSExchangeISPri
	  Event ID: 1101
	  Description: Error 0x8004010f occurred during background cleanup on message
	  <number>
	
	CAUSE
	=====
	
	During routine background processing, the content of each mailbox size is
	checked against its limit. If a message contains a pointer to an attachment that
	is not found in the attachment table, this event is logged. The event may be
	logged if you use the ISScan utility to remove certain attachments because the
	messages have pointers to the attachments.
	
	RESOLUTION
	==========
	
	These events are harmless and disappear when no more messages that contain the
	removed attachment exist.
	
	You can use the following command in the ISInteg utility to resolve this
	behavior: Exchange Server 5.5:
	
	  "ISINTEG -PRI -FIX -TEST ALLTESTS" (without the quotation marks)
	
	Exchange 2000 Server:
	
	  "Isinteg -s <servername> -fix -test alltests" (without the quotation
	  marks)
	
	where <servername> is the netbios name of the Exchange 2000 server.
	
	MORE INFORMATION
	================
	
	The ISInteg utility is a standard utility that is installed with Microsoft
	Exchange Server. The ISInteg utility is located in the Exchsrvr\Bin folder.
	
	Additional query words: cleanup clean up extra
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

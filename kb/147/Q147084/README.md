---
layout: page
title: "Q147084: XFOR: Message Received from Unknown Dirsync Requestor"
permalink: kb/147/Q147084/
---

## Q147084: XFOR: Message Received from Unknown Dirsync Requestor

	Article: Q147084
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error message can be generated if the Microsoft Exchange Directory
	Synchronization service (DXA) receives a directory synchronization (dirsync)
	message from an unknown requestor.
	
	  Source: MSExchangeDX
	  Category: Event Handler
	  Event ID: 136
	  "Message received from unknown DirSync requestor -
	  X400:/ddat=ms /ddav="NEWTORK/POSTOFFICE/$SYSTEM".
	
	MORE INFORMATION
	================
	
	When a directory synchronization (dirsync) requestor or remote requestor is
	created, a custom recipient (CR) for the $SYSTEM of the MSMail postoffice (PO)
	is automatically generated. The MSExchangeDX component uses this to address
	dirsync messages. This CR is also used to identify valid remote dirsync
	requestors and DirSync servers.
	
	The MSExchangeDX component only deals with Distinguished Names (DN). When a
	message comes in, it is compared to the list of the DNs that the MSExchangeDX
	component knows about. If the DN doesn't match, it gets discarded.
	
	In this case, the MS Mail Connector is transporting the message, and as part of
	the hand-off, it tries to convert the MS proxy address of the sender into a
	known DN. When it fails, the MSExchangeDX component generates the above error
	message.
	
	Possible reasons for the DN lookup failing include multiple occurrences of an
	address. In other words, it can fail if the CR was created for the $SYSTEM
	account in two separate sites before those sites replicated. To correct the
	problem, you must look for both hidden and regular recipients to see if the CR
	for the particular PO already exists. If it does, the duplicate entry from the
	server or site that is not running the DirSync process must be deleted and the
	change must be replicated.
	
	Additional query words: dirsynch dir-sync
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

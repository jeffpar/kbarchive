---
layout: page
title: "Q194192: XADM: POP3 Client's Reply Message to Exchange User is NDRd"
permalink: kb/194/Q194192/
---

## Q194192: XADM: POP3 Client's Reply Message to Exchange User is NDRd

	Article: Q194192
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience the following symptoms:
	
	- A POP3 client receives a non-delivery report on a reply to a message sent by
	  a Microsoft Exchange Server user. The reply is returned as non-deliverable to
	  the POP3 client because the recipient name is not recognized. (Errors may
	  differ depending on which POP3 client is being used.)
	
	- The display name of the sending Exchange Server user contains extended
	  characters, and is formatted in the following manner: Lastname, Firstname.
	
	- When viewed from the POP3 client, the display name is broken into two
	  separate addresses separated by a semi-colon. (that is, Lastname; Firstname).
	
	NOTE: When the address is broken in two, the second address (Firstname in the
	above example) does preserve the correct Reply To address, therefore the message
	reply is actually delivered. The non-delivery report stems from the first
	address (Lastname in the above example), and results in the perception that the
	reply message was not delivered at all.
	
	CAUSE
	=====
	
	The Exchange Server information store converts the outgoing message to be in
	compliance with RFC 1522. The process emits a string (in this case the display
	name) that contains both a comma, and an extended character. Non- RFC 1522
	compliant POP3 clients do not handle this, and translate the comma in the
	address to a semi-colon.
	
	The information store now encloses the string in quotation marks, this allows
	both RFC-compliant and non-compliant POP3 clients to properly handle a string
	with commas and extended characters.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2422.0
	  Mdbmsg.dll   5.5.2422.0
	  Store.exe    5.5.2422.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: rfc 1522 eudora netscape pop3
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

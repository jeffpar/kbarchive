---
layout: page
title: "Q248664: XFOR: Cannot Reply All to SMTP Reply Received from Notes R5 User"
permalink: /kb/248/Q248664/
---

## Q248664: XFOR: Cannot Reply All to SMTP Reply Received from Notes R5 User

	Article: Q248664
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you compose a message that includes a Simple Mail Transfer Protocol (SMTP)
	one-off address and display name on the Cc line, and then send the message to a
	Lotus Notes recipient, the Notes recipient may reply all to the message. When
	you view the reply in an e-mail client, the SMTP address may appear in the
	following format:
	
	  "User1@Host1@SMTP@Domain1" <User1@Host1>@SMTP@Domain1
	
	Note that multiple SMTP addresses are appended, which is not the correct format.
	As a result, if you attempt to reply all to the original reply, the new reply
	cannot be delivered to the SMTP recipient. This issue is known to occur when the
	messages are sent between an Exchange Server computer and a Notes Release 5 (R5)
	server through the Exchange Notes Connector, and the Notes recipient uses a
	Notes R5 client to reply all to the original message.
	
	In addition, if you compose a new message that includes an implicitly
	encapsulated SMTP address and display name on the Cc line, and then send the
	message from a Notes R5 client to an Exchange Server recipient, the address may
	not be formatted correctly when the Exchange Server recipient views the message
	in an e-mail client. However, if the Exchange Server recipient replies all to
	the message, the reply is successfully delivered to the SMTP recipient.
	
	CAUSE
	=====
	
	This issue occurs when the Exchange Notes Connector incorrectly parses an SMTP
	address that includes a display name enclosed in quotes and containing one or
	more at signs (@).
	
	In addition, when an Exchange Server user replies all to a message that contains
	an address in this format, a complete address is used as a display name, causing
	Notes to construct an invalid Internet address in the following format:
	
	  ""User1@Host1@SMTP@Domain1" <User1@Host1>@SMTP@Domain1"
	  <User1@Host1>@SMTP@Domain1
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	In an implicitly encapsulated SMTP address, the user and domain names are
	enclosed in angle brackets (<>), but "@SMTP" is not included in the
	address.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

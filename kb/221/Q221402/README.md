---
layout: page
title: "Q221402: XWEB: OWA Message Body Does Not Display European Currency Symbol"
permalink: kb/221/Q221402/
---

## Q221402: XWEB: OWA Message Body Does Not Display European Currency Symbol

	Article: Q221402
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive e-mail that contains the new European currency symbol
	(ALT+0128) in Outlook Web Access (OWA), a question mark is displayed in the body
	of the message instead of the correct symbol.
	
	CAUSE
	=====
	
	Your Outlook Web Access server and Exchange Server computer are running
	different versions of Microsoft Windows NT Server. All of the servers should be
	running Microsoft Windows NT Server version 4.0 with Service Pack 4 (SP4)
	applied. Correct European symbol support requires SP4.
	
	MORE INFORMATION
	================
	
	Exchange Server administrators can set Internet encoding to the Windows-1252
	character set to send European symbols by using Internet protocols, for example,
	the Internet Mail Connector (IMC), Post Office Protocol (POP), and Internet
	Message Access Protocol (IMAP).
	
	
	Additional query words: dollar, euro
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

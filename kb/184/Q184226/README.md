---
layout: page
title: "Q184226: XADM: How Advanced Security Works on a Mailbox"
permalink: kb/184/Q184226/
---

## Q184226: XADM: How Advanced Security Works on a Mailbox

	Article: Q184226
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server supports three encryption algorithms: CAST-64, DES,
	and CAST-40. The level of encryption is determined by the Exchange and/or
	Outlook client, not the server. The U.S./Canada version of all Microsoft
	Exchange Client products supports all three algorithms, but defaults to CAST-64.
	All other international (localized) versions of Exchange Client support only the
	CAST-40 (40 bit) algorithm.
	
	MORE INFORMATION
	================
	
	When you are using a CAST-64 or DES client, Exchange sends the message based on
	the encryption information in the mailbox or individual mailboxes that it is
	sending to. The CAST-64 and DES clients can read all encrypted mail.
	
	When you are using a CAST-40 client, the directory for that mailbox is updated so
	that other users will send only 40-bit encryption. While you are logged on to
	the CAST-40 client, you can not read messages encrypted with CAST-64 or DES
	encryption.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

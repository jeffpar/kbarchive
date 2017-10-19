---
layout: page
title: "Q191504: XFOR: IMAP4 FETCH Command Returns Wrong Size"
permalink: /kb/191/Q191504/
---

## Q191504: XFOR: IMAP4 FETCH Command Returns Wrong Size

	Article: Q191504
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server returns the wrong message size in response to the
	IMAP4 command "FETCH RFC822.SIZE".
	
	CAUSE
	=====
	
	For performance reasons, Exchange Server defaults to returning an approximation
	of the message size. This can cause compatibility issues with some IMAP4
	clients.
	
	WORKAROUND
	==========
	
	You can configure Exchange Server to return the exact message size by doing the
	following:
	
	1. Start the Exchange Administrator program.
	
	2. Select <Organization>, and then <Site>. Select Configuration, and
	  then select the Protocols container.
	
	3. Double-click the "IMAP4 (Mail) Site Defaults" object.
	
	4. Clear the "Enable fast message retrieval" check box.
	
	This setting can also be changed on a per-server basis, as follows:
	
	1. Start the Exchange Administrator program.
	
	2. Select <Organization>, and then <Site>. Select Configuration,
	  select Servers, select <Server Name>, and click the Protocols
	  container.
	
	3. Double-click the "IMAP4 (Mail) Settings" object.
	
	4. Clear the "Enable fast message retrieval" check box.
	
	Changing this setting may decrease the overall performance of your Exchange
	Server information store while it is processing IMAP4 requests.
	
	MORE INFORMATION
	================
	
	The following clients were tested and worked well with Exchange Server with the
	Enable Fast Message Retrieval option selected:
	
	- Microsoft Outlook Express
	
	- Microsoft Outlook version 8.5
	
	- Netscape Messenger earlier than version 4.5
	
	- Qualcomm Eudora Pro
	
	- TeamWARE Embla 2.0
	
	- CyrusSoft Mulberry 1.3.0
	
	- Paladin Email 3.11
	
	- Orangesoft Inc WinBiff 2.11
	
	Other clients tested with the Enable Fast Message Retrieval option selected
	include:
	
	- Pine versions 3.96 and 4.0. Result: With Pine 3.96, either message content is
	  lost, or garbled text appears. PC Pine 4.0 stops responding on approximated
	  sizes.
	
	- ESYS Corp.s Simeon. Result: The client stops responding on approximated
	  sizes, most notably messages containing embedded message attachments.
	
	- Netscape Messenger 4.5. Result: Message content is lost because the client
	  performs partial fetches up to the approximated size given by the server.
	
	- Pine 4.04 displays the message: "Wrong message size. Continuing."
	
	NOTE: The third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

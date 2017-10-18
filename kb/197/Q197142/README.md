---
layout: page
title: "Q197142: XFOR: Internet Mail Service Stops when Routing Messages"
permalink: kb/197/Q197142/
---

## Q197142: XFOR: Internet Mail Service Stops when Routing Messages

	Article: Q197142
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Internet Mail Service is configured to forward messages to another
	Microsoft Exchange Server computer, and an input/output (I/O) error occurs while
	the Internet Mail Service is attempting to forward a message using the EHLO
	command, the Internet Mail Service may stop unexpectedly. For example, if the
	Internet Mail Service sends an EHLO command to the second server, and then the
	second server ends the connection before sending a response, the Internet Mail
	Service may stop unexpectedly.
	
	CAUSE
	=====
	
	When an I/O error occurs under these conditions, the Internet Mail Service may
	not recognize that routing is being performed. As a result, it may use an
	incorrect address that is NULL.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Internet Mail Service
	
	  File Name      Version
	  -------------------------
	  Msexcimc.exe   5.5.2429.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	After you apply the fix, if an input/output error occurs while the Internet Mail
	Service is attempting to forward a message using the EHLO command, the Internet
	Mail Service does not stop unexpectedly, and attempts to resend the message
	using the HELO command.
	
	Additional query words: router
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

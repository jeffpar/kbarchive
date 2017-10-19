---
layout: page
title: "Q175578: XCON: Autoforwarded Messages Not Handled Correctly"
permalink: /kb/175/Q175578/
---

## Q175578: XCON: Autoforwarded Messages Not Handled Correctly

	Article: Q175578
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Microsoft Exchange Server is connected to a Net-Tel Route400 MTA (1988
	mode) via an X.400 connector, and an X.400 message is sent to a recipient on the
	Net-Tel Message Transfer Agent (MTA) that autoforwards all messages to a
	Microsoft Exchange mailbox, the intended recipient of the message may receive a
	non-delivery report (NDR) similar to the following:
	
	  From: Administrateur syst?me
	  Sent: Thursday, April 17, 1997 9:09 AM
	  To: Test user
	  Subject: Non remis:
	
	  Your message did not reach some or all of the intended recipients.
	  Subject: Unknown
	  Sent: Unknown
	  The following recipient(s) could not be reached:
	  luc vieujean on 4/17/97 9:09:51 AM
	  Une erreur de syntaxe a ?t? d?tect?e dans le contenu du message
	  MSEXCH:MSExchangeMTA:EXCHGLUX:SNIFFY
	
	CAUSE
	=====
	
	The Net-Tel MTA creates a new message containing the contents of the original
	message, sets the originator to the address of the intended recipient of the
	original message, and sets the recipient to the address of the Microsoft
	Exchange mailbox that the original message is being forwarded to. Microsoft
	Exchange Server does not handle these autoforwarded messages correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

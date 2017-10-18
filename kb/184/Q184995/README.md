---
layout: page
title: "Q184995: XCON: Lotus SoftSwitch X.4 Rejects MAPI Attachments"
permalink: kb/184/Q184995/
---

## Q184995: XCON: Lotus SoftSwitch X.4 Rejects MAPI Attachments

	Article: Q184995
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message with an attachment through an X.400 Connector running
	1988 mode to a Lotus Soft-Switch (EMS) X.400 system, the message may be rejected
	By Lotus Soft-Switch.
	
	CAUSE
	=====
	
	The Lotus Soft-Switch system rejects the message because the gateway expects a
	different object identifier (OID) from Microsoft Exchange Server for the MAPI
	attachment. The expected OID is as follows:
	
	  iso(1) ansi(2) usa(840) microsoft(113556) mapi(3) tags (10) mapi-
	  attachment (2)
	  (ie 2a 86 48 86 f7 13 03 0a 02)
	  (1.2.840.1356.310.3)
	
	The OID supplied by Exchange is as follows:
	
	  (1.2.840.1.1356.310.3)
	  iso(1) ansi(2) usa(840) organization(1) microsoft(113556) mapi(3) tags
	  (10) mapi-attachment (2)
	  (ie 2a 86 48 01 86 f7 13 03 0a 02) P2_registered_identifier
	
	The Soft-Switch system does not expect the organization (1) value, therefore it
	fails with the MAPI attachment.
	
	WORKAROUND
	==========
	
	To work around this problem, use 1984-connection mode rather than 1988 mode. Or
	you can contact Lotus for a possible fix for the gateway.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server sends the correct OID value. The organization (1) must
	be included so it is valid in the ANSI-defined OID hierarchy.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: SOFTSWITCH LOTUS x.400 OID MAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q192115: XADM: Event ID 1026: Invalid Argument in MTSID"
permalink: /kb/192/Q192115/
---

## Q192115: XADM: Event ID 1026: Invalid Argument in MTSID

	Article: Q192115
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending e-mail to an Exchange Server recipient through a gateway, your
	message may not be delivered, and the non-delivery report (NDR) indicates that
	one or more arguments in the recipient was detected as being invalid. The
	Microsoft Exchange Server information store generates the following application
	event:
	
	  Event ID: 1026
	  Source:   MS ExchangeIS Private
	  Category: Transport General
	
	  An error occurred with the following call stack:
	  EcTferOutMessage():  0080070057
	  EcCreateOMTferOut():  0080070057
	  EcMTSIDFromSz():  0080070057
	
	CAUSE
	=====
	
	The Exchange Server information store returns an NDR for messages whose
	PR_MESSAGE_SUBMISSION_ID (MTSID) contain a slash (/), semi-colon (;), or
	quotation marks (") in the MTSID parts.
	
	WORKAROUND
	==========
	
	Connectors passing messages into Exchange Server should not use the slash,
	semi-colon, or quotation mark in the MTSID parts.
	
	MORE INFORMATION
	================
	
	Other than the delimiters the information store uses between parts of the MTSID,
	the format follows X.400 rules. An MTSID contains four parts:
	
	   Part Name   Stringized form      CharSet      Max Length
	   Country           C=             PRINTABLE        3
	   Admd              A=             PRINTABLE       16
	   Prmd              P=             PRINTABLE       16
	   LocalIdentifier   L=             IA5             32
	
	The information store simply parses the Stringized form and separates individual
	parts according to the delimiters (; or /). For information about character
	sets, refer to the X.400 specifications.
	
	The Stringized form can enclose the parts in quotation marks if the part contains
	a delimiter character. The information store correctly parses this, and
	generates the correct om_object for MTSID. However, when the information store
	gets an MTSID om_object from the message transfer agent (MTA), it does not check
	to see whether the part contains a delimiter and therefor, encloses it within
	quotation marks. So, quotation marks should not be used in the parts either.
	
	Normally the part headers (C, A, P, and L) are not case-sensitive. However, if
	the part header is capital L for LocalIdentifier, then PRINTABLE is assigned as
	the CharSet instead of IA5 (IA5 is the correct one to use). So, in order to
	guarantee correct behavior, you should use small "l" for the LocalIdentifier
	header.
	
	Additional query words: kbDSupport MAPI SAMPLEGW kbDSupport
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

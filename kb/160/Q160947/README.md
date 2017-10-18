---
layout: page
title: "Q160947: XCON: NDR and Event ID 290 in Event Log Sending X.400 Message"
permalink: kb/160/Q160947/
---

## Q160947: XCON: NDR and Event ID 290 in Event Log Sending X.400 Message

	Article: Q160947
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send an X.400 message with an O/R address that has a null
	Domain Defined Attributes (DDA) type or DDA value, you may receive a
	non-delivery report (NDR) that contains the text "content-type-not- supported."
	In addition, an event similar to the following may appear in the event log:
	
	  Source: MSExchangeMTA
	  Event: 290
	  Description: A non-delivery report (reason code unable-to-transfer and
	  diagnostic code content-type-not-supported) is being generated for message
	  <address>. It was originally destined for <address>;
	  <recipient>, and was to be redirected to. [MTA DISP:RESULT 16 136] (12)
	
	where <address> is the O/R address and <recipient> is the first
	recipient on the message.
	
	CAUSE
	=====
	
	Microsoft Exchange Server does not support null O/R address fields.
	
	
	RESOLUTION
	==========
	
	Configure the X.400 message so that the DDA type and DDA value are not null. The
	maximum value for the DDA type is 8 and the maximum value for the DDA value is
	128.
	
	Additional query words: x400
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

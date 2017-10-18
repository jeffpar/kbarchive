---
layout: page
title: "Q159291: XADM: Single Forward Slash Treated as Delimiter in DDA Value"
permalink: kb/159/Q159291/
---

## Q159291: XADM: Single Forward Slash Treated as Delimiter in DDA Value

	Article: Q159291
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create an X.400 personal address book (PAB) or one-off entry with the
	following format using the Microsoft Exchange client
	
	 /c=us/admd=attmail/dda.type=id/dda.value=fax(b)1234561111(/User One)
	
	when you send a message to this address, the message is returned to you. The
	non-delivery report (NDR) is similar to the following:
	
	  From: System Administrator
	  Sent: Tuesday, November 5, 1996 12:16 PM
	  Subject: Undeliverable: test using migrated PAB address
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject:test using migrated PAB address
	  Sent:11/5/96 12:16:08 PM
	
	  The following recipient(s) could not be reached:
	
	  'X.400' on 11/5/96 12:16:12 PM
	  The message was undelivered because the specified recipient postal address was
	  incorrect
	  MSEXCH:MSExchangeIS:SITE:SERVER
	
	CAUSE
	=====
	
	The Microsoft Exchange Information Store, during its preliminary check of the
	address, regards the single forward slash mark (/) as a delimiter and rejects it
	as invalid, causing the non-delivery report.
	
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Include a second slash mark (//) in any X.400 personal address book entries
	  created using the Microsoft Exchange client that require a forward slash mark
	  in the DDA value.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

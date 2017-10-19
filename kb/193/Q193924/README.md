---
layout: page
title: "Q193924: XFOR: Non-Delivery Report: Unknown Or Illegal User"
permalink: /kb/193/Q193924/
---

## Q193924: XFOR: Non-Delivery Report: Unknown Or Illegal User

	Article: Q193924
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending a message to a Simple Mail Transfer Protocol (SMTP) address, users
	and administrators of Microsoft Exchange may receive a non-delivery report (NDR)
	similar to the following:
	
	  From:   System Administrator
	  Sent:   Wednesday, March 11, 1998 8:22 AM
	  To:   Test User:Dekort, Ed
	  Subject:   Undeliverable: Test Message
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:   Test Message
	     Sent:   03/11/1998 8:21 AM
	
	  The following recipient(s) could not be reached:
	
	     Testing UpJohn:Dekort, Ed on 03/11/1998 8:22 AM
	     The recipient name is not recognized
	     MSEXCH:IMC:SciCor:SciCorUS:HAWK 3553 553 5.1.1 unknown or illegal
	     user: my.user.company.com
	
	CAUSE
	=====
	
	The SMTP address declared is not a fully qualified SMTP address.
	
	In the example used, the SMTP address, <my.user.company.com>, was probably
	intended to read <my.user@company.com>.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

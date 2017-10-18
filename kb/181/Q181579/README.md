---
layout: page
title: "Q181579: XCON: Private Messages Not Always Delivered"
permalink: kb/181/Q181579/
---

## Q181579: XCON: Private Messages Not Always Delivered

	Article: Q181579
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The original recipient of a private message may not receive the message as
	expected when the "deliver to both recipient and alternate recipient" option is
	enabled. (This option is selected on the Delivery Options tab of the recipient's
	mailbox in the Microsoft Exchange Administrator program.)
	
	The alternate recipient logically does not receive the private message. (See the
	Microsoft Knowledge Base article, Q178161 "Unable to Send Private Message to
	Exchange Recipient" for more information.)
	
	The sender receives the following non-delivery report (NDR):
	
	  From: System Administrator
	  Subject: Undeliverable: test message
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject: test message
	     Sent: 12/1/97 12:00 PM
	
	  The following recipient(s) could not be reached:
	
	     John Doe on 12/1/97 12:00 PM
	
	  Unable to deliver the message because the originator prohibited
	  redirection to an alternate recipient or the message was encrypted
	  MSEXCH:MSExchangeMTA:<SiteName>:<ServerName>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the new behavior the original recipient effectively receives the private
	message and the sender still receives a NDR because the alternate recipient is
	not deserved.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

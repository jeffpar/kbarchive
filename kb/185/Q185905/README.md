---
layout: page
title: "Q185905: XADM: Cannot Display Message with Content-Type Entry That Wraps"
permalink: /kb/185/Q185905/
---

## Q185905: XADM: Cannot Display Message with Content-Type Entry That Wraps

	Article: Q185905
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message with a Multipurpose Internet Mail Extensions (MIME) header
	that contains a Content-Type entry that wraps to a second line, the message may
	not be displayed correctly when you open it in an e-mail client. The message may
	be displayed in plain text instead of the format defined by the Content-Type
	entry.
	
	CAUSE
	=====
	
	Microsoft Exchange Server cannot convert messages with MIME headers that contain
	Content-Type entries that wrap to a second line. As a result, the messages are
	not displayed correctly when you open them in an e-mail client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: electronic messaging association (ema) imail
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

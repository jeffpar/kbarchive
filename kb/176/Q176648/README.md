---
layout: page
title: "Q176648: XADM: Change in Delivery Restrictions Does Not Update"
permalink: /kb/176/Q176648/
---

## Q176648: XADM: Change in Delivery Restrictions Does Not Update

	Article: Q176648
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	If you send a message to a distribution list (DL) that is configured to
	reject messages from you, you will receive a Non-Delivery Receipt (NDR). If
	the DL is modified so that it does not reject messages from you, and you
	immediately try to resend the message, you may still receive an NDR. This
	is because the DL information is being cached by the message transfer agent
	(MTA). It takes 60 seconds for the change to be detected by the MTA.
	Therefore, if you wait 60 seconds before trying to send the message again,
	you will not receive an NDR.
	
	SUMMARY
	=======
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

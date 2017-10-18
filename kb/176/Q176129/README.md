---
layout: page
title: "Q176129: XCON: Cannot Reply to Messages from User with Dual DDA Address"
permalink: kb/176/Q176129/
---

## Q176129: XCON: Cannot Reply to Messages from User with Dual DDA Address

	Article: Q176129
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to reply to a message that originates from a Defense Messaging
	System (DMS) user whose mailbox has dual DDA fields defined in its X.400
	address, your reply is not received. Also, no non-delivery report (NDR) is
	generated.
	
	CAUSE
	=====
	
	When dual DDAs are used, the DDA does not get mapped into the X.500
	Distinguished Name (DN); it stays in the DDA field. Consequently, no DN exists
	on the originator. In actuality, there is a DDA that is unknown to the
	originator of the message.
	
	The lack of an NDR in DMS occurs because the incoming reply is dropped at the
	Multi-Function Interpreter (MFI), because there is no resolvable address. The
	MFI, also referred to as Multifunction Gateway (MFG) allows the translation of
	messages from one format to another. All connectivity outside of DMS must go
	through the MFI so the message can be downgraded to a non-DMS compliant message.
	The MFI provides gateway translation between mail systems, including AUTODIN
	(JANAP128), ACP123 with P42 and P772, ACP127 (NATO's version of AUTODIN), SMTP
	RFC822, SMTP/MSP, X.400 P2 and P22, and other legacy systems as required.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q177958: XADM: BCC Recipient Becomes TO Recipient"
permalink: /kb/177/Q177958/
---

## Q177958: XADM: BCC Recipient Becomes TO Recipient

	Article: Q177958
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You send a message with a Compuserve Mail recipient on the BCC line. The message
	arrives with the Compuserve recipient's name in the To line rather than the BCC
	line.
	
	CAUSE
	=====
	
	This may occur because of the non-conformity to RFC822. Because the TO and CC
	lines are left blank when addressing the message, the header for the message is
	considered invalid and the addressee on the BCC line is moved to the TO line to
	conform to RFC821.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Microsoft Exchange Server version
	5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	A fix to correct this problem has been included in Exchange Server version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

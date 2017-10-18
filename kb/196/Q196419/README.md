---
layout: page
title: "Q196419: XADM: Move Server Dialog Box is Misleading"
permalink: kb/196/Q196419/
---

## Q196419: XADM: Move Server Dialog Box is Misleading

	Article: Q196419
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you move a server with a distribution list (DL) named Object1 to a site
	which contains a mailbox with the same name, Object1, an "Edit Duplicate" dialog
	box is displayed, which offers you the opportunity to rename the DL that is
	being moved.
	
	The anomaly is that even though Object1 in the destination site is a mailbox, the
	dialog box refers to it as a DL, which may cause you to make a decision based on
	the assumption that the object in the destination site is a DL.
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in the Move Server component of
	Exchange Server version 5.5.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

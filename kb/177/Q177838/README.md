---
layout: page
title: "Q177838: XADM: NT Security Descriptor Associated w/ DL Owner Not Updated"
permalink: kb/177/Q177838/
---

## Q177838: XADM: NT Security Descriptor Associated w/ DL Owner Not Updated

	Article: Q177838
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you make changes to a distribution list (DL), an error may occur if a new
	Windows NT account has been assigned to the mailbox which is the owner of that
	DL. You may receive the following error message:
	
	  Changes to the distribution list membership could not be saved.
	  You do not have the sufficient permissions to perform this
	  operation on this object.
	
	CAUSE
	=====
	
	The error occurs when you change who has the role of user on the Permissions tab
	of a mailbox. This does not happen when the owner of the DL is changed by
	selecting a different mailbox.
	
	WORKAROUND
	==========
	
	To work around the problem, open the Distribution List General property page for
	the mailbox you want to configure, make a change to the DL (for example, type
	something in the Notes box), and then close the dialog box. This will cause the
	Owner's Mailbox for the newly assigned user to be re- checked and will allow the
	newly assigned user permission to update the DL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

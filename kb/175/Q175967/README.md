---
layout: page
title: "Q175967: XADAM: Cannot Edit the PAB Migration Message in Exchange 5.0"
permalink: kb/175/Q175967/
---

## Q175967: XADAM: Cannot Edit the PAB Migration Message in Exchange 5.0

	Article: Q175967
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate users from SFS or cc:Mail to Microsoft Exchange Server, you
	cannot edit the PAB migration message that is paced in the migrated user's
	Inbox. This functionality existed in Microsoft Exchange Server, version 4.0.
	
	CAUSE
	=====
	
	This change was implemented to simplify codepage issues resulting from editing
	the default PAB message.
	
	WORKAROUND
	==========
	
	To workaround this problem, follow these steps:
	
	1. Create a text file called Pabmsg.txt and place it in the \Exchsrvr\bin
	  directory.
	
	2. Run all migrations that will generate the PAB migration message (SFS,
	  CCMail).
	
	When you no longer want this functionality, simply remove the Pabmsg.txt file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

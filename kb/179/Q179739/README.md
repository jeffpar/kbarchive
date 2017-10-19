---
layout: page
title: "Q179739: XCON: T.61 Body Part of Incoming Messages Not Handled Correctly"
permalink: /kb/179/Q179739/
---

## Q179739: XCON: T.61 Body Part of Incoming Messages Not Handled Correctly

	Article: Q179739
	Product(s): Microsoft Exchange
	Version(s): 5.0 SP2,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP2, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs when you are using the message transfer agent (MTA) in
	Microsoft Exchange Server version 4.0 post SP4 (build 996.46), or the MTA in
	Microsoft Exchange Server version 5.0 SP2, or version 5.5.
	
	You do not receive T.61 (Teletex) extended characters (French accents) in
	messages received by the Exchange Server message transfer agent (MTA) post SP4
	(996.46). This applies also to users "behind" this Exchange server, like
	Microsoft Mail users connected by the Microsoft Mail Connector interchange
	(MSMI). The problem is only with Exchange Server MTAs receiving messages.
	Foreign MTAs receiving the messages are not affected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0 Service Pack 4 (SP4) with build 996.46 of the MTA. This problem has
	been corrected in the latest U.S. Service Pack for Microsoft Exchange Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0 SP2.
	
	
	A supported fix is now available, but has not been fully regression tested and
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
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP2
	Version           : :5.0 SP2,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

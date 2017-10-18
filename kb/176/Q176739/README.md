---
layout: page
title: "Q176739: XFOR: IMS Uses Incorrect 'Reply To' Address"
permalink: kb/176/Q176739/
---

## Q176739: XFOR: IMS Uses Incorrect 'Reply To' Address

	Article: Q176739
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	This problem occurs when you are using the routing feature in following
	scenario:
	
	  UNIX (host1.osu.com)----Exchange Server (osu.com)-----Internet
	
	In the registry for IMS/Parameters to have: AddressRewrite:DWORD=1 and
	ResolveP2:DWORD=1.
	
	In Exchange Server, you create a custom recipient for a USER1 on host1 as
	follows:
	
	  smtp user1@host1.osu.com SMTP user1@osu.com
	
	A message is sent from user1 where the originator address is user1@host1.osu.com
	into Exchange Server destined to the Internet.
	
	The problem is that the Internet recipient sees user1@host1.osu.com in the 822
	body instead of user1@osu.com.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

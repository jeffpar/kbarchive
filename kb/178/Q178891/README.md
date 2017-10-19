---
layout: page
title: "Q178891: XADM: Incorrect Message When Issue Warning Limit Is Reached"
permalink: /kb/178/Q178891/
---

## Q178891: XADM: Incorrect Message When Issue Warning Limit Is Reached

	Article: Q178891
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the General tab for the Private Information Store properties, you can choose
	to set an Issue Warning limit and a Prohibit Send limit. When a mailbox reaches
	the Issue Warning limit, the mailbox owner incorrectly receives a warning that
	corresponds to the Prohibit Send limit. The user can continue to send and
	receive messages. Additionally, no warnings are received when the Prohibit Send
	limit is reached.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following warnings are reported in the Application Log of the Event Viewer
	with only the Issue Warning Limit set:
	
	  Source: MSExchangeIS
	  Event: 1078
	  Description: The following users have exceeded the Prohibit Send
	  Storage Limit: <users>
	
	  Source: MSExchangeIS
	  Event: 1077
	  Description: The following users have exceeded the Issue Warning
	  storage limit: <users>
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

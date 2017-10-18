---
layout: page
title: "Q177769: XADM: Assert Error When You Extract Windows NT Account List"
permalink: kb/177/Q177769/
---

## Q177769: XADM: Assert Error When You Extract Windows NT Account List

	Article: Q177769
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Administrator program to extract the
	Windows NT Account List (using the Tools menu), the following error message may
	appear:
	
	  Assert
	  File F:\admin\src\libs\base\basestr.cxx at line 3688
	  Assert(cbRequired <= cbMac);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: crash hang
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

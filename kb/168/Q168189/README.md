---
layout: page
title: "Q168189: XADM: Unable to Extract Windows NT Account List"
permalink: kb/168/Q168189/
---

## Q168189: XADM: Unable to Extract Windows NT Account List

	Article: Q168189
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When extracting Windows NT users by using the "Extract Windows NT Account List"
	tool in the Microsoft Exchange Administrator program on a domain with a large
	number of BDCs, the following errors result:
	
	  Windows NT User extraction stops with error:
	
	  Microsoft Exchange Administrator.
	  STOP : More data is available.
	  Microsoft Windows NT ID no: 0xc00200ea
	
	  Expected Results:
	
	  Windows NT User extraction should complete successfully regardless
	  of the number of domain controllers in the site
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem was corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server 5.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

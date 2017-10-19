---
layout: page
title: "Q184823: XADM: Bad Schema Index After Exchange 4.0 to 5.5 Upgrade"
permalink: /kb/184/Q184823/
---

## Q184823: XADM: Bad Schema Index After Exchange 4.0 to 5.5 Upgrade

	Article: Q184823
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Users experience Exchange service outages from roughly 20 seconds to 4 minutes
	long sporadically throughout the day. Threads in Dsamain.exe may spike to 100
	percent.
	
	CAUSE
	=====
	
	Under Microsoft Exchange Server 4.0, the schema index for the directory service
	defaults to 0. This amounts to a flat scan for every directory service request.
	The algorithm has changed significantly from 4.0 to 5.5 for the database
	retrieval mechanism, including improved caching. Under version 5.5, a flat scan
	has a significant performance cost and hence the index defaults to 1 by design.
	However, when you install version 5.5 in a version 4.0 environment or upgrade
	4.0 to 5.5, this value remains 0 and causes the server outage described above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	To work around this problem, set the directory service schema index to 1 for
	Exchange Server 5.5 computers in a mixed 4.0/5.5 environment. To do this,
	perform the following steps:
	
	WARNING: Using the raw mode of the Exchange Administrator program (admin /r)
	incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Exchange Administrator program in raw mode by typing the following
	  at a command prompt:
	
	  admin /r
	
	2. On the View menu, click Raw Directory.
	
	3. Select the Schema object in the Exchange Administrator hierarchy. This is
	  located under the site name.
	
	4. Open the Properties window for the Directory Name schema object.
	
	5. In the Object Attribute list, click Search-Flags.
	
	6. Change the Edit Value to 1. Then select Set.
	
	7. Restart the directory service.
	
	NOTE: This change must be made on one server within each site experiencing the
	problem. This change will be replicated to all the servers within the site.
	
	Additional query words: dsamain msexchangeds RPC Requests high perfmon.exe perfmon slow
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

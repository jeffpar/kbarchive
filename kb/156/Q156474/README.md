---
layout: page
title: "Q156474: XADM: ISINTEG Reports Errors on Replicated NNTP News Folders"
permalink: kb/156/Q156474/
---

## Q156474: XADM: ISINTEG Reports Errors on Replicated NNTP News Folders

	Article: Q156474
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When replicating NNTP newsgroup folders from a computer running an newer version
	of Microsoft Exchange Server to a computer running Microsoft Exchange Server
	4.0, ISINTEG may report warnings when run on the public store of the computer
	running Microsoft Exchange Server 4.0. The warnings look similar to the
	following:
	
	  ISINTEG -pub may report mismatches in the following properties:
	  6696000B
	  6697000B
	  66A584B0
	  66A60102
	  66A60102
	
	CAUSE
	=====
	
	NNTP newsgroup properties that get replicated with the folder to a computer
	running Microsoft Exchange Server 4.0 are not recognized by ISINTEG, and
	therefore cause ISINTEG to generate warnings.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below. With the hotfix,
	ISINTEG was changed to recognize the new NNTP newsgroup properties that can be
	replicated to a computer running Microsoft Exchange Server 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words: corruption corrupt corrupted DB
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q164853: XADM: Incorrect Spanish on Microsoft Exchange Server"
permalink: /kb/164/Q164853/
---

## Q164853: XADM: Incorrect Spanish on Microsoft Exchange Server

	Article: Q164853
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you only upgrade your Spanish client to Microsoft Exchange Client 5.0 and not
	the Spanish Microsoft Exchange Server, the server store will not be localized
	for new mailboxes, because Microsoft Exchange Server 4.0 has no support for
	Spanish Modern.
	
	CAUSE
	=====
	
	Microsoft Exchange Server 4.0 (Mdbsz.dll) is stamped as Spanish traditional, and
	Microsoft Exchange Client 5.0 is language stamped as Spanish Modern (in line
	with all other Spanish Microsoft products).
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below. With the hotfix,
	support for Spanish Modern has been added to Spanish Microsoft Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

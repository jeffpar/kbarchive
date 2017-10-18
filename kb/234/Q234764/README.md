---
layout: page
title: "Q234764: XADM: Eseutil Ends with -1808 (Jet_ErrDiskFull) on /P or /G"
permalink: kb/234/Q234764/
---

## Q234764: XADM: Eseutil Ends with -1808 (Jet_ErrDiskFull) on /P or /G

	Article: Q234764
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Eseutil with the /G or /P switch, you get the following error:
	-1808 (Jet_ErrDiskFull).
	
	CAUSE
	=====
	
	There is an infinite loop in the logic dealing with space allocation in the
	temporary database created during these operations that causes the Jet engine to
	consume all the disk space on the drive.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: ESE97
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ese.dll   | 5.5.2634.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q189142: XADM: ESEUTIL /P Uses All Available Disk Space"
permalink: kb/189/Q189142/
---

## Q189142: XADM: ESEUTIL /P Uses All Available Disk Space

	Article: Q189142
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server 5.5 ESEUTIL /P will not complete on a specific
	Priv.edb file. The repair runs until Repair.edb uses all the available disk
	space. At that point, ESEUTIL reports "Error -1808 (0xfffff8f0)
	JET_errDiskFull."
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

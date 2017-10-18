---
layout: page
title: "Q180729: Handle Leak in SNAUDB.EXE"
permalink: kb/180/Q180729/
---

## Q180729: Handle Leak in SNAUDB.EXE

	Article: Q180729
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server Host Account Cache service (that is, SnaDatabase, or Snaudb.exe)
	handle count grows each time a new logon request occurs. This problem can be
	observed by monitoring the handle count for the snaudb process using the Windows
	NT performance monitor. Eventually, the Host Account Cache service will fail,
	causing host user ID's and passwords to fail to be mapped.
	
	CAUSE
	=====
	
	The SNA Server Host Account Cache service (Snaudb.exe) was not closing the event
	handles it created for every RPC request it received.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT SNA Server, versions
	3.0, 3.0 Service Pack 1 (SP1), 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

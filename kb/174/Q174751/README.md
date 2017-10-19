---
layout: page
title: "Q174751: XADM: RPC Fails After Installation of GSNW"
permalink: /kb/174/Q174751/
---

## Q174751: XADM: RPC Fails After Installation of GSNW

	Article: Q174751
	Product(s): Microsoft Exchange
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server communicates via remote procedure call (RPC) within a
	site. If Gateway Services for NetWare (GSNW) is installed on a Windows NT 3.51
	or Windows NT 4.0 computer after Service Pack 2 is installed, RPC traffic within
	the Exchange site will fail.
	
	CAUSE
	=====
	
	Installing GSNW from an older version can cause Windows NT protocols to fail due
	to a mismatch in the versions of RPC files.
	
	RESOLUTION
	==========
	
	Reinstall the latest service pack for Windows NT or the at least the current
	service pack currently being used on the Windows NT computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange400SP3
	Version           : :4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

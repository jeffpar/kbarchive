---
layout: page
title: "Q127909: Seed Routing Not Working With C.O.P.S. LocalTalk NIC"
permalink: kb/127/Q127909/
---

## Q127909: Seed Routing Not Working With C.O.P.S. LocalTalk NIC

	Article: Q127909
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Services for the Macintosh on a computer running Windows NT Server
	using an Ethernet or Token Ring network interface card (NIC) and a C.O.P.S.
	LocalTalk NIC, Macintosh client computers can only view Windows NT Servers that
	are using the same NIC as the default NIC for Services for Macintosh.
	
	For example, if you select the C.O.P.S. LocalTalk NIC as the default NIC for
	Services for Macintosh, only Macintosh client computers using the LocalTalk NIC
	are able to view the Windows NT Server. Enabling seed routing has no effect.
	
	CAUSE
	=====
	
	The LocalTalk Network Number is not sent out with the correct information in the
	packet.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt sfm local talk cops
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

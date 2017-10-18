---
layout: page
title: "Q140946: XADM: Microsoft Mail Interchange Hang During DirSync"
permalink: kb/140/Q140946/
---

## Q140946: XADM: Microsoft Mail Interchange Hang During DirSync

	Article: Q140946
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a normal Directory Synchronization (DirSync) cycle, the Microsoft Mail
	Interchange (MSMI) hangs on some, but not all, outgoing messages created by the
	Microsoft Exchange Directory Synchronization Service (DXA) when Microsoft
	Exchange is acting as the DirSync Server. This is normally only seen in
	organizations with large Global Address Lists (GALs) and is only seen on
	multi-processor machines running the MSMI Service.
	
	CAUSE
	=====
	
	By default, the DXA compresses all outgoing DirSync messages. Microsoft Mail
	postoffices do not understand this compressed file so it is necessary for the
	MSMI to decompress it prior to sending to any Microsoft Mail postoffice. This
	code was not optimized for multi-processor machines.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	

---
layout: page
title: "Q192839: XADM: Full Offline Address Book Download with Differences Specif"
permalink: /kb/192/Q192839/
---

## Q192839: XADM: Full Offline Address Book Download with Differences Specif

	Article: Q192839
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlook clients can specify downloading of incremental changes to their offline
	Address Book. In many cases the clients receive full downloads when smaller
	updates should occur. These full downloads occur on the average, every second
	download attempt.
	
	CAUSE
	=====
	
	The offline Address Book file integrity is verified using calculated signatures.
	Full downloads occur when these signatures do not match. A logic error on the
	server causes Address Book changes to be processed in a different order than is
	used by the client. This results in a signature mismatch and a subsequent
	download of the entire Address Book.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name    Version
	  -----------------------
	  Oabgen.dll   5.5.2378.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words: decompress decompressing diffs
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

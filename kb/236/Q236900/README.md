---
layout: page
title: "Q236900: XFOR: Notes Connector Corrupts Information During Dirsync"
permalink: kb/236/Q236900/
---

## Q236900: XFOR: Notes Connector Corrupts Information During Dirsync

	Article: Q236900
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fixkbfixlist
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running a directory synchronization (dirsync) between Lotus Notes server
	and Exchange Server over a WAN connection, the custom recipients' display name
	might get corrupted.
	
	CAUSE
	=====
	
	When Lsdxa is handling buffers transferring from a writer to a reader (two sides
	of the Directory Exchange Agent [DXA]), it may look in an incorrect place.
	
	
	The fix mentioned below, re-adjusts it back to the right position.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: DXA
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Lsdxa.exe | 5.5.2647.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix kbfixlist
	Component         : NotesMC
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

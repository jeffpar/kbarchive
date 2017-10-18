---
layout: page
title: "Q272559: XADM: Information Store Crashes When You Save a Complex View"
permalink: kb/272/Q272559/
---

## Q272559: XADM: Information Store Crashes When You Save a Complex View

	Article: Q272559
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The information store (Store.exe) may stop responding (crash) with an access
	violation when you save a complex folder view, and you receive the following
	error message:
	
	  store.exe - Application Error
	  "The instruction at "0x00386620" referenced memory at "0x00000000".
	  The memory could not be "read".
	
	The following event is written in the Application log in Event Viewer:
	
	Event ID: 4096
	Source:Dr.Watson
	Description
	The application, exe\store.dbg, generated an application error The error occurred
	on 10/24/2000 @ 9:41:42.854 The exception generated was c0000005 at address
	0x00386620 (no symbols)
	
	CAUSE
	=====
	
	The information store does not calculate the size of the index buffer for the
	view correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words: X5 107698 STORE!JIDX EcAddCondColumn
	
	======================================================================
	Keywords          : exc55 kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

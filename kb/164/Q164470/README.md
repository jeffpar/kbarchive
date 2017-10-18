---
layout: page
title: "Q164470: XCLN: Scanpst Fails to Detect and Fix File Truncation Corruption"
permalink: kb/164/Q164470/
---

## Q164470: XCLN: Scanpst Fails to Detect and Fix File Truncation Corruption

	Article: Q164470
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Scanpst.exe utility of Microsoft Exchange Client fails to detect and fix a
	file truncation corruption where the only blocks in the truncation were orphans.
	This leaves the PST file as unusable because the PST provider will not connect
	to a PST file with this type of corruption.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

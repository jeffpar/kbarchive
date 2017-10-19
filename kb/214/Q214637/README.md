---
layout: page
title: "Q214637: XFOR: Multiple MSExchangeCalCon Profiles Found"
permalink: /kb/214/Q214637/
---

## Q214637: XFOR: Multiple MSExchangeCalCon Profiles Found

	Article: Q214637
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may notice that over time there may be many MSExchangeCalCon MAPI profiles
	created.
	
	CAUSE
	=====
	
	An abnormal shutdown of the Calendar Connector service, for example killing the
	Calcon.exe process, will result in the generation of a new MAPI profile for the
	Calendar Connector the next time it starts up.
	
	RESOLUTION
	==========
	
	The leftover MAPI profiles are harmless and can be safely deleted.
	
	WORKAROUND
	==========
	
	The MAPI profiles can also be found at the following registry location:
	
	  \HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows
	  Messaging Subsystem\Profiles
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: MAPI;Calendar Connector;CALCON
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

---
layout: page
title: "Q160715: Using LUA_correlator Field Causes WNAP to GPF"
permalink: kb/160/Q160715/
---

## Q160715: Using LUA_correlator Field Causes WNAP to GPF

	Article: Q160715
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When acquiring a session with a 16-bit LUA application using the SNA Server
	Windows 3.x client software, the following error may be reported by
	Drwatson.exe:
	
	  WNAP had a 'Null Selector (Read)' fault at WINRUI.
	
	CAUSE
	=====
	
	Using the LUA_correlator field instead of the LUA_sid field within the
	RUI_INIT() will cause this error.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Use the LUA_SID field in the RUI_INIT() instead.
	
	There is no functional difference.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11 2.11SP1, and 3.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	Issue type        : kbbug
	
	=============================================================================
	

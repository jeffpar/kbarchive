---
layout: page
title: "Q175273: SNA Server Leaks Memory If Detailed Logging Is Enabled"
permalink: kb/175/Q175273/
---

## Q175273: SNA Server Leaks Memory If Detailed Logging Is Enabled

	Article: Q175273
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Microsoft SNA Server Default Audit Log Level is set for Detailed Problem
	Analysis, a memory leak occurs every time a new client connects to SNA Server.
	
	CAUSE
	=====
	
	The SNA Server Snadmod.dll file determines the client's logon username and
	domain name each time a client connects to SNA Server. If the user has already
	connected, then this information is retrieved from a local cache. If the user
	has not connected, the Snadmod.dll file calls the Win32 LookupAccountSid()
	function to retrieve this information. The problem occurs because Snadmod.dll
	continues to use LookupAccountSid even though the user exists in the local
	cache. In this case, memory that was allocated for the LookupAccountSid function
	is not released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

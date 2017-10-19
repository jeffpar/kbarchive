---
layout: page
title: "Q151409: RUI_BID Improperly Handles Lua_Peek_Data Causing Data Truncation"
permalink: /kb/151/Q151409/
---

## Q151409: RUI_BID Improperly Handles Lua_Peek_Data Causing Data Truncation

	Article: Q151409
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an LUA RUI application calls RUI_BID followed by RUI_READ, the read data may
	be missing the leading bytes returned in the RUI_BID lua_peek_data. For
	example:
	
	1. Verb:          RUI_BID
	  Description:   Notifies the RUI application that a message is waiting
	                 to be read using RUI_READ.
	  Returns:       lua_peek_data (Contains the first 12 bytes of the
	                 message data)
	
	2. Verb:          RUI_READ
	  Description:   Receives responses, SNA commands, and data into Windows
	                 LUA application's buffer
	  Returns:       the data that has been requested
	
	Using these verbs in this sequence results in the following:
	
	  Verb:       Returns:
	
	  RUI_BID     the first 12 bytes of the data
	
	  RUI_READ    the 13th through xx  bytes of the data. The first 12 bytes
	              are missing in the response.
	
	CAUSE
	=====
	
	The RUI_BID verb is attempting to handle the data instead of just "peeking" at
	it without making any modifications. Then when the RUI_READ verb is called, it
	checks to see if the first 12 bytes have been read. Since RUI_BID has modified
	the data, RUI_READ only reads in the 13th through xx bytes of data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.11
	Service Pack 1. This problem was corrected in the latest Microsoft SNA Server
	2.11 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna winrui sp1
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	
	=============================================================================
	

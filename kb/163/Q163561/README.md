---
layout: page
title: "Q163561: GetLuaReturnCode Mapping Problems and Possible Access Violation"
permalink: /kb/163/Q163561/
---

## Q163561: GetLuaReturnCode Mapping Problems and Possible Access Violation

{% raw %}

	Article: Q163561
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogrammingkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following problems occur when calling GetLuaReturnCode() from an RUI or SLI
	application:
	
	- The following return codes are not mapped properly:
	
	     LUA_RECEIVED_UNBIND 0x55
	     LUA_DATA_INCOMPLETE 0x60
	     LUA_LU_INOPERATIVE 0xFF
	
	     LUA_RECEIVER_IN_TRANSMIT_MODE  0x081B0000
	     LUA_SSCP_LU_SESSION_NOT_ACTIVE 0x08570000
	
	     LUA_RESPONSE_ALREADY_SENT  0x10050122
	
	  Also, GetLuaReturnCode reports these unmapped return codes in Intel
	  byte-reversed format. For example, a sense code of 0x081B0000 may be returned
	  as 0x00001B08.
	
	- If GetLuaReturnCode() receives a primary_rc or the secondary_rc that it
	  doesn't expect, this may lead to an access violation in LUASTR32.DLL.
	
	CAUSE
	=====
	
	These problems are caused by deficiencies in the GetLuaReturnCode() function.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 Service Pack 1 and 3.0 is available to correct
	these problems. The updated modules are Luastr32.dll, Winrui32.dll and
	Winsli32.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	2.11 Service Pack 1 (SP1), and 3.0. This problem was corrected in the latest
	Microsoft SNA Server 2.11 and 3.0 U.S. Service Packs. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprogramming kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

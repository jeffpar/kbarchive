---
layout: page
title: "Q163557: GetLuaReturnCode Can Lead To TN3270 Service Access Violation"
permalink: /kb/163/Q163557/
---

## Q163557: GetLuaReturnCode Can Lead To TN3270 Service Access Violation

{% raw %}

	Article: Q163557
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TN3270 Server may end "silently," without generating a Drwtsn32.log or
	logging an Event 624 in the Windows NT Application Event Log.
	
	An LUA application may also fail with an access violation when calling the
	GetLuaReturnCode API; this occurs when it is attempting to map an error code
	that the GetLuaReturnCode API does not know how to map.
	
	CAUSE
	=====
	
	The GetLuaReturnCode() function (within Luastr32.dll) may encounter an access
	violation when attempting to map an error that it doesn't know how to map. This
	can occur when mapping either an LUA RUI or SLI error code.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 Service Pack 1 and 3.0 is available to correct this
	problem. The updated modules are:
	
	  <snaroot>\system\LUASTR32.DLL
	  <snaroot>\system\WINRUI32.DLL
	  <snaroot>\system\WINSLI32.DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1 (SP1), and 3.0. This problem was corrected in the latest
	Microsoft SNA Server 2.11 and 3.0 U.S. Service Packs. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

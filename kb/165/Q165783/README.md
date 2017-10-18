---
layout: page
title: "Q165783: SNACFG Doesn't Delete LUA LUs from Configuration File"
permalink: kb/165/Q165783/
---

## Q165783: SNACFG Doesn't Delete LUA LUs from Configuration File

	Article: Q165783
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When TN3270 Service attempts to acquire a session on behalf of a TN3270 client
	emulator, the following events will appear in the application event log and the
	client will fail to connect:
	
	  
	
	  Event ID : 305
	  Source: TN3270 Server
	  Description: RUI_INIT specifying LU <LUA LU Name> failed with
	  LUA_PARAMETER_CHECK / LUA_INVALID_LUNAME for <ip address>
	  (port <port number>).
	
	  Event ID: 1955
	  Source: SNA RUI Application
	  Description: RUI_INIT failed for LU <LUA LU Name>, primary_rc = 100,
	  secondary_rc = 1000000
	
	CAUSE
	=====
	
	The TN3270 Service is attempting to use an LUA LU that was added to the
	configuration, but then deleted. This problem only occurs when using the command
	line SNA Server configuration utility called Snacfg.exe to delete the LUA LU.
	
	RESOLUTION
	==========
	
	A fix was made to snacfg to actually delete the LUA LU from the Com.cfg when a
	deletion is requested.
	
	To resolve this problem, obtain the hotfix mentioned below. The updated file is:
	
	  Tn3servr.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

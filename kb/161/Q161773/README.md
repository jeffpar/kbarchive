---
layout: page
title: "Q161773: IBM Client Access/95 Setup Stops Responding"
permalink: /kb/161/Q161773/
---

## Q161773: IBM Client Access/95 Setup Stops Responding

	Article: Q161773
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run IBM Client Access for Windows 95 over the SNA Server 2.11 Service
	Pack 1 for Windows 95 client software, the Client Access setup program stops
	responding when configuring connections to multiple AS/400's through SNA Server.
	After pressing CTRL+ALT+DEL, the following appears in the Close Program dialog
	box:
	
	  AS400 Connections - Primary Environment (Not Responding)
	
	Closing this application succeeds.
	
	When you look at the SNA Server Windows 95 client traces, you see that IBM Client
	Access 95 uses the APPC DISPLAY function to dynamically retrieve configured APPC
	LU's. The first call to DISPLAY succeeds, although the next attempt fails with
	STATE_CHECK. The following DISPLAY call stops and never returns.
	
	CAUSE
	=====
	
	When the application issues the WinAPPCCleanup() call, the SNA Windows 95 client
	"DMOD" removes all of the routing procedures for the application. When the
	application issues the WinAPPCStartup() call again, the DISPLAY library does not
	register its routing procedure again, and therefore it can never receive any
	more messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows 95 client included
	with SNA Server 2.11 Service Pack 1. This problem was corrected in the latest
	SNA Server version 2.11 U.S. Service Pack. For information on obtaining this
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsna SP1
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	
	=============================================================================
	

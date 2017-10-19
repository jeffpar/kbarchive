---
layout: page
title: "Q166075: SNA Server Manager Disappears"
permalink: /kb/166/Q166075/
---

## Q166075: SNA Server Manager Disappears

	Article: Q166075
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
	
	SNA Server Manager will disappear when doing the following:
	
	1. On one computer run SNA Server Manager and add two new connections.
	
	2. Click Save and start the SNA Server Service.
	
	3. On a second computer start another SNA Server Manager.
	
	4. On first computer delete the two new connections and save the configuration.
	
	5. On the second computer, wait for "Out Of Date" to flash next to the Server
	  name, and then do a Refresh.
	
	6. The SNA Server Manager disappears, and an application exception occurs in
	  MngCli.exe.
	
	CAUSE
	=====
	
	The problem occurs because there is a duplicate Host Security Domain
	configuration record in the Com.cfg, and its handle does not point to a valid
	item.
	
	RESOLUTION
	==========
	
	A fix has been made to correct this problem. To resolve this problem, obtain the
	hotfix mentioned below.
	
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
	

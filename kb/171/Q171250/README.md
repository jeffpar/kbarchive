---
layout: page
title: "Q171250: Host Account Cache Database Is Lost When Promoted To Master"
permalink: /kb/171/Q171250/
---

## Q171250: Host Account Cache Database Is Lost When Promoted To Master

	Article: Q171250
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a SNA Host Account Cache service configured as Backup is promoted to
	Master, the current Host Account Database(
	<HostSecDir>\HSsystem\DBase.DBS) will be replaced by a new empty DBase.DBS
	file. The only Events logged are:
	
	(source = SNA Host Security)<BR/>
	  - event 1325 - SNA Host Account Cache Stopped.<BR/>
	  - event 1324 - SNA Host Account Cache Started, Database Synchronized.
	
	CAUSE
	=====
	
	The SNA Host Account Cache service, when configured as Backup, is designed to
	delete its local copy of the Host Account Database when it is stopped.
	
	When a Backup SNA Host Account Cache service is promoted to Master, it will stop
	and restart itself in the new role. During the stopping process, the local copy
	of the Dbase.dbs file is deleted and the SNA Host Account Cache service then
	restarts successfully but with an empty database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

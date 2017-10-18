---
layout: page
title: "Q195355: TN5250 Logs an Event 15 For Every Configuration Change"
permalink: kb/195/Q195355/
---

## Q195355: TN5250 Logs an Event 15 For Every Configuration Change

	Article: Q195355
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TN5250 service logs the following event in the Windows NT application event
	log after every SNA Server configuration change is saved in SNA Server Manager:
	
	  Event ID: 15
	  Source: SNA TN5250 Server
	  Description: The SNA TN5250 Service detected a configuration change.
	
	CAUSE
	=====
	
	The TN5250 service was incorrectly logging an event for any configuration change
	made in SNA Server Manager. The TN5250 service should only log this event when
	changes are made to the TN5250 configuration in SNA Server Manager.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

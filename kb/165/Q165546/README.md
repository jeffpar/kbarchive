---
layout: page
title: "Q165546: Host Security Reports Event 54 but Does Not Include Description"
permalink: /kb/165/Q165546/
---

## Q165546: Host Security Reports Event 54 but Does Not Include Description

	Article: Q165546
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
	
	When reviewing the Application Log in the Event Viewer, multiple Event Id 54's
	coming from source SNA Host Security may be present. When viewing this event,
	the description information will be missing.
	
	CAUSE
	=====
	
	By default, the Host Security Integration Service is not installed during setup,
	therefore, the SNA Host Security key is not created. The registry path for this
	location is listed below:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	     \Services\EventLog\Application\ 
	
	RESOLUTION
	==========
	
	A change was made to SNA Server setup so that the Host Security Event Log
	registry entries are now always installed during the server installation.
	
	To resolve this problem, obtain the hotfix mentioned below.
	
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
	

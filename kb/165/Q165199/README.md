---
layout: page
title: "Q165199: SNA Server Services Stay in Stopping State"
permalink: /kb/165/Q165199/
---

## Q165199: SNA Server Services Stay in Stopping State

	Article: Q165199
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
	
	After stopping the SNA Server service, the status will show "Stopping," but will
	never change to an "Inactive" state.
	
	NOTE: This problem has been seen when stopping the TN5250 Service, however other
	services may be affected as well.
	
	CAUSE
	=====
	
	This can happen when the SNA Server service terminates before sending the last
	status change message to the SNA Server Manage Agent service. The Manage Agent
	sets the status of extension services to inactive, if the service process
	terminates correctly.
	
	RESOLUTION
	==========
	
	Changes were made to the SNA Server Manage Agent to correct this problem. To
	resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: mngagent
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

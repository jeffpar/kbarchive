---
layout: page
title: "Q165701: Exiting Manager Causes Access Violation If No Servers Running"
permalink: /kb/165/Q165701/
---

## Q165701: Exiting Manager Causes Access Violation If No Servers Running

	Article: Q165701
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Host Security Integration Service is installed, exiting SNA Server Manager
	may cause an access violation if there are no computers running SNA Server. This
	occurs most easily when the configuration file is opened in offline mode.
	
	CAUSE
	=====
	
	The Host Security extension DLL (Hostsec.dll) starts a thread which waits to
	find an SNA Server in the subdomain. If doesn't find one, the thread never
	terminates. When exiting SNA Manager, this results in an access violation when
	the host security DLL is unloaded.
	
	RESOLUTION
	==========
	
	An update to SNA Server is available to correct this problem.
	
	
	To resolve this problem, obtain the hotfix mentioned below. The updated file is:
	
	  Hostsec.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: snahostsec
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

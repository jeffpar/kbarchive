---
layout: page
title: "Q173341: SNA Manager Fails to Open Backup Config File."
permalink: /kb/173/Q173341/
---

## Q173341: SNA Manager Fails to Open Backup Config File.

{% raw %}

	Article: Q173341
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the SNA Manager while the Windows NT Server computer that hosts
	the primary SNA Server computer is not reachable, the following message is
	displayed:
	
	  From SNAOLE - Configuration file not found.
	
	When you click OK in response to this message, SNA Manager reports the following
	on the information bar of the subdomain window:
	
	  CONFIG READ FAILED rc = 3935
	
	CAUSE
	=====
	
	This only happens if the backup SNA Server computer where SNA Manager is running
	was able to read the configuration file from the Primary SNA Server when it
	started. The configuration path in the shared memory then points to the primary
	SNA Server computer because that is the currently active configuration file.
	There is no mechanism to switch to a backup configuration file other than at
	startup time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, if SNA Manager fails to open the currently active
	configuration file, the following message is displayed:
	
	Unable to open the Primary SNA Server configuration file. Okay to attempt opening
	a Backup SNA Server in read-only mode?
	
	If you click OK, SNA Manager looks for a backup configuration file to open.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

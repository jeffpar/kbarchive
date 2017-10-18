---
layout: page
title: "Q172966: SNA Manager Fails to Open Backup Configuration File"
permalink: kb/172/Q172966/
---

## Q172966: SNA Manager Fails to Open Backup Configuration File

	Article: Q172966
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user starts the SNA Manager while the Windows NT Server that hosts the
	Primary SNA Server is not reachable, the following pop-up message is displayed :
	"from SNAOLE - Configuration file not found". Clearing the message box by
	clicking the "OK" button, SNA Manager reports the message "CONFIG READ FAILED rc
	= 3935" on the information bar of the subdomain window.
	
	CAUSE
	=====
	
	When a Backup SNA Server starts, it reads the configuration file from the
	Primary SNA Server. When SNA Manager is run on that Backup SNA Server and the
	Primary SNA Server is unreachable, there is no mechanism to switch to the backup
	configuration file so the errors are displayed.
	
	RESOLUTION
	==========
	
	An SNA Server hotfix is available to correct this problem. Now, if SNA Manager
	fails to open the Currently Active Config File, a pop-up message is displayed
	saying: "Unable to open the Primary SNA Server configuration file. Okay to
	attempt opening a Backup SNA Server in read-only mode?" If the user clicks OK,
	Manager will look for a Backup Configuration File to open.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q194931: Incorrect Number of Active Users Displayed in SNA Manager"
permalink: kb/194/Q194931/
---

## Q194931: Incorrect Number of Active Users Displayed in SNA Manager

	Article: Q194931
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The number of active users displayed in SNA Manager may be incorrect. SNA Server
	subdomains with two or more servers will exhibit this behavior.
	
	Steps to Reproduce this Behavior
	--------------------------------
	
	1. Set up an SNA Server subdomain with at least two servers.
	
	2. Start the servers, and either connect a couple of users, or start the SFWG
	  service.
	
	3. Note the number of active users.
	
	4. Make a change to one of the servers. Changing a comment field is sufficient.
	
	5. Save the configuration.
	
	6. On the status bar of the other server you should see the message, Out of
	  Date.
	
	7. Select the Refresh Configuration button on the toolbar.
	
	Results
	-------
	
	The number of active users will double.
	
	CAUSE
	=====
	
	Refresh Configuration causes the configuration file to be closed and then
	reopened. It is possible for the configuration file to reopen before all objects
	have been deleted from the initial close. Active user objects are found during
	the reopening, and displayed twice.
	
	RESOLUTION
	==========
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	and version 4.0 SP1.
	
	MORE INFORMATION
	================
	
	For information on a related issue in SNA Server 3.0, please refer to the
	following Knowledge Base article:
	
	  Q194858 SNA Server Manager Shows Incorrect Status For Print Sessions
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

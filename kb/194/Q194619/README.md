---
layout: page
title: "Q194619: Host Security Group Inadvertently Removed From Start Menu"
permalink: /kb/194/Q194619/
---

## Q194619: Host Security Group Inadvertently Removed From Start Menu

{% raw %}

	Article: Q194619
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Three services make up the SNA Host Account Synchronization system. The Windows
	NT Account Synchronization and Host Account Cache Services have a stand alone
	Setup program from the Host Account Synhronization Service that is installed
	within the SNA Server setup process. If these two services are installed on a
	computer running Windows NT, a Host Security Group is created. If at a later
	time, SNA Server is installed without selecting to install the Host Account
	Synchronization service, this group will be removed.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, the Windows NT Account Synchronization and Host
	Account Cache Services setup program can be run again to restore the missing
	group.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}

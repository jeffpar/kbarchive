---
layout: page
title: "Q196191: SNABASE Unable to Update the BackupSponsor Registry Key"
permalink: /kb/196/Q196191/
---

## Q196191: SNABASE Unable to Update the BackupSponsor Registry Key

{% raw %}

	Article: Q196191
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Client Backup Configuration feature of SNA Server 4.0 fails when sending
	information to Windows NT clients if SNABASE is run under a new account created
	at installation. Although the information is sent correctly to the client,
	SNABASE is unable to update the registry because of insufficient authority.
	
	CAUSE
	=====
	
	During the installation of the client software, if you create a new account for
	the service to run under, it is not made a member of the Local Administrators
	Group. This results in the failure.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Setup now adds the user to the built-in Administrators group so that SNABASE
	will be able to write to the following registry key:
	
	  HKLM\SYSTEM\CurrentControlSet\Services\Snabase\Parameters
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

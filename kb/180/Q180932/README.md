---
layout: page
title: "Q180932: Saving Com.cfg Without Administrator Rights"
permalink: kb/180/Q180932/
---

## Q180932: Saving Com.cfg Without Administrator Rights

	Article: Q180932
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Manager may prevent a user from making changes to the configuration
	file even though the user has been granted WRITE permission through the Config
	File Security folder in the SNA subdomain properties.
	
	WORKAROUND
	==========
	
	In addition to granting a user WRITE permissions, the users must also be granted
	the right to MANAGE AUDITING AND SECURITY LOG within the Windows NT User Manager
	Policy/User Rights folder, which can be found under Policies in the User
	Manager. This must be done on both the user's local Windows NT computer (if the
	SNA Server resides on a Windows NT standalone or member server) and in the
	Windows NT domain.
	
	For additional information regarding Microsoft SNA Server Versions 2.1 and 2.11,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q126434 Configuring a Windows NT User as an SNA Server Administrator
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0 SP1,
	3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, and 4.0 SP2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

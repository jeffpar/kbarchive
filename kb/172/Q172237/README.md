---
layout: page
title: "Q172237: Changing Link Service Properties Doesn't Update Com.cfg File"
permalink: /kb/172/Q172237/
---

## Q172237: Changing Link Service Properties Doesn't Update Com.cfg File

	Article: Q172237
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a link service is initially created, the configuration file com.cfg
	receives a service table update message notifying it of the new link service, as
	well as a few parameters such as the DLC type and SDLC line type. If these
	settings are modified later, the changes are not recorded back to the com.cfg
	file.
	
	Examples:
	
	- When an Ethernet 802.2 link service is installed, and a connection is
	  created, the property page of the connection in SNA Server Manager indicates
	  an Ethernet link service is being used. If the link service is changed from
	  Ethernet to Token Ring, the conffiguration file com.cfg is not updated
	  properly; therefore the connection still indicates an Ethernet connection.
	
	- Modifications made to SDLC connections, such as changing the link service
	  from "switched" to "leased" are also not be reflected in SNA Server Manager.
	
	CAUSE
	=====
	
	SNA Server Manager is not properly notified of these changes and therefore they
	are not reflected in the Com.cfg file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix applied, SNA Server Manager is notified and the com.cfg file is
	updated when changes to DLC link services are made. Changing an SDLC line from
	"leased" to "switched" or vice-versa is no longer allowed. Instead, the link
	service must be deleted and re-added.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

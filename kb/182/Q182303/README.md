---
layout: page
title: "Q182303: Twinax Connections Should Be Restricted To Secondary DLC Role"
permalink: kb/182/Q182303/
---

## Q182303: Twinax Connections Should Be Restricted To Secondary DLC Role

	Article: Q182303
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The property page of a Twinax connection allows you to change the Peer DLC Role
	to either "Primary," "Secondary," or "Negotiable." The only correct Peer DLC
	Role for a Twinax connection is "Secondary." "Negotiable" is selected by
	default.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in the latest SNA
	Server version 4.0 U.S. Service Pack. For information on obtaining this Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Snaadmin.dll and Snapage.dll have been changed so that a Twinax connection will
	set the initial Peer DLC Role to "Secondary." In addition, the XID Type and Peer
	DLC Role radio buttons are disabled on the System Identification page.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3
	Version           : WINDOWS:3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

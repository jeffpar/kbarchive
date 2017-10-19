---
layout: page
title: "Q172643: Port Values for TN5250 Don't Work If One Is Set to Use Default"
permalink: /kb/172/Q172643/
---

## Q172643: Port Values for TN5250 Don't Work If One Is Set to Use Default

	Article: Q172643
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are setting the port numbers for AS/400 definitions, if multiple ports
	are used and one is left at Use Default, all ports will connect to the AS/400
	with the definition set to Use Default. This port setting is found in the TN5250
	AS/400 Definition on the Terminal Types property page in SNA Server Manager. For
	example, set up two AS/400 definitions with definition A set to use port 24 and
	definition B set to Use Default in the port setting. When a TN5250 client
	initiates a session, it will go to AS/400 definition B with the Use Default port
	setting, even if assigned to AS/400 definition A.
	
	CAUSE
	=====
	
	When determining which AS/400 definition the TN5250 client was assigned to, a
	check by TN5250.EXE finds a default port entered in an AS/400 definition and
	erroneously assigns all clients to the default setting.
	
	RESOLUTION
	==========
	
	TN5250.EXE has been modified to assign the proper AS/400 definition to the
	client requesting a session when a "Use Default" port setting exists in any
	TN5250 AS/400 definition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

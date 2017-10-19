---
layout: page
title: "Q180706: Incoming X.25 Host Connection Indicates Primary Link Role"
permalink: /kb/180/Q180706/
---

## Q180706: Incoming X.25 Host Connection Indicates Primary Link Role

	Article: Q180706
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an SNA Server X.25 connection is configured for Remote End: Host and
	Allowed Directions is configured for Incoming or Both Directions, the SNA Server
	notifies the X.25 link service that it has a primary link role when it should
	have indicated a secondary link role.
	
	The incorrect X.25 link role is reported to the X.25 link service in the SNA
	Server's Open(Link) request. This problem was found by Eicon Technology, though
	may occur with any X.25 link service supported by SNA Server.
	
	CAUSE
	=====
	
	The SNA Server configuration DLL (SNACFG.DLL) was incorrectly defaulting the
	X.25 link role when the X.25 connection is configured to support incoming calls.
	This caused the SNA Server to indicate a primary link role in error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1 (SP1), 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The SnaBase service must be stopped in order to apply the updated SNA Server
	configuration DLL (<snaroot>\system\SNACFG.DLL). Once the updated
	SNACFG.DLL is applied, the SNA Server Manager program must be run and the
	configuration file must be resaved.
	
	For additional information about a similar issue with Incoming SDLC connections,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q305160 Incoming SDLC Connections Log Event 182 and Fail to Activate
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

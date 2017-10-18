---
layout: page
title: "Q214571: Duplicate Remote APPC LUs Can Be Created On A Connection"
permalink: kb/214/Q214571/
---

## Q214571: Duplicate Remote APPC LUs Can Be Created On A Connection

	Article: Q214571
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1
	Operating System(s): 
	Keyword(s): kbsna300sp4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server versions 3.0 and 3.0 SP1 allow an administrator to create multiple
	Remote APPC (Advanced Program-to-Program Communications) LUs using the same
	Fully Qualified LU Name on the same connection. For example, the following are
	Remote APPC LUs that have unique aliases and the same Fully Qualified LU Name:
	
	  Remote LU #1:
	  LU Alias: REMOTE1
	  Network Name: APPN
	  LU Name: REMOTE
	
	  Remote LU #2:
	  LU Alias: REMOTE2
	  Network Name: APPN
	  LU Name: REMOTE
	
	The Fully Qualified LU Name for each of the Remote APPC LUs is APPN.REMOTE.
	
	The following error will be displayed when SNA Server Manager on a SNA Server
	version 3.0 SP2 or later system is used to open a SNA Server version 3.0 or 3.0
	SP1 configuration file (Com.cfg) that contains duplicate Remote APPC LUs on a
	connection:
	
	  SnaOle
	
	  The Fully Qualified LU Name has already been used.
	  The combination of the Net Name and LU Name cannot be the same as any other
	  APPC LU on the server.
	
	CAUSE
	=====
	
	The ability to add Remote APPC LUs using the same Fully Qualified LU Name to the
	same connection was inadvertantly added to SNA Server versions 3.0 and 3.0 SP1.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Remove the duplicate Remote APPC LUs from the SNA Server 3.0 and 3.0 SP1
	configurations before upgrading to SNA Server 3.0 SP2 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP3, 4.0, 4.0 SP1
	and 4.0 SP2. This problem was first corrected in SNA Server version 3.0 Service
	Pack 4 and SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Remote APPC LUs with the same Fully Qualified LU Name are allowed on a SNA
	Server as long as they are defined on different connections.
	
	SNA Server versions 3.0 SP2, 3.0 SP3, and 4.0 (all services packs) do not allow
	duplicate Remote APPC LUs on the same connection. This is the correct and
	expected behavior.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0,3.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

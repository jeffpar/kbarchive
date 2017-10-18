---
layout: page
title: "Q237194: LUA Applications Unable to Acquire DDDLU Sessions in LUA Pools"
permalink: kb/237/Q237194/
---

## Q237194: LUA Applications Unable to Acquire DDDLU Sessions in LUA Pools

	Article: Q237194
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna40
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	LUA applications may display the following error message when trying to start a
	host session through SNA Server by issuing an RUI_INIT or SLI_OPEN:
	
	  Primary Return Code = 0x0014 (LUA_UNSUCCESSFUL)
	  Secondary Return Code = 0x00000087 (LUA_COMMAND_COUNT_ERROR)
	
	Because SNA Server's TN3270 server is a LUA application, this problem can affect
	TN3270 clients as well. When configured in TN3270E mode, the 3270 applet
	included with SNA Server displays the following error message when this problem
	occurs:
	
	  ERROR - An error occurred during device type/name processing.
	
	Other TN3270 emulators may display different error messages when this occurs.
	However, LUA API traces captured on SNA Server show the return codes listed
	previously when the problem occurs.
	
	This error can occur when each of the following circumstances are met:
	
	- The host is configured to use DDDLUs (Dynamically Defined Dependent LUs).
	- The DDDLUs are defined as LUA LUs and are assigned to an LUA Pool. For
	  TN3270, the LUA Pool would also be assigned to the TN3270 Server.
	- More than five minutes has past since the host sent the ACTPU (Activate
	  Physical Unit) RU to the SNA Server. The ACTPU is sent by the host when the
	  host connection defined in SNA Server is started, therefore, this would occur
	  five minutes after starting the connection.
	
	Users are able to obtain host sessions that are activated within the five-minute
	window described here.
	
	CAUSE
	=====
	
	SNA Server does not send the required NMVTs (Network Management Vector
	Transport) to the host to request activation of DDDLUs five minutes after the
	receipt of the ACTPU when using LUA LUs assigned to LUA Pools.
	
	This same problem was corrected for 3270 LU Pools in SNA Server version 3.0
	Service Pack 1 and later. For additional information about the 3270 LU Pool
	issue, please see the following article in the Microsoft Knowledge Base:
	
	  Q164650 SNA Server Fails to Activate DDDLU Pooled LU
	
	The change implemented for 3270 LU Pools was not implemented for LUA pools at
	that time.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	After you apply the update, SNA Server sends the required NMVT RUs to the host
	to request activation of the requested LUA LUs.
	
	For additional information about SNA Server's DDDLU support for 3270 and LUA LUs,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q161492 LU Session Activation Using Dynamically Defined Dependent LUs
	
	  Q164592 Dynamically Defined Dependent LU Support for LUA LUs
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

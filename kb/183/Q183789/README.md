---
layout: page
title: "Q183789: Host Fails To Allocate Session to A CONNECT:Direct Client On NT"
permalink: /kb/183/Q183789/
---

## Q183789: Host Fails To Allocate Session to A CONNECT:Direct Client On NT

	Article: Q183789
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When CONNECT:Direct for Windows NT is configured to operate on a separate
	computer running Windows NT than the SNA Server, the host may fail to
	successfully submit a job (for example, file transfer, automation operations,
	and so forth) to the CONNECT:Direct workstation.
	
	SNA Server version 3.0 and higher may post the following messages in the Windows
	NT application Event Log:
	
	  Event ID: 705
	  Source: SNA Base Service
	  Description: Logon Failed.
	  Explanation: Connection request failed due to data security.
	  GetChallengeResponse failed --- Error Code: C0000008H
	
	  Event ID: 705
	  Source: SNA Base Service
	  Description: Logon Failed.
	  Explanation: Connection request failed due to data security.
	  RegisterLogonProcess failure --- Error Code: C0000041H
	
	  Event ID: 705
	  Source: SNA Server
	  Description: Logon Failed.
	  Explanation: Connection request failed due to data security. Invalid
	  Challenge Response --- Error Code: 002B000AH
	
	CAUSE
	=====
	
	The CONNECT:Direct service running on the Windows NT workstation is configured
	to operate under the Local System Account - therefore running with NULL
	credentials. When the application service attempts to establish a session to SNA
	Server after receiving the Attach (FMH-5) message from the host, it fails
	because of security (lack of credentials).
	
	The Attach message from the host may get processed successfully if the SNABASE
	service is operating with appropriate credentials.
	
	RESOLUTION
	==========
	
	Configure the CONNECT:Direct service to use a User Account and password instead
	of the Local System Account or enable the Guest account on the SNA Server. The
	user account must have the right to act as part of the operating system.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q233373: CPIC App No Longer Limited to Single Local APPC LU"
permalink: /kb/233/Q233373/
---

## Q233373: CPIC App No Longer Limited to Single Local APPC LU

	Article: Q233373
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server CPIC interface (Wcpic32.dll) is designed to use a single Local
	APPC LU for all conversations initiated by a CPIC application. This behavior is
	described in the following Knowledge Base article:
	
	  Q181123 CPIC Application Limited to Single Local APPC LU
	
	Note that this behavior prevents a CPIC application from making use of different
	pooled Local APPC LUs to reach one or more Remote APPC LUs residing on one or
	more remote systems. While this continues to be the default behavior for SNA
	Server 2.0, 2.1, 2.11, 3.0, and 4.0 (all service pack levels), an update to SNA
	Server 4.0 Service Pack 2 (SP2) is now available that implements a new registry
	parameter to allow a CPIC application to use multiple Local APPC LUs. See the
	"More Information" section for more details.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, and 4.0 SP2. This problem was first corrected in SNA Server
	version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	After you apply the updated Wcpic32.dll and configure the GETNEWTPID registry
	entry (as defined below), a CPIC application can allocate conversations using
	different Local APPC LUs. However, note the following behavior:
	
	- The CPIC application needs to call CMINIT (Initialize_Conversation) prior to
	  calling CMALLC (Allocate) to receive a new Local APPC LU. If the CPIC
	  application only calls CMINIT once, followed by two or more CMALLC requests,
	  only one Local APPC LU is used for all conversations.
	
	- Even when calling CMINIT more than once, a CPIC application may still receive
	  the same Local APPC LU for multiple conversations. There is not any
	  "balancing" of conversation use across different Local APPC LUs from a CPIC
	  application.
	
	- A CPIC application still tends to get conversations through one SNA Server. A
	  single CPIC application doesn't "balance" conversation requests across
	  different SNA Servers.
	
	This update is intended for SNA Servers or SNA Windows NT client computers
	running SNA 4.0 SP2. This update should be applied to any computers that support
	CPIC applications that require access through more than one Local APPC LU. After
	the update is applied, add the following registry key on the computer:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase/
	  Parameters/Client/
	
	  GETNEWTPID: REG_SZ: YES
	
	The presence of GETNEWTPID under this registry key enables this new behavior for
	CPIC applications.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

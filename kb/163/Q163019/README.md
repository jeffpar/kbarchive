---
layout: page
title: "Q163019: RUI Library Terminates RUI Session When PIU Has Not Been Sent"
permalink: /kb/163/Q163019/
---

## Q163019: RUI Library Terminates RUI Session When PIU Has Not Been Sent

	Article: Q163019
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain conditions, an LUA session may terminate unexpectedly with the
	following error message:
	
	  Event ID: 1954
	  Source: SNA RUI Application
	  Description: RUI internal logic error for LU <name>, code <value>
	
	CAUSE
	=====
	
	When the SNA Server service informs the RUI library that a Path Information Unit
	(PIU) has not been sent due to some problem (such as a bracket error), the RUI
	library terminates the RUI session. RUI internal logical error 1954 is logged in
	the application Event Log.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 Service Pack 1 and 3.0. This problem was corrected in the latest SNA Server
	for Windows NT 2.11 and 3.0 U.S. Service Packs For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The RUI library posts RUI_WRITE as complete once it has passed the data to the
	SNA Server service, instead of waiting for the SNA Server service to actually
	process the data. In this situation, it is possible that the PIU has not yet
	been sent. For example, this may be the case due to a race condition with the
	host application. When the SNA Server service informs the RUI library that the
	PIU has not been sent, the RUI library terminates the RUI session because it was
	already informed that the RUI_WRITE was completed successfully.
	
	Additional query words: prodsna 2.11.sp1 3.00 WINRUI SP1 LUA
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1,3.0
	
	=============================================================================
	

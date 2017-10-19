---
layout: page
title: "Q178255: SNA Server May Fail to Log Event 624 and Create Snadump.log"
permalink: /kb/178/Q178255/
---

## Q178255: SNA Server May Fail to Log Event 624 and Create Snadump.log

	Article: Q178255
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SNA Server or an SNA application ends abnormally due to an access violation
	or internal breakpoint, SNA Server normally logs an Event 624 and produces an
	Snadump.log file in the <snaroot>\traces directory, to assist support
	personnel in diagnosing problems. In some cases, SNA Server fails to log an
	Event 624 and produce an Snadump.log file.
	
	
	CAUSE
	=====
	
	In some cases, the SNA Server exception handling code was failing to produce an
	<snaroot>\traces\snadump.log following an access violation or unhandled
	exception in an SNA Server module.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 (including SP1
	and SP2).
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

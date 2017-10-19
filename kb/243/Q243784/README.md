---
layout: page
title: "Q243784: SNARAS Traces Continually Grow in Size If Left Enabled"
permalink: /kb/243/Q243784/
---

## Q243784: SNARAS Traces Continually Grow in Size If Left Enabled

	Article: Q243784
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SNARAS traces are enabled, the trace files
	%WinntRoot%\System32\Snaras.trc and %WinntRoot%\System32\Rassna.trc will
	continue to increase in size if you do not disable tracing. Eventually, the
	files will consume all disk space remaining on the boot partition.
	
	CAUSE
	=====
	
	The trace versions of Snaras.dll and Rassna.dll on the SNA Server 4.0 compact
	disc do not use the same tracing mechanism as the other SNA Server traces.
	Therefore, there is no limit to how large the files can grow.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0, 4.0 SP1, 4.0
	SP2, and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q243934: SNA Print Server May Take 100 Percent of CPU Processing Time"
permalink: kb/243/Q243934/
---

## Q243934: SNA Print Server May Take 100 Percent of CPU Processing Time

	Article: Q243934
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, the SNA Print Service's buffer can overrun. This
	causes a spike in the CPU's processor time.
	
	CAUSE
	=====
	
	The mainframe may continue to send data to the SNA Print Server after receiving
	sense data from the SNA Server. This may cause the SnaPrint buffer to overflow.
	
	RESOLUTION
	==========
	
	The SNA Print Server has been modified so that if a message arrives that will
	not fit into the print buffer and the session is closed, the message is ignored.
	Previously, the SNA Print Server continually attempted to put the message into
	the print buffer, and this caused the CPU spike. When the session is closed
	properly with an End Bracket (EB) or UNBIND, this problem does not occur.
	
	To resolve this problem, obtain the latest service pack for Microsoft SNA Server
	version 4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	WORKAROUND
	==========
	
	The best solution is to correct the datastream from the mainframe. If this is
	not possible, restarting the SNA Print Server will temporarily resolve the
	problem.
	
	STATUS
	======
	
	This problem was first corrected in Microsoft SNA Server 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This is the scenario in which this problem was reported:
	
	The SNA print session was configured to use a short job timeout value because the
	mainframe was not issuing an UNBIND or EB at the end of the print jobs. When a
	job timed out, the print session was successfully closed, but the mainframe
	continued to send data for the next job. Because the print session was closed,
	the SNA Print Service rejected the message with a NACK-1, sense data 0802 -
	Intervention required. The mainframe continued to send data messages,
	overrunning the SNA print buffer. The CPU spiked at 100%.
	
	The mainframe should not have sent data after receiving the sense data from the
	SNA Server. The proper behavior is to either re-BIND the session or send an end
	bracket followed by a begin bracket.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

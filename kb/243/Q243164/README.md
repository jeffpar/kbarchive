---
layout: page
title: "Q243164: Suppressing Form Feed Between Print Jobs Containing End Bracket"
permalink: /kb/243/Q243164/
---

## Q243164: Suppressing Form Feed Between Print Jobs Containing End Bracket

	Article: Q243164
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,3.0 U.S. SP1,3.0 U.S. SP2,4.0,4.0 SP1,4.0 S
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 3.0 U.S. SP1, 3.0 U.S. SP2, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, users may want small print jobs to consecutively print on one
	page and roll over to the next page only when the first one has been filled. If
	these jobs end with an End Bracket (EB) sent from the host, however, each job
	will print on a separate page.
	
	CAUSE
	=====
	
	Job termination in the SNA Server print session properties is set to End Bracket
	Received by default. Therefore, when the End Bracket is received from the host,
	the SNA Server assumes the job is complete and starts the next job on a new
	page.
	
	RESOLUTION
	==========
	
	In the properties of the print session in question, select the 3270 tab and
	check the Unbind Received radio button for Job Termination. With this option
	checked, the SNA Server does not end the print job until it receives an UNBIND
	from the host.
	
	Some hosts may not be configured to send an UNBIND. If this is the case, a job
	timeout setting is also needs to be specified in the print session properties.
	See below for more information.
	
	MORE INFORMATION
	================
	
	If the Unbind Received option is checked for Job Termination, the print jobs are
	queued until there is enough data to fill a page. If the user wants the data to
	start printing as soon as the data is received from the host, without being
	queued, you can specify the number of seconds the job should wait before
	printing. This option can also be set in the print session properties on the
	3270 tab. To do so, check the Timeout Job After box and enter the desired number
	of seconds.
	
	NOTE: Be sure to set the number of seconds high enough to accommodate the amount
	of time it takes to receive the entire print job from the host. Otherwise, only
	part of the job may be received before printing begins, resulting in incomplete
	print output. Experimenting with this value helps the user to determine an
	appropriate number of seconds.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,3.0 U.S. SP1,3.0 U.S. SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

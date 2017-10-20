---
layout: page
title: "Q180149: LU3 Print Jobs May Fail to Print After Initial Job Completes"
permalink: /kb/180/Q180149/
---

## Q180149: LU3 Print Jobs May Fail to Print After Initial Job Completes

{% raw %}

	Article: Q180149
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print multiple LU3 host print jobs to an SNA Server system, the second
	print job may fail to print. In addition, SNA Server will terminate the print
	session, which causes the printer logical unit (LU) on the host to be
	deactivated.
	
	This problem occurs when the second print job is not preceded by a BID command
	from the host. In this case, the second print job begins with the first part of
	the actual print data. SNA Server will log the following event in the Windows NT
	Application Event log when the problem occurs:
	
	  Event ID: 12
	  Source: SNA Server
	  Description: (1118) Negative Response from Remote System (SENSE = 4011)
	
	
	CAUSE
	=====
	
	When SNA Server receives first portion of the print data for the second print
	job, it sends it to the print server. The print server responds with a BID ACK
	(Acknowledgement). Because the second print job did not begin with a BID
	message, SNA Server never sent a BID to the print server, so it responds to this
	message with an error. The error message contains a sense code of 4011. Sense
	Code 4011 is defined in the IBM SNA Formats Guide (GA27- 3136).
	
	The print server responds with a BID ACK message because the LU3 printing code
	assumes that anything it receives that causes the Winvprt.dll file to start a
	print job is a BID message. This causes it to always respond with a BID ACK at
	the beginning of a new LU3 print job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q139818: Event 24 Is Logged w/ Severity Levels Information and Warning"
permalink: /kb/139/Q139818/
---

## Q139818: Event 24 Is Logged w/ Severity Levels Information and Warning

	Article: Q139818
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA Server Node logs Event 24 and sets the severity level in the system log
	to Information. The following is an excerpt from the system log:
	
	  Event ID: 24
	  Type: Information
	
	An SNA Server Message Trace, however, logs it as a Warning.
	
	CAUSE
	=====
	
	Although Event 24 is an Informational severity, it is stored in NTEVTS.MC as a
	Warning.
	
	RESOLUTION
	==========
	
	Microsoft has updated SNA Server to correct this problem. Event 24 is now logged
	with the Information severity level in the trace file and in the system log.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q158515: Auto Started TP Is Not Invoked if TP Has Mixed-Case TP Name"
permalink: kb/158/Q158515/
---

## Q158515: Auto Started TP Is Not Invoked if TP Has Mixed-Case TP Name

	Article: Q158515
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server logs the following events in the Microsoft Windows NT Application
	Event Log if the Autostarted Transaction Program (TP) fails to start because the
	TP Name contains any lower case letters:
	
	  
	
	  Event ID: 21
	  Source: SNA Server
	  Description: (1124) Negative Response Sent on Connection
	               <connection name> (SENSE = 846)
	
	  Event ID: 60
	  Source: SNA Server
	  Description: Failed to invoke APPC TP <TP Name in EBCDIC> (TP Name in
	               ASCII), sense data = 84c0000
	
	NOTE: Event 60, sense data 084C0000, is a common error that occurs when SNA
	Server receives an FMH-5 Attach (conversation startup request for a specified TP
	name) and the TP name is not configured in the SNA "subdomain" or cannot be
	started. It is very uncommon for the TP name to be defined in mixed-case format;
	the problem documented in this article is not a common cause of the above
	events.
	
	
	CAUSE
	=====
	
	This problem is only an issue for Autostarted TPs that have a mixed-case TP
	name. The SnaBase service reads the configured TP entries from the registry and
	adds them to SNA Server's Service Table to register them in the SNA Server
	Subdomain. SnaBase was automatically capitalizing the TP Name even if the TP had
	been configured in the Registry with a mixed-case TP Name.
	
	When SNA Server tries to invoke a TP, it searches through the Service Table to
	match the TP Name that it receives in an Incoming Attach with one that is listed
	in the Service Table. In this case, the Incoming Attach specified a mixed-case
	TP Name, and because the Service Table only contained the upper-case name, the
	TP could not be started, resulting in the errors listed above.
	
	Notes:
	
	- Operator started TPs with a mixed-case TP Name do not experience this
	  problem.
	
	- TPSETUP automatically capitalizes the TP Name in the Registry when it is used
	  to set up the TP. If you need to set up a TP with a mixed-case name, you will
	  need to set it up manually. Please refer to Chapter 2 of the SNA Server
	  [ASCII 147]APPC Programmer's Guide[ASCII 148] for more information on how to
	  configure invokable TPs.
	
	RESOLUTION
	==========
	
	Use TP Names that contain only upper-case characters.
	
	Because it may not always be possible to avoid mixed-case TP Names, a fix has
	been made to SNA Server so that TP Names are no longer automatically capitalized
	before they are put into the Service Table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.10, 2.11, and 2.11 Service Pack 1. This problem was corrected in the
	latest Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 invoked kbbug2.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

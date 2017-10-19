---
layout: page
title: "Q182691: Event 730 Can Return Garbled Characters for Local LU Name"
permalink: /kb/182/Q182691/
---

## Q182691: Event 730 Can Return Garbled Characters for Local LU Name

	Article: Q182691
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Event 730 in the Windows NT Application Event Log may return garbled ASCII
	characters rather than the correct Local LU Name.
	
	CAUSE
	=====
	
	The LU Name logs as a string, when in fact it is a non-NULL terminated CHAR8,
	causing the log to incorrectly interpret the Local LU Alias.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	One example of this problem was generated with the following parameters:
	
	"UN301" is the invokable TP name, "AK6" is the remote LU alias, and "LOCAL" is
	the local LU alias.
	
	The message text of the Event 730 in the Application Event log stated:
	
	  
	
	  The SNA Server was unable to locate an invokable TP UN301   , APPC LU
	  Alias <AK6     LOCAL #&%&^%*@>, Workstation name: (null).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

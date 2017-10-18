---
layout: page
title: "Q188238: SNA MngAgent Trap in Function CManage::GetNotify"
permalink: kb/188/Q188238/
---

## Q188238: SNA MngAgent Trap in Function CManage::GetNotify

	Article: Q188238
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server Manage Agent service (MngAgent.exe) may generate an application
	exception error when APPC sessions are not properly cleaned up. When this
	problem occurs, the Windows NT Application Event Log will contain a message
	similar to the following:
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file C:\SNA\traces\snadump.log for
	  mngagent.exe
	
	If Drwtsn32.exe is the default debugger on the computer running Windows NT Server
	and SNA Server, an entry similar to the following will be included in the
	drwtsn32.log in the Windows NT directory:
	
	  Application exception occurred:
	     App: exe\mngagent.dbg (pid=<process ID #>)
	     When: <date> @ <time>
	     Exception number: c0000005 (access violation)
	
	
	CAUSE
	=====
	
	Partner APPC sessions are not being cleaned up properly when SNA Server receives
	notification from a client to close an APPC session. This eventually leads to
	the application exception error.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions SP2, 3.0,
	3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This problem was first corrected in
	SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

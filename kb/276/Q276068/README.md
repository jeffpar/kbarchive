---
layout: page
title: "Q276068: SNA Server Traps When Sending &quot;Session Deactivated Event&quot;"
permalink: kb/276/Q276068/
---

## Q276068: SNA Server Traps When Sending &quot;Session Deactivated Event&quot;

	Article: Q276068
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service may experience an Access Violation (AV) in the S1PCSGO
	function while trying to send an unsolicited status update to SNA Server Manager
	to report a session deactivated event. If Drwtsn32.exe is configured as the
	default debugger on the SNA Server system, the Drwtsn32.log file will be updated
	with information similar to the following:
	
	  Application exception occurred:
	  App: [path]snaservr.exe (pid=[process ID #])
	  When: [date] @ [time]
	  Exception number: c0000005 (access violation)
	
	  [...]
	
	  function: s1pcsgo
	
	CAUSE
	=====
	
	There is a small timing window where the SNA Server service may try to send a
	status update for a resource after the resource has been deleted from the SNA
	Server configuration. When this occurs, the SNA Server service ends up
	referencing a null internal record that causes the specified Access Violation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 (all
	SP), 4.0, 4.0 SP1, 4.0 SP2, and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The SNA Server service has been updated to verify that a resource is valid
	before it reports status for the resource. This update will prevent this type of
	Access Violation from occurring in the future.
	
	Additional query words: sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

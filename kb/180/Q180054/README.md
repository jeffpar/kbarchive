---
layout: page
title: "Q180054: Perfmon Trap or Winlogon STOP C000021A When Running Perfmon"
permalink: /kb/180/Q180054/
---

## Q180054: Perfmon Trap or Winlogon STOP C000021A When Running Perfmon

{% raw %}

	Article: Q180054
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Windows NT Server Performance Monitor locally on a computer
	running SNA Server and you pressing the "+" key (which loads the extension
	Performance Monitor DLLs, including snaperf.dll), the following errors may
	occur:
	
	- All Performance Monitor objects and counters are blank, even SNA Server ones.
	  When you start Performance Monitor under a debugger, it indicates that the
	  Performance Monitor heap is corrupted. This causes Performance Monitor
	  (Perfmon.exe) to encounter an access violation (0xC0000005).
	
	- When you start Performance Monitor on another system, focus on the computer
	  running SNA Server 4.0, and press the "+" key, an access violation
	  (0xC0000005) occurs in Winlogon.exe, leading to a STOP 0xC000021A.
	
	- The following log entry may appear in the <ntroot>\drwtsn32.log file:
	
	  Application exception occurred:
	  App: exe\winlogon.dbg (<process ID>)
	  Exception number: c0000005 (access violation)
	  [...]
	  function: RtlAllocateHeap
	  [...]
	
	NOTE: A similar access violation problem may occur with SNA Server 3.0, though
	this problem is fixed when applying 3.0 Service Pack 2.
	
	CAUSE
	=====
	
	This problem is caused by a regression introduced in SNA Server 4.0 when support
	for multiple instances of the SNA Server service on a single computer was added.
	However, multiple SNA Server services do not need to be configured in order to
	encounter this problem.
	
	
	WORKAROUND
	==========
	
	Do not run Windows NT Performance Monitor against SNA Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	For additional information on the access violation problem may with SNA Server
	3.0, please see the following article in the Microsoft Knowledge Base:
	
	  Q169488 Errors When Performance Monitoring SNA Server
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

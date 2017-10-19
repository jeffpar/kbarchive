---
layout: page
title: "Q169488: Errors When Performance Monitoring SNA Server"
permalink: /kb/169/Q169488/
---

## Q169488: Errors When Performance Monitoring SNA Server

	Article: Q169488
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you initially activate Windows NT Server Performance Monitor to collect SNA
	Server performance data, the following errors may occur:
	
	- Perfmon.exe may encounter an access violation.
	
	- If SNA Server is running on Windows NT Server 3.51, a Winlogon.exe access
	  violation may occur, leading to a STOP 0x0000001E error.
	
	- If SNA Server is running on Windows NT Server 4.0, the following event may be
	  logged in the Windows NT application event log:
	
	     Event ID: 1013
	     Source: Perflib
	     Description:
	     The collect procedure in Extensible Counter DLL
	     "C:\SNA\system\snaperf.dll" for the "SnaServr" service returned a
	     buffer that was larger than the space allocated and may have
	     corrupted the application's heap. This DLL should be disabled or
	     removed from the system until the problem has been corrected to
	     prevent further corruption. The application accessing this
	     performance data should be restarted. The Performance data returned
	     by counter DLL will be not be returned in Perf Data Block. Overflow
	     size is data DWORD 0.
	
	- If SNA Server is running on Windows NT 4.0, a winlogon.exe access violation
	  may occur, which would cause the following log entry in the
	  <ntroot>\drwtsn32.log file:
	
	     Application exception occurred:
	     App: exe\winlogon.dbg (<process ID>)
	     Exception number: c0000005 (access violation)
	     [...]
	     function: RtlAllocateHeap
	     [...]
	     FAULT ->77f64654 0fb716           movzx   edx,word ptr [esi]
	
	CAUSE
	=====
	
	The SNA Server performance monitoring collection routine returns a Buffer Size
	greater than the Perfmon buffer pointer allocated. The data collection routines
	AddNodeCounters and AddRTMCounters write data to the buffer, but fail to
	decrement the remaining byte count, which results in the buffer write operation
	going past the end of the buffer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix, the code has been modified to decrement the remaining byte count
	for the Node and RTM counter collections.
	
	Additional query words: crash blue
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

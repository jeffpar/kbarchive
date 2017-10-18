---
layout: page
title: "Q194594: Snaservr.exe Traps While Starting More Than 50 Connections"
permalink: kb/194/Q194594/
---

## Q194594: Snaservr.exe Traps While Starting More Than 50 Connections

	Article: Q194594
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 01-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may experience a hardcoded breakpoint
	application exception if it is configured to start 50 or more connections
	simultaneously. If Drwtsn32.exe is configured as the default debugger for the
	Windows NT system running SNA Server, the Drwtsn32.log file will contain
	information similar to the following when this occurs:
	
	  Application exception occurred:
	       App: exe\snaservr.dbg (pid=<Process ID #)
	       When: <date> @ <time>
	       Exception number: 80000003 (hardcoded breakpoint)
	
	  [data omitted...]
	
	  function: DbgBreakPoint
	  FAULT ->77f76148 cc               int     3
	          77f76149 c3               ret
	          77f7614a 8bc0             mov     eax,eax
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4
	  602012a0 55536021 57c08556 0102840f 15ff0000 60201050
	
	  Function Name
	  ntdll!DbgBreakPoint
	
	NOTE: The above lines have been wrapped for readability.
	
	In addition, SNA Server may log the following event in the Windows NT Application
	Event Log when this occurs:
	
	  Event ID: 102
	  Source: SNA Server
	  Description: (BC6) Internal Error
	
	            Subcode Information:
	            X'0B02' A dynamic storage allocation request has failed.
	            X'0BC1' Buffer header pointer is corrupted.
	            X'0BC3' Corruption of internal free buffer pool.
	            X'0BC5' Free ready pool is empty.
	            X'0BC6' Free active pool is empty.
	
	
	CAUSE
	=====
	
	The application exception and Event 102 occur when the SNA Server service
	depletes its free/ready pool, which is its internal list of threads that that
	are waiting to be scheduled for execution. This pool can be depleted if there
	are more than 50 connections trying to activate simultaneously.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	Connections can be configured for "On Demand" activation instead of for "On
	Server Startup" activation so that all of the connections will not attempt to
	start when the SNA Server service is started. "On Demand" connections will start
	when a user requests a resource (such as a LU or LU Pool) that is defined on
	that connection that is not already available on a previously activated
	connection.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

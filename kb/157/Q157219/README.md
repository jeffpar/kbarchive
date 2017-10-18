---
layout: page
title: "Q157219: INETINFO Access Violation When Using SNA Server APPC"
permalink: kb/157/Q157219/
---

## Q157219: INETINFO Access Violation When Using SNA Server APPC

	Article: Q157219
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1; winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	- Microsoft Internet Information Server 2.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Microsoft Internet Information Server (IIS) version 2.0 and use the
	HTTPODBC DLL to query a DB2 database using the StarQuest ODBC/DRDA driver
	included with the Microsoft SNA Server 2.11 Windows NT client software, the
	StarQuest ODBC driver uses an APPC session to communicate with a host or AS/400
	DB2 database.
	
	Whenever a SQL error is encountered by the ODBC driver, or even after a
	successful query response, the following access violation occurs:
	
	  App: exe\inetinfo.dbg <process id>
	  When: <date and time>
	  Exception number: c0000005 (access violation)
	
	The Drwtsn32.log shows all the threads of the process; however, the log does not
	indicate the thread that encountered the "FAULT."
	
	CAUSE
	=====
	
	This problem occurs when Wappc32.dll is unloaded while one of the Snadmod.dll
	threads is executing the APPC routing procedure. The following stack trace of
	the failure is observed, indicating that the Snadmod.dll attempted to invoke a
	function that is no longer in memory:
	
	> kb=24DFF1c, 24dff14, 24dff54
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	024dff1c  01ffaf06  101541a8 025b0004 00000001 0x024dff54
	024dff50  01fee05a  101541a8 00000001 00000000 SNADMOD!sepdq2_int+0x106
	024dff78  01fee32e  024dffa8 024dffa2 024dffa6 SNADMOD!sbpdin_int+0x21a
	024dffb8  77f04f4a  00000000 02028172 00000000 SNADMOD!sepdramp+0xde
	024dffec  00000000  01fee250 00000000 00000000
	KERNEL32!BaseThreadStart+0x51
	
	SNADMOD!_sepdq2_int@8+0x100:
	0x01ffaf00  51               push         ecx
	0x01ffaf01  57               push         edi
	0x01ffaf02  ff542420         call         dword ptr [esp+20]
	
	
	RESOLUTION
	==========
	
	A hot fix to SNA Server 2.11 and 2.11 Service Pack 1 is available to correct
	this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 and 2.11
	Service Pack 1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna internet
	
	======================================================================
	Keywords          : kbinterop kbprogramming 
	Technology        : kbiisSearch kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1; winnt:2.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q137382: Client RPC Call for Remote APPC LU List Causes SNABASE Error"
permalink: kb/137/Q137382/
---

## Q137382: Client RPC Call for Remote APPC LU List Causes SNABASE Error

	Article: Q137382
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server generates a Dr. Watson error in SNABASE.EXE when a client does a RPC
	call to get a list of Remote APPC LUs which are paired with a Local APPC LU. The
	SNA Server logs an Event ID 624 in the Windows NT Application Log (as shown in
	the Event Viewer) indicating that a SNADUMP.LOG was created for SNABASE.EXE. The
	error also generates a DRWTSN32.LOG when it occurs. The following is an excerpt
	from a DRWTSN32.LOG that was created following one of the SNABASE errors:
	
	  Application exception occurred:
	  App: C:\SNA\system\snabase.exe (pid=139)
	  When: 8/7/1995 @ 10:38:21.884
	  Exception number: c0000005 (access violation)
	
	Your DRWTSN32.LOG file will appear somewhat different than this example.
	
	NOTE: If using Windows NT Server 3.5, you will have to load the Windows NT
	Symbols to get a proper Dr. Watson log when using SNA Server.
	
	After the SNABASE error occurs, the SNA Server stops accepting sessions from SNA
	Server clients until the SNA Server is shutdown and restarted.
	
	CAUSE
	=====
	
	This error is caused when SNA Server tries to copy (read) a larger range of
	memory than is in a memory buffer. This happens when a client makes an RPC call
	to get the list of Remote APPC LUs partnered with a particular Local APPC LU and
	the number of Remote APPC LUs exceed the size of the client's buffer. The error
	only occurs if the memory buffer is located at the end of a 4K page and the
	extra memory that SNA Server attempts to read is located on the next uncommitted
	page. The buffer size is usually less than one hundred bytes so the probability
	of this error is quite small.
	
	RESOLUTION
	==========
	
	Microsoft has modified the files, SNABASE.EXE and SNADMOD.DLL, to correct this
	problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.10 2.11 prodsna DRWTSN32.LOG SNADUMP.LOG trap
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

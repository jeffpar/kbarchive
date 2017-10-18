---
layout: page
title: "Q106524: Invalid Named Pipe Message Causes SNABASE.EXE Exception"
permalink: kb/106/Q106524/
---

## Q106524: Invalid Named Pipe Message Causes SNABASE.EXE Exception

	Article: Q106524
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server generates a Dr. Watson error in SNABASE.EXE when it receives an
	invalid message over a Named Pipe connection from a client. The SNA Server also
	logs an Event ID 624 in the Windows NT Application Log (as shown in the Event
	Viewer) indicating that an SNADUMP.LOG was created for SNABASE.EXE. The
	following is an excerpt from a DRWTSN32.LOG that is created following one of
	these SNABASE errors:
	
	  Application exception occurred:
	  App: snabase.DBG (pid=148)
	  When: 10/31/1995 @ 11:29:1.2
	  Exception number: c0000005 (access violation)
	
	NOTE: Your DRWTSN32.LOG file will appear somewhat different than this example.
	
	
	CAUSE
	=====
	
	SNABASE.EXE on the SNA Server is not properly handling an invalid incoming
	NewPipe messages from SNA Server clients over Named Pipe connections. The
	NewPipe messages are only sent to the SNA Server when the WNAP (16-bit) or
	SNABASE (32-bit) process is initializing on SNA Server clients.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  <winroot>\SYSTEM\SNALM.DLL
	  <winroot>\SYSTEM\SNAIP.DLL
	  <winroot>\SYSTEM\SNANW.DLL
	  <winroot>\SYSTEM\SNAAT.DLL
	  <winroot>\SYSTEM\SNABV.DLL
	  <winroot>\SYSTEM\SNANB.DLL
	
	These corrected files increase validity checking on incoming NewPipe messages
	received from clients over Named Pipe connections as well as the other
	client/server protocols supported by SNA Server. In addition, SNA Server now
	logs an Event 631 in the Application Log when it receives an invalid NewPipe
	message from a client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	For Win 3.x clients, a potential workaround is to start WNAP in advance (by
	adding WNAP.EXE to the startup group of Windows or Windows for Workgroups), so
	that it's not automatically invoked when an SNA application or emulator is
	started.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	
	=============================================================================
	

---
layout: page
title: "Q137581: Problems with Multiple Sessions over TCP/IP using NetSoft Elite"
permalink: /kb/137/Q137581/
---

## Q137581: Problems with Multiple Sessions over TCP/IP using NetSoft Elite

	Article: Q137581
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
	
	When you open multiple 3270 sessions with NetSoft Elite 3.5 over a SNA Server
	2.11 Windows 3.1 or Windows for Workgroups client configured to use TCP/IP
	sockets to communicate with multiple SNA Servers, NetSoft Elite displays the
	following errors and hangs:
	
	  Error 2574: LU or LU Group not found in configuration
	  Error 87: SSCP connection already open
	  Error 85 No LU in group free
	
	If you have a session already open, you may lose that session when you open a
	second session.
	
	NOTE: The above errors are returned by the SNA Server client interface. These
	errors normally occur under the following conditions. For example:
	
	- Error 2574 can occur if you open a specific 3270 LU session when the SNA
	  Server supporting that session is currently not active.
	
	- Error 85 can occur if another user already has the specific LU open.
	
	- Error 87 can occur if a pooled LU session is requested, though all LUs in the
	  pool are already in use.
	
	However, the symptoms above occur even though the SNA Server(s) and LUs being
	requested are available.
	
	CAUSE
	=====
	
	There are two separate causes.
	
	First, when multiple sessions are opened using NetSoft Elite, the NetSoft 3270
	emulator submits multiple Open (SSCP) requests at the same time. However, the
	SNA client interface can only accept one Open (SSCP) request at a time from a
	given windows process.
	
	Secondly, the SNA Server Windows and Windows for Workgroups TCP/IP DLL file is
	not handling the receipt of data on one TCP/IP socket while attempting to
	connect to an SNA Server over a second socket, for example, when a second
	session is opened. This leads to a lost client session error (or Path error)
	that is returned to the emulator on the session that had been working.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  Path and File name           Description
	  --------------------------------------------------------------------
	  <WINROOT>\SYSTEM\WDMOD.DLL   SNA Server Win 3.x client module
	  <WINROOT>\SYSTEM\IPCLI.DLL   SNA Server Win 3.x TCP/IP interface
	                               module
	  <sna.win>\WNAP.EXE           SNA Server Win 3.x client moduleSTATUS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	NetSoft Elite 3.5 is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodsna 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

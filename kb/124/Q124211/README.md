---
layout: page
title: "Q124211: Using IBM PC/3270 Version 4.0 on SNA Server"
permalink: kb/124/Q124211/
---

## Q124211: Using IBM PC/3270 Version 4.0 on SNA Server

	Article: Q124211
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IBM Personal Communications/3270 WorkStation Program (IBM PC/3270) version 4.0
	supports the SNA Server Windows client interface.
	
	MORE INFORMATION
	================
	
	To run this application on top of an SNA Server Windows client computer:
	
	1. The SNA Server Windows client software must first be installed on the Windows
	  or Windows for Workgroups computer. Any SNA Server client-server connection
	  method can be selected.
	
	  NOTE: Refer to Article Q145885 (Running 16-bit 3270/FMI Applications on
	  Windows NT & Windows 95) for more details on how to run the SNA Server
	  Win3x client on Windows 95, Windows NT, and on the SNA Server system itself.
	  However, the Win3x client software will not run directly on SNA Server
	  because the Win32 SNA client software is installed there by default.
	
	2. 3270 LUs must be assigned to the user or group (or Everyone user) within the
	  Users and Groups window of SNA Server Admin.
	
	3. Configure PC/3270 to use this interface:
	   - Run the Personal Communications "Start/Configure Sessions" icon
	
	   - Choose the Communication/Configure dialog. Set: Adapter: LAN Attachment:
	     FMI Windows NT - client
	
	   - Choose the Configure button. This will automatically retrieve the 3270 LUs
	     assigned to the user/group within the SNA Server configuration file.
	     Select an LU from the list.
	
	
	The IBM PC/3270 is manufactured by International Business Machines Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: wfw wfwg prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

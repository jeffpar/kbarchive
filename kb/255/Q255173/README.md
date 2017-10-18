---
layout: page
title: "Q255173: Applet Stop Responding When Connecting with TN3270E"
permalink: kb/255/Q255173/
---

## Q255173: Applet Stop Responding When Connecting with TN3270E

	Article: Q255173
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user tries to connect a TN3270E session using the 3270 Applet included
	with SNA Server, the applet may stop responding with a blank screen. The Status
	bar shows Connected. At this point, the applet is locked, and the only way to
	close the session is to end the task using Task Manager. This problem only
	occurs when the 3270 Applet is configured in TN3270E mode.
	
	CAUSE
	=====
	
	When the BIND sent from the host specifies a Max Request Unit (RU) size of 0 for
	the primary half-session, the 3270 Applet moves into a tight loop while
	processing the BIND.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 (all
	SP), 4.0, 4.0SP1, 4.0SP2, and 4.0SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following excerpt from an SNA Server message trace shows a BIND sent from
	the host specifying an RU size of 0 for the primary half-session:
	
	  DLC 07160000->01020101 DLC DATA
	  DLC DAF:02 OAF:01 ODAI:off Exp.
	  DLC BIND RQD SC FI BC EC DR1
	  DLC
	  DLC ---- Header at address 01204688, 1 elements ----
	  DLC 01020000 00002D00 02012757 01006C06 ......-...'W..l.
	  DLC
	  DLC ---- Element at address 01BF0EDC, start 10, end 49 ----
	  DLC 6B800031 010303B1 B0308000 00850000 k..1.....0...e..
	  DLC 00028000 00000000 00000002 000008D9 ...............R
	  DLC E3D6E3C1 D3C4E500 TOTALDV.
	
	Bytes 10 and 11 (where Byte 0 is X'31') in this BIND are defined as X'8500'.
	These are the bytes that specify the RU sizes for the secondary and primary
	half-sessions, respectively. When the primary half-session Max RU size is 0, the
	applet gets into a tight loop when it receives the BIND Image in TN3270E mode.
	The updated TN3270.DLL corrects the problem in the applet. Also, if the BIND is
	changed so that Byte 11 is not 0, the problem does not occur.
	
	Third-party emulators may also experience this problem, and it may be necessary
	to upgrade to a newer version. Please refer to the vendor of the emulator for
	more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

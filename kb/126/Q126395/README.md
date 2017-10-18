---
layout: page
title: "Q126395: Ways to Increase the Number of AS/400 LU6.2 Sessions"
permalink: kb/126/Q126395/
---

## Q126395: Ways to Increase the Number of AS/400 LU6.2 Sessions

	Article: Q126395
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	By default there are 64 sessions per LU-LU pairing in SNA Server, as
	defined by the QPCSUPP mode. To increase the number of sessions, perform
	one or both of the following:
	
	1. Create more Local APPC LUs in SNA Server Admin/Manager. Each LU/LU partnering
	  over the QPCSUPP mode supports up to 64 sessions by default.
	
	2. Increase the session limits in QPCSUPP mode on the AS/400 and in the SNA
	  Server Admin/Manager. The maximum for session limits is 512. This number is
	  imposed by OS/400 (the AS/400 operating system).
	
	  To increase these session limits in SNA Server 2.x:
	  a. Choose Remote LU.
	
	  b. Choose Partners.
	
	  c. Choose Mode.
	
	  d. On the QPCSUPP mode, change the Parallel Session Limit to 512 (or the
	     desired number) and change the Minimum Contention Winner Limit to half
	     this value.
	
	  To increase the session limits in SNA Server 3.0 and later:
	  a. Select the APPC Modes folder in SNA Server Manager.
	
	  b. Right-click QPCSUPP in the right-hand pane and click Properties on the
	     context menu.
	
	  c. Select the Limits tab in the QPCSUPP Properties dialog box.
	
	  d. Change the Parallel Session Limit to 512 (or the desired number) and
	     change the Minimum Contention Winner limit to half this value.
	
	  NOTE: After you change and save the SNA Server configuration, stop and restart
	  the SNA Server service.
	
	To change the session limits on the AS/400, use the CHGMODD(QPCSUPP)
	command.
	
	- Maximum sessions (MAXSSN) must match the parallel session limit.
	
	- Maximum conversations (MAXCNV) must match the parallel session limit.
	
	- Locally controlled sessions (LCLCTLSSN) must match the partner minimum
	  contention winner limit.
	
	NOTE: Mode definition changes on the AS/400 may not be dynamic. You will
	need to vary off the controller for SNA Server and then vary it back on for
	the mode changes to take affect.
	
	To verify the mode settings that are currently negotiated, use the
	following AS400 commands at the AS400 command line:
	
	  
	
	  "wrkcfgsts *ctl<cpname (snaserver)>" (without the quotation marks)
	
	and press Enter. Then choose the device (next entry down from the
	controller), and place a 9 next to the device and press Enter to display
	the mode status. Finally place a 5 next to the QPCSUPP mode and press
	Enter to display the currently negotiated mode status.
	
	Additional query words: prodsna admin
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	
	=============================================================================
	

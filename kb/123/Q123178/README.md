---
layout: page
title: "Q123178: Rumba 3270 User Names Appear as &quot;Unknown&quot; in SNA Admin"
permalink: kb/123/Q123178/
---

## Q123178: Rumba 3270 User Names Appear as &quot;Unknown&quot; in SNA Admin

	Article: Q123178
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Wall Data Rumba Office version 1.0 3270 emulator on an SNA
	Server Windows version 3.x client computer, the SNA Server Administration
	program may display the user name as "Unknown."
	
	If you start the SNA Server Windows version 3.x client ahead of time (by starting
	WNAP.EXE manually, or by adding WNAP.EXE icon to the Windows Startup group), the
	user name appears correctly.
	
	CAUSE
	=====
	
	Due to an initialization problem, the Rumba 3270 emulator was not properly
	initializing the underlying SNA Server client software before opening a 3270
	session, causing the user name to appear as "Unknown" in the SNA Server
	Administration program.
	
	
	RESOLUTION
	==========
	
	To obtain a fix for this problem, call Wall Data technical support at (206)
	814-9255.
	
	The Rumba product discussed here is manufactured by Wall Data Incorporated, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

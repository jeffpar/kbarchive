---
layout: page
title: "Q172914: CPIC App Traps on SNA Windows 95 Client Running on Windows NT"
permalink: /kb/172/Q172914/
---

## Q172914: CPIC App Traps on SNA Windows 95 Client Running on Windows NT

	Article: Q172914
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run a 32-bit Windows CPIC application using the SNA Windows
	95 Client software installed on a Windows NT computer, the CPIC application may
	encounter an access violation (0xC0000005) when started.
	
	This problem can occur with any CPIC application when run in this configuration;
	it was originally found while testing the SNA Windows 95 AFTP client software
	(Aftp.exe) on Windows NT.
	
	CAUSE
	=====
	
	The SNA Server Windows 95 version of the Wcpic32.dll file attempts to load
	Dbgtrace.dll. This attempt fails when the SNA Windows 95 client is installed and
	running on Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the Windows 95 version of Wcpic32.dll does not attempt to
	load Dbgtrace.dll when running on Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

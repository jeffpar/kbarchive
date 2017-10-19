---
layout: page
title: "Q160885: GPF in Krnl386 When Using CPIC Thunking DLL on Windows NT"
permalink: /kb/160/Q160885/
---

## Q160885: GPF in Krnl386 When Using CPIC Thunking DLL on Windows NT

	Article: Q160885
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a 16-bit CPIC application against the SNA Server WinCPIC thunking
	DLL (wincpic.dll from <snaroot>\system\thunk\) on a computer running
	Windows NT Server, the following error message may appear:
	
	  <application> has caused a general protection fault in module
	  krnl386.exe at 1:9044
	
	The offset of the failure may vary.
	
	CAUSE
	=====
	
	The SNA Server WINCPIC thunking DLL is not properly freeing memory, which
	eventually causes the application's 32-KB local heap to be exhausted, leading to
	the failure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	2.11 Service Pack 1 (SP1) and 3.0. This problem was corrected in the latest
	Microsoft SNA Server 2.11 and 3.0 U.S. Service Packs. For information on
	obtaining these service packs, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: hang kbbug2.10 kbbug2.11
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.1,2.11,2.11 SP1,3.0
	
	=============================================================================
	

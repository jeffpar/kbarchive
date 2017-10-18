---
layout: page
title: "Q160450: RUI_TERM Hangs on Inactive LU After Session Cycle"
permalink: kb/160/Q160450/
---

## Q160450: RUI_TERM Hangs on Inactive LU After Session Cycle

	Article: Q160450
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork kbprogrammingkbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are calling RUI_TERM on an inactive LUA LU, the RUI_TERM may stop
	responding and never complete. This was observed on the second time through the
	following call sequence:
	
	  WinRUIStartup
	   <- OK
	  RUI_INIT ->
	   <- RUI_INIT error (LU inactive)
	  RUI_TERM ->
	   <- LUA_OK
	  WinRUICleanup
	   <- Error 1 (WLUASYSNOTREADY)
	
	The first time through, the RUI_TERM completes without a problem. However, when
	executing this loop a second time, the RUI_TERM never completes.
	
	NOTE: If the connection supporting the LUA LU is not "Active", or if SNA Server
	has not received an ACTLU for this LU, the SNA Server 2.x Administrator program
	or SNA Server 3.0 Manager will display the LU as "Inactive."
	
	CAUSE
	=====
	
	This is caused by a problem in the SNA Server RUI DLL (Winrui32.dll for Windows
	NT or Windows 95 clients, or Winrui.dll for Windows 3.x clients).
	
	RESOLUTION
	==========
	
	An update is available to correct this problem. This fix is already included in
	SNA Server 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	and 2.11. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

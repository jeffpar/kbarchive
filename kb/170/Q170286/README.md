---
layout: page
title: "Q170286: Application Hangs if WinRUIStartup Called Before WinAPPCStartup"
permalink: kb/170/Q170286/
---

## Q170286: Application Hangs if WinRUIStartup Called Before WinAPPCStartup

	Article: Q170286
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an application attempts to open the SNA Server Windows APPC and RUI
	interfaces from the same process, the application may stop responding (hang) if
	WinRUIStartup() is called before WinAPPCStartup().
	
	NOTE: The RUI interface provides access to LU0-3 host applications, while APPC
	provides access to partner APPC transaction programs over LU6.2.
	
	RESOLUTION
	==========
	
	To workaround the problem, WinAPPCStartup should be called before WinRUIStartup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 2.11, 3.0
	(all SPs), and 4.0 (all SPs).
	
	We are researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available
	
	Additional query words: winappc winrui winlua SNA Server, versions 2.11, 3.0 (all SPs), and 4.0 SPs)
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	

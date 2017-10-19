---
layout: page
title: "Q194553: First SLI_OPEN is Not Traced When LUA API Tracing Enabled"
permalink: /kb/194/Q194553/
---

## Q194553: First SLI_OPEN is Not Traced When LUA API Tracing Enabled

	Article: Q194553
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If "SNA Application" LUA API tracing is enabled, and a Session Level Interface
	(SLI) application is started, the first SLI call is not traced to the trace file
	(Cliapi1.atf or Cliapi2.atf). Tracing only starts after the SLI DLL initiates
	its underlying call to RUI_INIT.
	
	CAUSE
	=====
	
	The Win32 SLI DLL (Winsli32.dll) is not initializing API tracing until the
	underlying RUI DLL (Winrui32.dll) is initialized via RUI_INIT. Therefore, the
	first SLI_OPEN verb is not traced.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the Service Pack is applied, tracing is initialized when the Winsli32.dll
	is invoked by the application.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

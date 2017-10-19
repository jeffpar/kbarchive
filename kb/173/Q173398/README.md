---
layout: page
title: "Q173398: SNA Win 3.x Application Fails over WinNT Client Thunking DLLs"
permalink: /kb/173/Q173398/
---

## Q173398: SNA Win 3.x Application Fails over WinNT Client Thunking DLLs

	Article: Q173398
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all SP),3.0 (all SP)
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SNA Server 16-bit Windows application fails to work over the SNA Server
	Windows NT client software configured with the 16-bit to 32-bit SNA API thunking
	DLLs. However, the same application works fine over the SNA Server Windows 3.x
	client software.
	
	The following errors messages may appear only when you run the Windows
	application over the following SNA API thunking DLLs:
	
	- If the APPC API is being used (over Winappc.dll), TP_STARTED fails with:
	
	  primary_rc = 0xF004 (AP_COMM_SUBSYSTEM_NOT_LOADED)
	  secondary_rc = 0xCCCCCCCC (undefined)
	
	- If the CPIC API is being used (over Wincpic.dll), any CPIC function fails
	  with Error 20 (CM_PRODUCT_SPECIFIC_ERROR). Note that this error can also be
	  due to other problems documented in Knowledge Base article Q132720.
	
	- If the LUA RUI or SLI API is being used (over Winrui.dll or Winsli.dll), the
	  following error message displays:
	
	  primary_rc = 0xF004 (LUA_COMM_SUBSYSTEM_NOT_LOADED)
	  secondary_rc = 0xFFFFFFFF (undefined)
	
	- If the Common Service Verb API is being used (over Wincsv.dll), the following
	  error message displays:
	
	  primary_rc = 0xF004 (LUA_COMM_SUBSYSTEM_NOT_LOADED)
	  secondary_rc = 0xFFFFFFFF (undefined)
	
	For instructions on how to enable the 16-bit to 32-bit SNA API thunking DLLs, see
	the following Knowledge Base article:
	
	  Q107571 Running SNA Server Win16, OS/2, or MS-DOS Applications
	
	CAUSE
	=====
	
	When running over the SNA Server Windows NT client thunking DLLs, the 16-bit
	Windows application must first initialize the API interface by calling the
	appropriate WinXXXXStartup call before attempting to use any function. The
	thunking DLL initializes the Snahlp32.dll and 32-bit SNA API DLLs (Wappc32.dll,
	Wcpic32.dll, Winrui32.dll, Winsli32.dll, and Wincsv32.dll) only after the
	appropriate WinXXXXStartup function has been called.
	
	Refer to the relevant SNA Server API programmer's guide for a description of
	WinAPPCStartup, WinCPICStartup, WinRUIStartup, WinSLIStartup, and WinCSVStartup
	calls. Each API reference states the requirement to call this function first, in
	order to initialize the API interface.
	
	RESOLUTION
	==========
	
	The 16-bit Windows application should be modified so that the appropriate
	WinXXXXStartup call is issued before using any API function supported by that
	interface.
	
	Additional query words: win16 win3x thunk
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all SP),3.0 (all SP)
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q152011: Requirements for Using WinAPPCStartup and WinAPPCCleanup."
permalink: kb/152/Q152011/
---

## Q152011: Requirements for Using WinAPPCStartup and WinAPPCCleanup.

	Article: Q152011
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server APPC Programmer's Guide, Chapter 1, states that a Windows APPC
	application must call WinAPPCStartup at the beginning of the session to register
	the application and WinAPPCCleanup at the end of the session to deregister the
	application. This article clarifies this requirement, as well as other related
	issues. This article also applies to Windows CPIC applications required to call
	the WinCPICStartup and WinCPICCleanup functions.
	
	MORE INFORMATION
	================
	
	Each Windows (16-bit or 32-bit) task that uses the SNA Server Windows APPC (or
	CPIC) interface must first call WinAPPCStartup (or WinCPICStartup). Likewise,
	before ending, the task should call WinAPPCCleanup (or WinCPICCleanup) to
	properly deregister with the Windows APPC (or CPIC) interface. The
	WinAPPCStartup (or WinCPICStartup) and WinAPPCCleanup (or WinCPICCleanup) calls
	only need to be called once per task (or Windows process). This requirement
	applies to invoking transaction programs (programs that initiate a conversation
	using the TP_STARTED and [MC_]ALLOCATE calls) and invokable transaction programs
	(programs which "listen" for conversation startup requests by calling
	RECEIVE_ALLOCATE).
	
	Due to a change implemented in SNA Server 2.11, 32-bit Windows APPC invokable
	transaction programs that issue RECEIVE_ALLOCATE do not need to call
	WinAPPCStartup in order to function. This change was implemented so that SNA
	Server APPC API tracing would occur for invokable transaction programs which
	don't call WinAPPCStartup before calling RECEIVE_ALLOCATE. This change does not
	apply to 16-bit Windows programs. However, it is recommended that all Windows
	APPC programs call WinAPPCStartup.
	
	
	An APPC application can support multiple APPC transaction programs and multiple
	conversations within a single task. The SNA Server Windows 16-bit APPC interface
	allows a single task to support up to 16 transaction programs, and up to 64
	conversations. The SNA Server Windows 32-bit APPC interface allows a single task
	to support up to 254 transaction programs, and up to 254 conversations.
	
	Also, the Windows APPC interface should not be called from the applications'
	LibMain() function, DLL_PROCESS_ATTACH, or DLL_PROCESS_DETACH entry points.
	Calling APPC functions within these contexts may cause the application to hang
	or encounter an application exception, because underlying SNA Server client DLLs
	may not be initialized, or may have been unloaded.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200NT kbSNAServ300NT kbSNAServ210NT kbSNAServ211NT
	Version           : :2.0,2.1,2.11,3.0
	
	=============================================================================
	

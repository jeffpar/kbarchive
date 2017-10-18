---
layout: page
title: "Q201911: BUG: DCOMCNFG Writes Ports Named Value in Incorrect Format"
permalink: kb/201/Q201911/
---

## Q201911: BUG: DCOMCNFG Writes Ports Named Value in Incorrect Format

	Article: Q201911
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbCOMt kbOSWinNT400 kbOSWin98 kbGrpDSCom kbDSupport
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM, included with:
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows NT Workstation version 4.0 
	   - Microsoft Windows 98 
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DCOMCNFG utility writes the port range specified for a protocol in a
	incorrect format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When a port range is specified for a protocol, such as 4000-4010, the value that
	is written to the registry key HKLM\SOFTWARE\Microsoft\RPC\Internet\Ports (named
	REG_MULTI_SZ) is "4000 - 4010." A space is added preceding and succeeding the
	"-". Remote Procedure Call (RPC) is extremly sensitive about the string format
	and fails the RpcServerUsePortSeq call with RPC_S_OUT_OF_RESOURCES. As a result,
	no client can talk to the server, and services such as Internet Information
	Server (IIS) do not start.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the DCOMCNFG and click the Default Protocol tab.
	
	2. Select the protocol, and add a port range to it.
	
	3. Check the registry entry. You will see an incorrect port range format.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbOSWinNT400 kbOSWin98 kbGrpDSCom kbDSupport 
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	

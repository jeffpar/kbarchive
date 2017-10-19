---
layout: page
title: "Q240452: Secure RPC Traffic Problem When Using RPC Ping Tool"
permalink: /kb/240/Q240452/
---

## Q240452: Secure RPC Traffic Problem When Using RPC Ping Tool

	Article: Q240452
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The remote procedure call (RPC) Ping tool may not work when the "Run with
	Security" option is selected.
	
	CAUSE
	=====
	
	This behavior occurs because the NT LM Security Support Provider service could
	not start.
	
	
	Note that if you attempt to start the NT LM Security Support Provider service by
	using the Services tool in Control Panel, you may receive the following error
	message:
	
	  Error 1058: The specified service is disabled and cannot be started.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the values under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\Root\LEGACY_NTLMSSP
	
	3. If the values under this key are missing or corrupted, delete the key
	  (LEGACY_NTLMSSP).
	
	4. Quit Registry Editor.
	
	5. Restart the computer.
	
	MORE INFORMATION
	================
	
	The RPC Ping utility is often used to check RPC connectivity problems when you
	are troubleshooting Microsoft Outlook/Microsoft Exchange client-server
	communications.
	
	Outlook/Exchange clients use a secure RPC connection when connecting to an
	Exchange server. When you are testing with the RPC Ping tool (Rpingc32.exe), the
	"Run with Security" option is often used to make sure a secure RPC connection
	can be made with the server.
	
	If the RPC test without selecting the "Run with Security" option works, but does
	not work if security is used, verify whether the NT LM Security Support Provider
	service is started or can be started manually.
	
	When you use Network Monitor to capture network traffic, you may not see any
	network traffic coming from a client having this problem.
	
	Additional query words: rpings.exe
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

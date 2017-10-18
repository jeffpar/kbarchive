---
layout: page
title: "Q147720: Non-critical Error Attempting To Install TCP/IP After RAS"
permalink: kb/147/Q147720/
---

## Q147720: Non-critical Error Attempting To Install TCP/IP After RAS

	Article: Q147720
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Remote Access Service (RAS) is already installed and you attempt to install
	the TCP/IP protocol, the following error message appears:
	
	  Non-Critical Error, an error has occurred. External Library Procedure
	  SetupChangeServiceConfig reported the following error: bad or invalid
	  parameters passed to open service call.
	
	CAUSE
	=====
	
	This problem occurs if there is incorrect RAS and TCP/IP settings in the
	registry.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To correct this problem:
	
	1. Verify TCP/IP protocol is not on the Installed Network Software list in
	  Control Panel Network. If it is on the list, select it and click Remove.
	
	2. Select Remote Access Software and click Remove (The error message mentioned
	  above may appear. You can ignore the error message). Quit Control Panel
	  Network.
	
	3. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services
	
	4. Select the TCPIP key. From the Edit menu, select Delete. Click Yes to delete
	  the key.
	
	5. Quit the Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	7. In Control Panel Network, re-install TCP/IP and Related Components.
	
	8. Re-install Remote Access Service. Then, restart Windows NT.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

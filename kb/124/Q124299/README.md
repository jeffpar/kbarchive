---
layout: page
title: "Q124299: SFM Does Not Detect Xircom PCMCIA Ethernet Adapter"
permalink: /kb/124/Q124299/
---

## Q124299: SFM Does Not Detect Xircom PCMCIA Ethernet Adapter

	Article: Q124299
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Services for Macintosh (SFM) under Windows NT Server version
	3.5, and you are using a Xircom CE10 PCMCIA Ethernet adapter, the following
	error message appears:
	
	  Setup cannot find any network adapter for Services for Macintosh. You will be
	  unable to use Services for Macintosh. Try adding a network adapter or enable
	  the bindings for AppleTalk protocol.
	
	WORKAROUND
	==========
	
	Although SFM is not displayed in the Network Settings Installed Network Software
	list, entries for AppleTalk protocol are added to the Windows NT bindery. As a
	result, you must modify the registry to enable SFM.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  SYSTEM\CurrentControlSet\Services\AppleTalk\Parameters
	
	3. Highlight DefaultPort.
	
	4. From the Edit menu, choose String.
	
	5. Add the following value:
	
	  \Device\CE2NDIS31
	
	6. Highlight DesiredZone.
	
	7. From the Edit menu, choose String.
	
	8. Add the correct AppleTalk zone.
	
	9. Close Registry Editor, and then shut-down and restart Windows NT.
	
	Macintosh clients should now be able to connect to the Windows NT Server.
	
	NOTE: Every time you attempt to configure SFM from Control Panel, the following
	error message appears:
	
	  The AppleTalk protocol registry parameters cannot be read. One or more
	  parameters might be missing or contain invalid entries.
	
	Consequently, changes to SFM must be made through Registry Editor (REGEDT32.EXE).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.5,
	3.51, and 4.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt mac
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	

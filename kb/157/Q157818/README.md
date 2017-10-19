---
layout: page
title: "Q157818: Netflex-3: No Adapter Found When Installing SFM"
permalink: /kb/157/Q157818/
---

## Q157818: Netflex-3: No Adapter Found When Installing SFM

	Article: Q157818
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Services for Macintosh (SFM) on a Compaq system with a Netflex-3
	adapter in Windows NT 3.51, the installation may fail with the following error:
	
	  Setup cannot find any network adapter for Services for Macintosh. You will be
	  unable to use Services for Macintosh. Try adding a network adapter or enable
	  the bindings for the AppleTalk protocol.
	
	If Services For Macintosh is currently installed and you attempt to configure SFM
	from the Control Panel tool, the following error message appears:
	
	  The AppleTalk protocol registry parameters cannot be read.
	  One or more parameters might be missing or contain invalid entries.
	
	If you currently have Compaq Support Software Diskette (SSD) 1.18 installed, you
	may get the following error after you install SFM and restart the computer:
	
	  Event ID 13
	  No adapter is configured to be the default adapter.
	
	CAUSE
	=====
	
	Netflex-3 drivers installed through the Compaq SSD 1.18 do not properly set up
	the registry values that SFM needs for successful installation.
	
	RESOLUTION
	==========
	
	To work around this problem, perform one of the following:
	
	- Update to SSD 1.19 or later. This suggestion is recommended.
	
	- Modify the registry as described below:
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  Remove Services for Macintosh and then make the following changes:
	
	  1. Start Registry Editor (Regedt32.exe) and find the following registry
	     location:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	     \Services\Cpqnf3x\Parameters
	
	     where x represents the number of your adapter. It is important not to add
	     the value to the Cpqnf3 key.
	
	  2. From the Edit menu, click Add Value and add the following values to the
	     Parameters subkey in all instances of Cpqnf3x and then click OK.
	
	     Value name: MediaType.
	     Data type: RegDword.
	
	  3. In the Dword editor add the value: 1 Hex.
	
	     NOTE: Any of the following values may apply:
	     1 - Ethernet
	     2 - Token Ring
	     3 - ARCNet
	     4 - FDDI
	     5 - Apple LocalTalk
	
	  4. Quit Registry Editor.
	
	Reinstall Services for Macintosh and reapply any Windows NT service packs that
	were previously installed. You may then reinstall the latest SSD, before
	restarting your computer.
	
	Additional query words: sfm compaq netflx netflx3 netflx3.sys
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	
	=============================================================================
	

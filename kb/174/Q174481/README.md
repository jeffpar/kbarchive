---
layout: page
title: "Q174481: Phantom Zone Appears in the Chooser List"
permalink: kb/174/Q174481/
---

## Q174481: Phantom Zone Appears in the Chooser List

	Article: Q174481
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you change the routing information and zones in an AppleTalk environment,
	you may find a zone that was targeted for deletion still displayed in the
	Macintosh Chooser list.
	
	CAUSE
	=====
	
	The setup routine to configure Service for Macintosh (SFM) is not writing out
	the desired zone correctly when routing changes are made and the previous
	desired zone no longer exists.
	
	RESOLUTION
	==========
	
	Use the following steps to force the computer running Windows NT Server to
	update the DesiredZone entry:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Network.
	
	2. Click the Services tab, and open the Service for Macintosh service.
	
	3. Select the correct Default Zone, and then click OK.
	
	4. Restart the computer.
	
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	You can modify the registry manually. To do this, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKLM\SYSTEM\CurrentControlSet\Services\AppleTalk\Parameters
	
	2. Add or change the following values:
	
	  Value Name: DesiredZone
	  Data Type:  REG_SZ
	  Data:       <Type in the desired Zone name>
	
	3. Restart the computer after these values have been changed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: Casper ghost NTSFM Seed AppleTalk
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	

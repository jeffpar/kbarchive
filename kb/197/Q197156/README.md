---
layout: page
title: "Q197156: Cannot Add New Modem or View Existing Modem Properties"
permalink: /kb/197/Q197156/
---

## Q197156: Cannot Add New Modem or View Existing Modem Properties

{% raw %}

	Article: Q197156
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Modems icon in Control Panel, the Install New Modem
	wizard may not start, or the Modems Properties dialog box may not be displayed.
	
	CAUSE
	=====
	
	This behavior can occur if the PnP ISA Enabler service is not started, or if
	certain files in the Winnt\System32 folder are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	- Verify that the PnP ISA Enabler service is installed. For information on how
	  to do this, see the following Microsoft Knowledge Base article:
	
	  Q156344 Plug and Play Devices Not Detected or Installed
	
	- Verify that the Plug and Play service is started. To do this:
	
	  1. Click Start, point to Settings, click Control Panel, and then double-click
	     Services.
	
	  2. Highlight the Plug and Play service. If the Status does not indicate
	     Started, and the Startup mode is not Automatic, click Startup, click
	     Automatic, and then click OK. Click Start, and then click Close.
	
	- Verify that the following files are located in the Winnt\System32 folder:
	
	  Shell32.dll
	  Rpcrt4.dll
	  Tapi32.dll
	  Setupapi.dll
	  Msvcrt.dll
	  Lz32.dll
	  Comdlg32.dll
	  Version.dll
	  Cfgmgr32.dll
	  Mpr.dll
	  Rpcltc1.dll
	
	  If any of these files are missing, reapply the latest Windows NT 4.0 Service
	  Pack. For information on obtaining the service pack, query on the following
	  word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

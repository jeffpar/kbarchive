---
layout: page
title: "Q129006: Windows NT 3.51: HP-PCL Driver Does Not Send Output Tray Command"
permalink: kb/129/Q129006/
---

## Q129006: Windows NT 3.51: HP-PCL Driver Does Not Send Output Tray Command

	Article: Q129006
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The HP-PCL printer drivers included with Windows NT 3.1 and 3.5 always
	command the print device to send output to the top tray (the default). This
	feature is not configurable. The command overrides the print device's front-
	panel configuration, so there is no way to force output to the lower
	(rear)tray using these versions of Windows NT.
	
	In Windows NT 3.51, the HP-PCL printer driver no longer sends an output
	tray command, so the device's front-panel configuration can be used. For
	example, if you configure the print device using it's front panel to use
	the lower output tray, a Windows NT print job will not override this
	setting, and the output will go to the lower tray. However, there is no way
	to specify the output tray through the printer driver's user interface in
	Print Manager. This feature is being considered for future releases of the
	driver.
	
	
	For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q123316: Unable to Change the Default Print Tray
	
	Additional query words: prodnt hp4 hpiv hp iv laserjet series 4
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

---
layout: page
title: "Q167375: Err Msg: Error Opening Modem.inf File in the RAS Directory"
permalink: /kb/167/Q167375/
---

## Q167375: Err Msg: Error Opening Modem.inf File in the RAS Directory

	Article: Q167375
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw dun kbHardware kbDialUp
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to configure Remote Access Services (RAS) using the Network tool in
	Control Panel, you may receive the following error messages:
	
	  Error opening Modem.inf file in the RAS directory.
	
	  Failed to initialize device list. Error opening Modem.inf file in the RAS
	  directory.
	
	  Dial-Up Networking Setup encountered an unknown failure and will terminate
	  now. Please contact your administrator to determine the cause of the problem.
	
	Dialing out using Dial-Up Networking may work fine, however.
	
	CAUSE
	=====
	
	The Modem.inf file in the %SystemRoot%\System32\Ras folder is missing or
	damaged.
	
	RESOLUTION
	==========
	
	Expand a new copy of the Modem.inf file from the Windows NT 4.0 CD-ROM to the
	%SystemRoot%\System32\Ras folder using the following steps:
	
	1. If a Modem.inf file already exists in the %SystemRoot%\System32\Ras folder,
	  rename it to Modem.old.
	
	2. Place the Windows NT 4.0 CD-ROM in the CD-ROM drive.
	
	3. Type the following line at a command prompt:
	
	  expand d:\i386\modem.in_ c:\winnt\system32\ras\modem.inf
	
	  NOTE: This command assumes that Windows NT is installed in the Winnt folder on
	  drive C and that drive D is the CD-ROM drive. If this is not the case, adjust
	  the command as necessary.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 does not use the Modem.inf file for Dial-Up Networking. However,
	the Modem.inf file is required for the setup and configuration of modem devices
	in RAS properties. If the file is missing or damaged, RAS cannot display the
	list of devices.
	
	Additional query words: information
	
	======================================================================
	Keywords          : kberrmsg kbhw dun kbHardware kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

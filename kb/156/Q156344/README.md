---
layout: page
title: "Q156344: Plug and Play Devices Not Detected or Installed"
permalink: /kb/156/Q156344/
---

## Q156344: Plug and Play Devices Not Detected or Installed

	Article: Q156344
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsetup kbHardwarekbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0, Plug and Play devices in your computer are not
	detected and installed.
	
	CAUSE
	=====
	
	Windows NT 4.0 does not support Plug and Play.
	
	RESOLUTION
	==========
	
	The driver library on the Windows NT 4.0 CD-ROM includes the PnP ISA Enabler
	driver, which may allow the detection and installation of Plug and Play devices
	in Windows NT 4.0. Install the PnP ISA Enabler driver (PNPISA) using the
	following steps:
	
	NOTE: Although Windows NT includes PNPISA to detect Plug and Play devices, Plug
	and Play devices are not supported in Windows NT 4.0. PNPISA is provided as a
	"use at your own risk" tool.
	
	1. Locate the Pnpisa.inf file in the Drvlib\Pnpisa\<processor-type> folder
	  on the Windows NT 4.0 CD-ROM.
	
	2. Right-click the Pnpisa.inf file, and then click Install on the menu that
	  appears.
	
	3. Restart your computer.
	
	After you restart your computer, you may receive a message that Windows NT has
	detected your Plug and Play device(s).
	
	MORE INFORMATION
	================
	
	Note that PNPISA is not enabled by default.
	
	For more information on installing and potential problems review the following
	file on the Windows NT 4.0 CD-ROM:
	
	  <CD-ROM drive>:\Drvlib\Audio\Sbpnp\Readme.txt
	
	
	======================================================================
	Keywords          : kbenv kbhw kbsetup kbHardware kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

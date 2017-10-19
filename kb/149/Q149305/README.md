---
layout: page
title: "Q149305: PCMCIA Network Cards May Fail to Start During NT Installation"
permalink: /kb/149/Q149305/
---

## Q149305: PCMCIA Network Cards May Fail to Start During NT Installation

	Article: Q149305
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Installing Windows NT on a machine using certain PCMCIA network cards may cause
	the following error message:
	
	  The dependency service or group failed to start.
	  This error prevented the network from starting.
	
	To correct this problem, choose Yes to return to the network dialog box to
	reconfigure the software. After you finish installing Windows NT and reboot your
	computer, the network driver should start normally, giving you access to the
	network.
	
	MORE INFORMATION
	================
	
	These messages usually occur when you use OEM network drivers. Windows NT can
	only dynamically start PCMCIA network cards that are autodetected by the Windows
	NT Setup program. OEM drivers, by design, are not autodetected by the Setup
	program. Windows NT PCMCIA.SYS handles this special case by starting the network
	driver without rebooting. This issue has nothing to do with the OEMSETUP.INF
	file or OEM driver supplied by the network card manufacturer.
	
	Currently, the following PCMCIA network cards can be autodetected and installed
	without rebooting if the defaults are accepted and nonconflicting:
	
	  3Com 3C589 Etherlink III PCMCIA Ethernet Adapter
	  3Com 3C589B Etherlink III PCMCIA Ethernet Adapter
	  IBM PCMCIA Ethernet Adapter II
	  Kingston EtherRx PCMCIA Adapter
	  National InfoMover NE4100 PCMCIA Ethernet Adapter
	
	NOTES:
	
	- The Toshiba T4900 and IBM ThinkPads cannot use IRQ=10 (reserved for onboard
	  soundcard).
	
	- The Compaq LTE-5x00 cannot use 2, 5, 10, or 11 if a docking station is using
	  an NE2000-compatible network card.
	
	Additional query words: autodetect autostart unattend unattended
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	

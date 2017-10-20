---
layout: page
title: "Q100372: Detecting Windows NT Serial Ports"
permalink: /kb/100/Q100372/
---

## Q100372: Detecting Windows NT Serial Ports

{% raw %}

	Article: Q100372
	Product(s): Microsoft Windows NT
	Version(s): 3.0 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Windows NT manages serial (COM) ports somewhat differently from the
	way Windows 3.1 does. In Windows 3.1, you can observe and configure
	all the COM ports from Ports in Control Panel. In Windows NT, only
	unused COM ports are displayed in Control Panel. For example, if a
	mouse is connected to COM1, COM1 is not available in Control Panel,
	nor is it listed. To check a COM port and perform any trouble-shooting
	steps, you need to use Registry Editor.
	
	Finding Serial Ports in Registry Editor
	---------------------------------------
	
	To determine what is using a COM port, from Registry Editor go to the
	following subkey:
	
	  \HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System
	  \MultifunctionAdapter\0\SerialController\...
	
	Note: If you have an EISA type computer, MultifunctionAdapter will be
	EisaAdapter.
	
	Each COM port is stored in one of the numbered subkeys. If you have
	two COM ports, COM1 and COM2, you would find them stored under 0 and
	1, respectively.
	
	If a mouse is using a COM port, you will find a PointerPeripheral
	subkey under the serial ports subkey. For example: If you have a mouse
	on COM1, you would see the following:
	
	  ...\SerialController\0\PointerPeripheral
	
	If PointerPeripheral is absent, then the serial port is in use by some
	other device.
	
	Additional Differences in Windows NT Control Panel
	--------------------------------------------------
	
	You might notice an additional difference in Windows NT Control Panel.
	If you select a COM port, choose Settings, and then choose Advanced,
	the following message may be displayed in a dialog box:
	
	  There are no user configurable Advanced I/O parameters for this COM port.
	
	This means that Windows NT has obtained all the information it needs
	for the port from NTDETECT.COM (or OSLOADER.EXE on RISC-based
	computers). This ensures that redundant or incorrect information is
	not entered.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.0 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}

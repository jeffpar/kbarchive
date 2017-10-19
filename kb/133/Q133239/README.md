---
layout: page
title: "Q133239: Enabling PCMCIA Support in Windows 95"
permalink: /kb/133/Q133239/
---

## Q133239: Enabling PCMCIA Support in Windows 95

	Article: Q133239
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Windows 95 supports many PCMCIA cards including modems, network adapters, SCSI
	cards, and others. If Windows 95 includes drivers for the PCMCIA card and the
	socket you are using, installation and configuration should be automatic. This
	article provides some guidelines for enabling enhanced PCMCIA support in Windows
	95 when automatic detection and configuration are not available for your card.
	
	Windows 95 Setup automatically detects the presence of a PCMCIA socket, but to
	enable it you must run the PCMCIA Wizard.
	
	MORE INFORMATION
	================
	
	To enable Windows 95 Plug and Play support for the PCMCIA socket, run the PCMCIA
	Wizard. The PCMCIA Wizard comments out the real-mode drivers in the Autoexec.bat
	and Config.sys files and enables the PCMCIA socket. In some cases, Windows 95
	disables Plug and Play PCMCIA support if there is a risk of incompatibility.
	
	NOTE: Both your PCMCIA socket driver and network driver must be Plug and
	Play-compliant drivers (that is, they must be developed for Windows 95 and NDIS
	3.1 compliant), or both must be real-mode drivers. If these drivers are of mixed
	types, the computer may stop responding (hang) or the network may not work.
	
	Note that when Windows 95 identifies and loads the appropriate PCMCIA driver, the
	computer emits a beep when the new device is configured.
	
	To enable support for PCMCIA cards, run the PCMCIA Wizard using the following
	steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the PCMCIA icon.
	
	NOTE: If you must use real-mode drivers, Windows 95 should work well with these
	PCMCIA drivers, although some Plug and Play capabilities such as automatic
	installation and friendly device names will not be available.
	
	To verify that Windows 95 has properly detected your PCMCIA socket, perform the
	following steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon, and then click the Device Manager tab.
	
	3. Look for a PCMCIA Socket listing.
	
	If Windows 95 has not detected a PCMCIA socket, your socket controller might not
	be supported by Windows 95.
	
	To determine if a PCMCIA socket is supported, use the following steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Add New Hardware icon, then click Next.
	
	3. Click No, then click Next.
	
	4. In the Hardware Types box, click PCMCIA Socket, then click Next.
	
	5. Click the appropriate manufacturer and then examine the Models list. If your
	  socket does not appear in the list, you should contact the manufacturer to
	  see if new drivers are available.
	
	To determine if Windows 95 has activated enhanced PCMCIA support, use the
	following steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon, and then click the Device Manager tab.
	
	3. Double-click the PCMCIA socket entry.
	
	4. Click the entry for your PCMCIA controller, and then click Properties.
	
	5. Click the General tab. If a hardware profile is selected in the Device Usage
	  box, PCMCIA support is enabled.
	
	If you have the correct drivers and enhanced PCMCIA support is activated, but the
	device is still not available, your computer may be using the wrong memory
	address for the device.
	
	Windows 95 selects a default set of commonly supported settings. Your socket
	might not support certain IRQ settings, so you may be able to get the PCMCIA
	socket to work by changing the IRQ setting. Similarly, the socket may not work
	with certain memory addresses, and changing the memory address might solve the
	problem.
	
	To change the memory address for a PCMCIA device, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon, and then click the Device Manager tab.
	
	3. Click the PCMCIA socket entry, and then click Properties.
	
	4. Click the Global Settings tab.
	
	5. Click the Automatic Selection check box to clear it.
	
	6. Change the start value based on information from your hardware manual.
	  Typically, selecting a Start value higher than 100000 works.
	
	7. Restart Windows 95.
	
	To change the interrupt for a PCMCIA device, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon, and then click the Device Manager tab.
	
	3. Double-click the PCMCIA socket entry.
	
	4. Click the entry for your PCMCIA controller, and then click Properties.
	
	5. Click the Resources tab
	
	6. Click the Use Automatic Settings check box to clear it.
	
	7. Double-click Interrupt Request and change the value to a new value that does
	  not conflict with other devices already installed on the system.
	
	8. Click OK twice.
	
	9. Restart Windows 95.
	
	If Windows 95 still does not detect your PCMCIA card, you should disable the
	Windows 95 enhanced PCMCIA support. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon, and then click the Device Manager tab.
	
	3. Double-click the PCMCIA socket entry.
	
	4. Click the entry for your PCMCIA controller, and then click Properties.
	
	5. Click the General tab, and then click the Current Hardware Profile check box
	  to clear it.
	
	NOTE: A combination of real-mode and protected-mode PCMCIA Card and Socket
	Services is not supported in Windows 95.
	
	
	Additional query words: pnp
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

---
layout: page
title: "Q121542: How to Install NDIS 2 Network Card Drivers That Are Not Listed"
permalink: /kb/121/Q121542/
---

## Q121542: How to Install NDIS 2 Network Card Drivers That Are Not Listed

{% raw %}

	Article: Q121542
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	This article lists the steps necessary to install an NDIS 2 network interface
	card (NIC) driver that is not listed as a choice in the Select Device dialog box
	and does not have an Oemsetup.inf file. If you have any questions regarding
	these steps, consult the manufacturer of your network card.
	
	MORE INFORMATION
	================
	
	To complete these steps, you must first have the NDIS 2 network card driver. If
	Microsoft does not provide a driver for your card, contact the card
	manufacturer.
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click Add, click Adapter, then click Add.
	
	4. Insert the manufacturer-supplied driver disk, and click the Have Disk button.
	
	5. Select the correct NDIS 2 driver, click OK, click the driver in the list of
	  installed network components, and click Properties.
	
	  NOTE: If the driver cannot be found, browse in the NDIS or LanMan folders and
	  look for files with a .dos extension.
	
	6. Click the Driver Type tab, click "Real mode (16-bit) NDIS driver," then click
	  OK.
	
	7. After you click OK a second time, you are prompted with the following
	  message:
	
	  Please shut down and restart the computer for your changes to take effect.
	
	  Click OK a third time, but do not restart your system.
	
	After you complete the above steps, a Protocol.ini file is created in your
	Windows 95 directory. The configuration settings (IRQ, I/O address, and so on)
	for your network card must be manually set in this Protocol.ini file. The
	Protocol.ini file that is created contains the following blank section:
	
	  []
	  DriverName=
	
	To successfully use the network, you must manually insert the proper section
	heading, driver name, and any other necessary lines to configure your network
	card (such as the IRQ, I/O address, and so on). An example for an Intel
	EtherExpress 16 set for real mode is:
	
	  [EXP16$]
	  DriverName=EXP16$
	  transceiver=Twisted-Pair (TPE)
	  iochrdy=Late
	  ioaddress=0x300
	  irq=10
	
	After you fill out the Protocol.ini file, you must add the name of the network
	card driver (<DriverName>.DOS) to the registry. To add the driver name to
	the registry, add the string value
	
	  netcard
	
	to the following entry in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\ 
	  Network\Real Mode Net
	
	Set the new value to your network card driver name (with the .DOS extension).
	
	For example, for the Intel EtherExpress card, the value is:
	
	  exp16.dos
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Finally, make sure the Autoexec.bat file contains the command NET START. This
	line (C:\WINDOWS\NET START) loads the NDIS 2 network card driver and protocol
	drivers, then it binds them together.
	
	Additional query words: nic w95cnfaq
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}

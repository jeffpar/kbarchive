---
layout: page
title: "Q178676: How to Install an ISDN Device in Windows NT"
permalink: /kb/178/Q178676/
---

## Q178676: How to Install an ISDN Device in Windows NT

{% raw %}

	Article: Q178676
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install an Integrated Services Digital Network
	(ISDN) device in a computer running Windows NT.
	
	MORE INFORMATION
	================
	
	General ISDN Information
	------------------------
	
	This article provides basic instructions for installing an ISDN device. Typically
	on Windows NT-based computers, you install an internal ISDN adapter using the
	Network tool in Control Panel. You install an external ISDN device using the
	Modems tool in Control Panel. If you use Remote Access Service (RAS) with the
	ISDN device, install RAS before installing the ISDN device.
	
	For specific instructions about installing your ISDN device in a computer running
	Windows NT, contact the manufacturer of your ISDN device.
	
	For information about configuring ISDN parameters such as the service profile ID
	(SPID) or line type, contact your phone company.
	
	Installing an Internal ISDN Adapter
	-----------------------------------
	
	To install an internal ISDN adapter, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click the Adapters tab, and then click Add.
	
	4. In the Network Adapters box, click your ISDN adapter, and then click OK. If
	  your adapter is not listed, click Have Disk, type the path for the driver you
	  are installing, and then click OK. You must type the path for the
	  Oemsetup.inf file from the manufacturer.
	
	5. Follow the instructions on your screen or provided by the ISDN manufacturer
	  to complete the installation of your ISDN adapter.
	
	NOTE: For information about how to configure device-specific parameters such as
	the interrupt, I/O base address, and memory address, consult the documentation
	included with the ISDN adapter, or contact the adapter's manufacturer.
	
	Installing an External ISDN Device
	----------------------------------
	
	To install an external ISDN device, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. The Install New Modem Wizard starts automatically if you have not installed a
	  modem before. If the wizard does not start automatically, you have installed
	  a modem and you should click Add to start the wizard.
	
	4. Click "Don't detect my modem; I will select it from a list" to select it, and
	  then click Next.
	
	5. In the Manufacturers box, click the manufacturer of your ISDN device.
	
	6. In the Models box, click your ISDN device, and then click Next. If your ISDN
	  manufacturer or device is not listed, click Have Disk, type the path for the
	  driver you are installing, and then click OK. You must type the path for the
	  Oemsetup.inf file from the manufacturer.
	
	7. Follow the instructions on your screen or provided by the ISDN manufacturer
	  to complete the installation of your ISDN device.
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	
	=============================================================================
	

{% endraw %}

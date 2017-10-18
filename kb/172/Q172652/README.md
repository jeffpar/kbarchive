---
layout: page
title: "Q172652: Computer with USB Devices Hangs"
permalink: kb/172/Q172652/
---

## Q172652: Computer with USB Devices Hangs

	Article: Q172652
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 95 OEM Service Release version 2.1 on a computer equipped
	with a Universal Serial Bus (USB) host adapter, the computer may stop responding
	(hang) in the following situations:
	
	- If you disable the USB Root Hub device in Device Manager while PC Card
	  sockets are enabled, the computer may hang or a "Fatal Exception 0E" error
	  message may occur.
	
	- If you suspended and resume the computer while a Logitech USB mouse is
	  attached, the computer may never finish the resume operation.
	
	- If you rapidly plug and unplug an ALPS USB game pad, the computer may hang or
	  display a fatal exception error message on a blue screen.
	
	- On a Toshiba portable computer equipped with USB support, if the PC Card
	  controller is set to CardBus mode, and the computer is docked to a port
	  replicator, the computer may hang when you eject it (undock) from the port
	  replicator.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. To resolve this problem, contact Microsoft
	Product Support Services to obtain the fix. For a complete list of Microsoft
	Product Support Services phone numbers and information on support costs, please
	go to the following address on the World Wide Web:
	http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS This issue is
	resolved by the following updated file for Windows 95 OEM Service Release 2.1,
	and later versions of this file:
	
	  OPENHCI.SYS version 4.03.1214 dated 7/17/97 31,248 bytes
	
	Some Toshiba portable computers also require the following updated file for
	Windows 95 OEM Service Release 2.1:
	
	  CBSS.VXD version 4.00.1117 dated 6/13/97 16,249 bytes
	
	
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about USB support in Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q253756 Availability of Universal Serial Bus Support in Windows 95
	
	For additional information about issues resolved by updates to these components,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q181499 USB Over Current Condition Causes Windows 95 Hang
	
	  Q164225 Poor Data Transfer with CardBus Card in Docking Station
	
	  Q164224 Inserting PC Card in Dock with CardBus Card May Cause Reboot
	
	  Q164223 PC Cards May Not Be Recognized in Docking Station
	
	  Q164222 CardBus Card in Docking Station May Not Be Configured
	
	  Q163938 Inserting Multifunction PC Card May Hang Computer
	
	  Q159543 Intel ProShare PC Card May Hang Computer
	
	  Q159492 PC Card Device Not Enumerated When Reinserted
	
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	
	Additional query words: 95 oem osr w95hw
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR210
	Version           : WINDOWS:95
	
	=============================================================================
	

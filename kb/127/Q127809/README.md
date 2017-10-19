---
layout: page
title: "Q127809: Practical Peripherals Modems Need Firmware Update for MS Fax"
permalink: /kb/127/Q127809/
---

## Q127809: Practical Peripherals Modems Need Firmware Update for MS Fax

	Article: Q127809
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Fax with a Practical Peripherals PM144MT II or
	PM14400FXSA fax/modem, you may not be able to receive incoming faxes.
	
	CAUSE
	=====
	
	The Practical Peripherals PM144MT II and PM14400FXSA fax/modems require firmware
	updates to work correctly with Microsoft Fax.
	
	RESOLUTION
	==========
	
	Update the firmware for the PM144MT II fax/modem to version 1.53 or higher.
	
	Update the firmware for the PM14400FXSA fax/modem to version 1.23 or higher.
	
	MORE INFORMATION
	================
	
	You may be able to determine the modem's firmware version using the Modems
	utility in Control Panel. To try to determine your modem's firmware version,
	follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Modems icon.
	
	3. Click the Diagnostics tab, then click the port for your modem.
	
	4. Click the More Info button. The firmware version may be reported in the box
	  containing the AT commands and responses.
	
	If you cannot determine your modem's firmware version using the Modems tool, then
	you must obtain it from the manufacturer or the Windows 95 registry in:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\At Work Fax\Local
	  Modems\TAPIXXXX\Class0ModemID
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

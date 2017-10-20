---
layout: page
title: "Q167212: Supported PCMCIA Mode on Toshiba Tecra 700 Series"
permalink: /kb/167/Q167212/
---

## Q167212: Supported PCMCIA Mode on Toshiba Tecra 700 Series

{% raw %}

	Article: Q167212
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT PC Card (PCMCIA) services will only work on the Toshiba Tecra 700
	series in the PCIC Compatible mode. If you are using the Card Bus/16-bit mode
	and you manually start the PC Card (PCMCIA) service, you will receive the
	following error message:
	
	  Could not start the Pcmcia service on \\<computername>.
	  Error 0020: The system cannot find the device specified.
	
	MORE INFORMATION
	================
	
	To verify that you are running in PCIC Compatible mode you must enter the system
	BIOS. To enter the System BIOS, perform the following steps:
	
	1. Press F1 or Esc during system startup.
	
	2. Run Tsetup.exe from either MS-DOS or Windows 95. Both will take you in to the
	  BIOS settings for the PC card.
	
	3. Select PC Card Controller Mode.
	
	4. Press the space bar to toggle between Card Bus/16-Bit and PCIC Compatible.
	
	5. Save the changes and exit the system BIOS.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: ntw nts fail event
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

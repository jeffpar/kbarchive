---
layout: page
title: "Q240309: How to Fully Disable Antivirus Software from Filtering Files"
permalink: /kb/240/Q240309/
---

## Q240309: How to Fully Disable Antivirus Software from Filtering Files

{% raw %}

	Article: Q240309
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you disable antivirus software programs from scanning or filtering files on
	your computer, you must also disable the filter drivers. Many issues with file
	transfering and printing can be resolved by disabling the active filters for
	antivirus programs. However, simply stopping the services associated with the
	software is not enough. You must also manually stop the device drivers for those
	filters. To do this for Windows NT:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Devices.
	
	2. Select the drivers in the Device list, and then click Stop.
	
	NOTE: The actual Symantec filter driver is called "symevent.sys".
	
	To do this for Windows 2000:
	
	1. Right click My Computer and click Properties.
	
	2. Click the Hardware tab and click the Device Manager button.
	
	3. Click the View menu and click "Show Hidden Devices".
	
	4. Expand "Non-Plug and Play Drivers" to find the Antivirus drivers.
	
	5. Right click on the correct driver and click Disable.
	
	MORE INFORMATION
	================
	
	Here are the names of some of the common antivirus program device names by
	product:
	
	- Inoculan V.4.00 - INO_FLPY and INO_Fltr
	
	- Norton V.5.0 - NAVAP, NAVENG, and NAVEX15 (for Microsoft Exchange Server)
	
	- McAfee V.4.03a - NaiFiltr and NaiFsRec
	
	For more information about a specific antivirus program, please contact the
	vendor of that software.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

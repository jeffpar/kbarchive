---
layout: page
title: "Q146201: Cannot Fax Using Cellular Phone and Motorola Power 14.4 Modem"
permalink: kb/146/Q146201/
---

## Q146201: Cannot Fax Using Cellular Phone and Motorola Power 14.4 Modem

	Article: Q146201
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you try to send a fax from a cellular phone using Microsoft Exchange and a
	Motorola Power 14.4 PCMCIA modem, your fax may not be sent.
	
	CAUSE
	=====
	
	The default initialization string sent to the modem by Microsoft Exchange
	initializes the modem for non-cellular calls only, regardless of the status of
	the Use Cellular Protocol option in Modems properties.
	
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	The following registry key contains the initialization strings for installed
	modems, where <xxxx> is the modem ID number. To determine which ID is the
	correct modem, see the DriverDesc key.
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Class\Modem\ 
	  <xxxx>\Init
	
	Use the following value to use the modem with a cellular phone:
	
	  "2"="AT&F1&D2&C1\\V1S0=0E0V1<cr>"
	
	To return the initialization string to normal (land use), change the key to:
	
	  "2"="AT&F&D2&C1\\V1S0=0E0V1<cr>"
	
	NOTE: You can reset these values to their default values by removing the modem in
	Device Manager and then reinstalling it.
	
	Additional query words: awfax
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

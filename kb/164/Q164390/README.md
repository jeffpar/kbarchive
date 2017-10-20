---
layout: page
title: "Q164390: WinNT Appears Not to Send DTR Signal to a UPS on Shutdown"
permalink: /kb/164/Q164390/
---

## Q164390: WinNT Appears Not to Send DTR Signal to a UPS on Shutdown

{% raw %}

	Article: Q164390
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When Windows NT goes through the shutdown process after a low battery message,
	it appears that Windows NT does not send a DTR signal and the UPS does not power
	off.
	
	CAUSE
	=====
	
	Windows NT waits approximately 2 minutes before sending out the DTR signal,
	allowing enough time for programs and services to shutdown properly. It is
	possible that the UPS will run out of power and perform a manual shutdown before
	Windows NT sends the DTR signal.
	
	RESOLUTION
	==========
	
	It is possible to change the amount of time that elapses from when the Low
	Battery message is sent and when Windows NT sends out the DTR signal. You can
	use Registry Editor (Regedt32.exe) to add an entry to the registry.
	
	NOTE: You must be logged on with administrative permissions to alter certain
	registry settings.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To specify a shut down wait, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\UPS
	
	2. From the Edit menu, click Add Value. Type the value ShutdownWait with a
	  REG_DWORD value in seconds between zero and 600 decimal.
	
	3. Quit Registry Editor and restart your computer for the changes to take place.
	
	MORE INFORMATION
	================
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q98885
	  TITLE : Pin Connections for Cabling Between APC UPS and RS-232
	
	
	Additional query words: APC UPS battery backup supply
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

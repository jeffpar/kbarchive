---
layout: page
title: "Q150834: HP Network Port Disappears After User Selects Secondary Adapter"
permalink: /kb/150/Q150834/
---

## Q150834: HP Network Port Disappears After User Selects Secondary Adapter

	Article: Q150834
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a system configured with one network interface card (NIC) and the data link
	control (DLC) protocol, there is an option to select a Secondary (1) Adapter (as
	opposed to Primary (0) Adapter). When you select this option and restart the
	system (or stop and restart the spooler service), the Hewlett-Packard Network
	Port disappears from the list of Available Print Monitors. Reinstalling DLC does
	not fix the problem.
	
	To find the option to select a Secondary (1) Adapter in Windows NT 4.0:
	
	1. Open the Printers Folder and select Printer. On the File menu, click Server
	  Properties, click the Ports Tab, and click Add Port.
	
	2. Select Hewlett-Packard Network Port, then select New Port.
	
	3. Under Options, select a Secondary (1) Adapter.
	
	To find the option to select a Secondary (1) Adapter in Windows NT 3.51:
	
	1. In Print Manager, on the Printer menu, select Create Printer, and select
	  Other in the Print to box .
	
	2. Select Hewlett-Packard Network Port.
	
	3. Under Options, select a Secondary (1) Adapter.
	
	Also, under NT 4.0, if one goes into Printer, Server Properties to DELETE a
	printer port and it gives the error:
	
	  "The selected port cannot be deleted. Requested resource is in use"
	
	EXPLAINATION
	------------
	
	On some servers, you can stop the Spooler service, unplug the NIC cable to The
	printer in question, and restart the Spooler service. If this causes All DLC
	ports to disappear and if all queues using a DLC port seem to Disappear, then
	look in the Registry to very that the entries for the Hewlett-Packard Network
	Port is still listed as a monitor in the Registry Under:
	
	  HKLM
	
	   \System
	    \CCS
	     \Control
	      \Print
	
	CAUSE
	=====
	
	Secondary (1) Adapter is selected when no secondary adapter is present.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious system-wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that problems resulting from the incorrect use of Registry Editor can
	be solved. Use Registry Editor at your own risk.
	
	To change the adapter selected back to Primary (0):
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System\CurrentControlSet\Control\Print\Monitors\Hewlett-Packard Network
	  Port\Options
	
	3. Double-click Adapter:REG_DWORD:0x1.
	
	4. In the DWORD Editor dialog box, change data from 1 to 0 and click OK.
	
	5. Exit Regedt32.exe.
	
	6. Stop and restart the spooler service.
	
	Additional query words: prodnt dlc printer device missing gone hpmon
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	

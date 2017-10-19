---
layout: page
title: "Q113125: DLC Printing Limited to One Network Adapter in Windows NT"
permalink: /kb/113/Q113125/
---

## Q113125: DLC Printing Limited to One Network Adapter in Windows NT

	Article: Q113125
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the DLC protocol under Windows NT, you can select only one Network
	Interface Card (NIC) for printing to Hewlett-Packard Co. (HP) Jetdirect or other
	network printers. If your Windows NT machine has two NIC's on different network
	segments with HP Jetdirect printers, you can print to or share a printer from
	only one segment at a time.
	
	CAUSE
	=====
	
	This is a limitation of HPMON, which controls DLC printing in Windows NT.
	
	WORKAROUND
	==========
	
	To print to the second NIC (or segment), you have to select a different adapter
	from the Advanced Options for HP Network Ports option in Print Manager, then
	reboot the machine.
	
	When you select the Secondary(1) adapter, you are prompted to restart the Spooler
	service. To do this, run Control Panel, choose Services, select Spooler, choose
	stop, and then choose start. When you go back into Print Manager and create the
	printer, the Advanced Options for HP Network Ports dialog box displays the
	JetDirect addresses on the secondary network adapter.
	
	MORE INFORMATION
	================
	
	By default the HP printer software, HPMON, uses the "primary" adapter setting.
	If you set up the HP printer on the "secondary" adapter, print jobs will be
	lost.
	
	The primary or secondary adapters correspond to the first and second NIC's that
	the DLC protocol is bound to.
	
	To view the DLC binding order:
	
	1. In Control Panel, choose the Network icon. Choose Bindings. Choose DLC
	  protocol.
	
	2. From Print Manager, choose the "Printer" connected to the physical HP network
	  print device.
	
	3. Select settings.
	
	4. When the "Configure HP Network peripheral port option" window appears, click
	  on the Options button.
	
	5. The window titled "Advanced option for all HP network ports" appears. The
	  adapter choice is listed here.
	
	6. Choose the appropriate adapter, according to the DLC protocol binding list,
	  or change the bind order to match the primary and secondary settings.
	
	7. Open Control Panel - Services, select Spooler, then stop and restart the
	  Spooler service.
	
	8. Go back to Print Manager and view the HP JetDirect addresses; these addresses
	  are on the network connected to the secondary network adapter.
	
	9. Select the desired printer and complete printer setup.
	
	NOTE: Since Windows NT does not rely on LANA numbers, changing the binding order
	does not affect system performance in any way. For more information on binding
	order, refer to article Q103275: How to Find LANA Numbers for Applications.
	
	STATUS
	======
	
	This limitation is by design. HPMON is owned by Hewlett Packard Co.
	
	Additional query words: prodnt jet direct router multiple than
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	

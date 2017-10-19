---
layout: page
title: "Q123297: Losing Connections with HP JetDirect Printers"
permalink: /kb/123/Q123297/
---

## Q123297: Losing Connections with HP JetDirect Printers

	Article: Q123297
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Windows NT version 3.1 may lose connections with Hewlett-Packard (HP) JetDirect
	printers. This can result in a continuous Online or Status Unknown for the
	printer in Print Manager. The print queue then stops responding (hangs) and does
	not restart until the server is restarted.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	- Make sure the latest version of HPMON.DLL is loaded. Run Print Manager.
	  Select any print queue using an HP JetDirect. From the Printer menu, choose
	  Properties, and then choose Settings. Choose the About button to display the
	  version information. It should be version A.00.14.
	
	  NOTE: This is the version shipping with Windows NT version 3.5 and is
	  available for Windows NT version 3.1 in Service Pack 3 or the HPMON.DLL
	  provided in the HPMON.EXE Application Note, which is located on the Internet
	  on FTP.MICROSOFT.COM.
	
	- Increase the DLC Timers settings located in Print Manager to be similar to
	  the version information above. To adjust the DLC Timers, select a printer
	  using a JetDirect, and then choose Properties from the Printer menu. Choose
	  the Settings button, and then choose Options (do this from the server because
	  HPMON.DLL cannot run remotely). The range for each of the three settings of
	  the DLC Timers is 1 to 10. Try doubling each setting first, and then adjust
	  them more if you need to. This affects HPMON as a whole for the server, so
	  you only need to make this adjustment on one printer. Note: the new settings
	  will not take affect until you restart the server.
	
	
	- HPMON by default uses windowing to communicate with the JetDirect card. This
	  means HPMON will send say five packets to the JetDirect and only expect one
	  acknowledgment for all five. Sometimes if the printer is slow to accept
	  incoming data, the buffers on the JetDirect will become full and the
	  JetDirect cannot accept all of the packets at once. The JetDirect will not
	  send the acknowledgment and HPMON must attempt to synchronize between the
	  two. Under stress, this causes problems because traffic increases between
	  HPMON and the JetDirect with retransmissions. The connection may fail during
	  this time. In cases like this, it is best to turn the windowing off. By doing
	  so, HPMON will send one packet and wait for an acknowledgment before sending
	  the second packet. This provides for much better error handling. While this
	  change does affect the network speed to the printer, the speed is only
	  moderately affected and is still much faster than printers can render the
	  print. The above cases of flow control can actually be faster then with the
	  retransmissions of failed windows of data.
	
	  To disable windowing, you may modify the Registry. However, if you extract the
	  new HPMON available on the Internet with the "-D" (without the quotation
	  marks) parameter, and then run the automated Install program for HPMON, you
	  do not have to modify the Registry.
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  1. Start REGEDT32.EXE and locate the following Registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	  \Print\Monitors\Hewlett-Packard Network Port\Options
	
	  2. From the Edit menu, choose Add Value. Enter "MaximumXmitsWindow" (without
	     the quotation marks) in the Value Name field. Select REG_DWORD for the
	     Data Type. Enter 1 in the Data field and choose OK.
	
	  3. Exit REGEDT32.
	
	The HP JetDirect printer is manufactured by Hewlett-Packard Company, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt monitor printman
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

---
layout: page
title: "Q129007: HPMON Logs Event 1044 But Job Prints Correctly"
permalink: /kb/129/Q129007/
---

## Q129007: HPMON Logs Event 1044 But Job Prints Correctly

	Article: Q129007
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HPMON may repeatedly log the following application event when you print through
	an Hewlett-Packard (HP) JetDirect adapter:
	
	  Event Id: 1044
	  Description: Lost connection with address <JetDirect address>.
	  Printing will continue when the connection is re-established.
	
	The print jobs print correctly after the error is logged.
	
	CAUSE
	=====
	
	HPMON uses the DLC protocol to send print jobs to HP JetDirect adapters. In Job
	Based mode, a Windows NT print server connects to the JetDirect adapter, sends a
	job, and disconnects, allowing the adapter can receive connections from other
	print servers. In Continuous mode, the print server makes a connection and never
	disconnects, preventing other servers from using the JetDirect.
	
	The JetDirect adapter resets itself after each disconnect, and during the reset
	the adapter does not accept new connections. If a Windows NT print server sends
	numerous jobs back-to-back in Job Based mode, the JetDirect is resets itself
	often after a disconnect when the next connection request arrives. When the
	JetDirect denies the connection, HPMON on the Windows NT print server logs error
	1044, waits briefly, and then tries to connect again (usually succeeding).
	
	RESOLUTION
	==========
	
	Although the logged events in this situation do not indicate a problem, they can
	fill the event log. To avoid this, use Continuous mode instead of Job Based
	mode:
	
	Windows NT 3.x
	--------------
	
	1. In Print Manager, select the printer encountering this error.
	
	2. On the Printer menu, click Properties.
	
	3. Click Settings and then click Timers.
	
	4. Change Connection type from Job Based to Continuous.
	
	Windows NT 4.0
	--------------
	
	1. In the Printers folder, select the printer encountering this error.
	
	2. On the File menu, click Properties.
	
	3. Select the Ports tab.
	
	4. Click Configure Port and then click Timers.
	
	5. Change Connection type from Job Based to Continuous.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

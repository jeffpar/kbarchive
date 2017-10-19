---
layout: page
title: "Q186530: Printing to Local Printer on Tektronix Windows-Based Terminal"
permalink: /kb/186/Q186530/
---

## Q186530: Printing to Local Printer on Tektronix Windows-Based Terminal

	Article: Q186530
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Typically, the RDP client does not support local devices, such as printers.
	However, aside from using Citrix's ICA client to gain this functionality, some
	manufacturers are building in services to allow local printing on their RPD
	devices.
	
	For instance, the Tektronix WBT supports Line Printer Daemon (LPD) as a separate
	process on the device. Any device that supports Line Printer Remote (LPR)
	(including Windows Terminal Server or Windows NT Server) can print to this. This
	means that administrators can set up a print queue on Terminal Server or Windows
	NT Server pointing to the LPD on the Tektronix WBT. A user can connect from the
	Tektronix device to the LPR queue and print to the local printer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

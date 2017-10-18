---
layout: page
title: "Q175865: Print Directly to Printer Unsupported with LPR Devices"
permalink: kb/175/Q175865/
---

## Q175865: Print Directly to Printer Unsupported with LPR Devices

	Article: Q175865
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a print job is sent to a line printer remote (LPR) print device, either
	local or remote, the server may receive the following error:
	
	  Error writing to x.x.x.x:xx for document xxx.xx An unexpected network
	  error occurred. Do you wish to retry or cancel the job?
	
	Print jobs will print intermittently or partial pages, however, the message
	continually pops up after each attempt to print. Clients connecting to a shared
	printer configured as above cannot print to the shared printer at all. The
	clients will get a printing error only when the job is deleted from the queue.
	
	CAUSE
	=====
	
	In Printer Properties, the printer is configured to Print directly to the
	printer under Windows NT 4.0 or Print directly to port under Windows NT 3.51.
	
	RESOLUTION
	==========
	
	Under Printer Properties for the printer in question, click to clear the option
	for Print directly to printer or Print directly to port so the printer will
	spool print jobs.
	
	
	MORE INFORMATION
	================
	
	The Print directly to printer/port option is not supported with LPR print
	devices under Windows NT 3.5x or Windows NT 4.0. This is by design.
	
	Additional query words: tcp/ip hangs lprmon print direct
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

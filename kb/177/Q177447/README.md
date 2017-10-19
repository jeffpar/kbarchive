---
layout: page
title: "Q177447: Cannot Change Printer Ports on a Printer"
permalink: /kb/177/Q177447/
---

## Q177447: Cannot Change Printer Ports on a Printer

	Article: Q177447
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attempts to change the currently selected printer port on Windows NT 4.0 are
	ignored. Although the ports seem available, there appears to be no response by
	clicking the newly selected port with the mouse or with the keyboard.
	
	Other symptoms may be that the when the port tab is selected, no ports appear at
	all.
	
	MORE INFORMATION
	================
	
	Check the icon of the printer you have selected. If the printer icon shows a
	wire below the printer, the printer was created by selecting the Add Printer
	Wizard "Network Printer Server" option.
	
	The Network Printer Server option is selected to connect to a printer already
	shared by another computer on a Microsoft network. When the properties of this
	type of printer are selected, the settings viewed are those of the remote
	computer. Changes made will actually result in changes on the remote computer.
	If attempts to change the settings appear to be ignored, that is because the
	user attempting to make the changes does not have sufficient user rights on the
	remote computer.
	
	If you have no permissions reconnecting to a printer to which you previously had
	access, the following message may occur when viewing details in the printers
	folder:
	
	  <Access denied, unable to connect>
	
	The minimum permissions to at least see the printer ports are the Print
	permissions.
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbinfo
	
	=============================================================================
	

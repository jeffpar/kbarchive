---
layout: page
title: "Q131004: How to Enable Print Notification with NetWare Print Servers"
permalink: /kb/131/Q131004/
---

## Q131004: How to Enable Print Notification with NetWare Print Servers

	Article: Q131004
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Client for NetWare Networks (NWREDIR.VXD) to print to
	a NetWare print queue, print notification is not an option in the properties for
	the printer.
	
	CAUSE
	=====
	
	Windows 95 provides the following common Novell NetWare capture settings:
	
	- Banner Page
	
	- Form Feed
	
	- Expand Tabs
	
	- Form
	
	- Timeout
	
	Capture settings that do not appear in the printer properties can be enabled
	using the NetWare CAPTURE command.
	
	RESOLUTION
	==========
	
	To receive notification when a print job is finished on a NetWare print queue,
	follow these steps:
	
	1. Use the following command in your user or system login script
	
	  capture L=<x> /server=<y> /queue=<z> /notify
	
	  where <x> is the LPT port, <y> is the NetWare server name, and
	  <z> is the NetWare print queue name you are using.
	
	  For more information about the CAPTURE command, please consult your NetWare
	  administrator, documentation, or dealer.
	
	2. Install the printer. Make sure that the "Print to the following port" setting
	  is set to the port you are using, not to the printe's UNC name.
	
	3. Run Winpopup.exe from the Windows directory. (Winpopup.exe is installed when
	  you install the Microsoft Client for Microsoft Networks or NetWare Networks.)
	
	After you follow these steps, the NetWare print server uses WinPopUp to send you
	print notifications.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

---
layout: page
title: "Q166460: Unwanted Banner Page Printed from MS-DOS-Based Program"
permalink: /kb/166/Q166460/
---

## Q166460: Unwanted Banner Page Printed from MS-DOS-Based Program

	Article: Q166460
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork kbprint 3rdpartynet msnets win95 kb3rdPartyNetClient
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you turn off banner pages, printing from MS-DOS-based programs may still
	print banner pages.
	
	CAUSE
	=====
	
	The program is printing to a UNC printer name instead of to a port.
	
	RESOLUTION
	==========
	
	Capture the printer port. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the printer you want to use, then click
	  Properties on the menu that appears.
	
	3. Click the Details tab, and then click the Capture Printer Port button.
	
	4. Click the port to be captured (such as LPT2) and the path to the network
	  printer (such as \\ServerName\PrinterShare).
	
	  NOTE: To make this connection available every time Windows 95 is started,
	  click the Reconnect At Logon check box to select it.
	
	5. In the printer's properties, in the box that shows the print server and share
	  name, look for the entry that shows "LPT<x>," where <x> is the
	  port you have captured.
	
	6. Click LPT<x> (\\<Server>\<Printqueue>), and then click
	  Apply.
	
	7. Click the Capture tab, disable the banner page setting, and then click OK.
	
	Additional query words: novell netware form feed separator
	
	======================================================================
	Keywords          : kbnetwork kbprint 3rdpartynet msnets win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

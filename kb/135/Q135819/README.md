---
layout: page
title: "Q135819: Error Printing to NetWare Printer w/Extended Character in Name"
permalink: kb/135/Q135819/
---

## Q135819: Error Printing to NetWare Printer w/Extended Character in Name

	Article: Q135819
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
	
	When you print to a NetWare network printer, you may receive the following error
	message:
	
	  There was an error writing to LPTx: for printer (xxxxxx): There was a problem
	  printing to the port. Check to make sure your printer is configured to use a
	  valid port. This printer will be set to work offline. To save your print job
	  in the local printer queue, click OK.
	
	CAUSE
	=====
	
	This problem can occur if the NetWare printer path contains extended
	characters.
	
	
	RESOLUTION
	==========
	
	Instead of mapping the printer port and then printing to the port, print to the
	print queue's Universal Naming Convention (UNC) path. To do so, follow these
	steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the icon for the printer you want to
	  change, and then click Properties on the menu that appears.
	
	3. On the Details tab, type the UNC path for the printer in the Print To The
	  Following Port box.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

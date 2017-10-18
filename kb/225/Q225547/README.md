---
layout: page
title: "Q225547: Delete Printer and Port Created with HP Internet Printer Connect"
permalink: kb/225/Q225547/
---

## Q225547: Delete Printer and Port Created with HP Internet Printer Connect

	Article: Q225547
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to delete a printer and port created with the
	Hewlett-Packard (HP) Internet Printer Connect software.
	
	MORE INFORMATION
	================
	
	Deleting HP Internet Printer Connection Printer
	-----------------------------------------------
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer you want to delete, and then click Properties.
	
	3. On the Ports tab, click to select the check box for a port that is not in use
	  (for example, the File port), and then click OK.
	
	4. Click the printer you want to delete, and then click Delete on the File menu.
	
	5. When you are prompted to confirm the deletion, click Yes.
	
	Deleting HP Internet Printer Connection Port
	--------------------------------------------
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer connected to the port you want to delete, and then
	  click Properties.
	
	3. On the Ports tab, click to select the check box for a port that is not to be
	  deleted (for example, the File port), and then click OK.
	
	4. Right-click the same printer, and then click Properties.
	
	5. On the Ports tab, click the port you want to delete (it should have the
	  description "HP Internet Printer Connection Port"), and then click Delete
	  Port.
	
	6. When you are prompted to confirm the deletion, click Yes.
	
	NOTE: If you receive the message "Selected port could not be deleted. The
	requested resource is in use," when you try to delete the port, try the
	following steps:
	
	1. Check the properties for all printers. Change any that are connected to the
	  port to be deleted.
	
	2. Click Start, point to Settings, and the click Control Panel.
	
	3. Double-click Services.
	
	4. Click the Spooler service, and then click Stop.
	
	5. After the Spooler service stops, click Start.
	
	6. After the Spooler service starts, click Close.
	
	7. Attempt to delete the port again by using the steps above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

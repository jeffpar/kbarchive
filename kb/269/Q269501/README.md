---
layout: page
title: "Q269501: UNIX Clients Are Unable to Print to a Shared Windows 95 or Windo"
permalink: kb/269/Q269501/
---

## Q269501: UNIX Clients Are Unable to Print to a Shared Windows 95 or Windo

	Article: Q269501
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a UNIX-based host attempts to use the LPR command to print to a shared
	printer that is connected to a Windows 95- or Windows 98-based client computer
	through a Windows NT Server 4.0-based print server, errors may occur and the
	print job may not be printed.
	
	RESOLUTION
	==========
	
	To resolve this behavior, adjust the configuration of the shared printer and of
	the print server.
	
	MORE INFORMATION
	================
	
	Follow these steps:
	
	Configure the shared printer on the Windows 95- or Windows 98-based client:
	
	1. In Control Panel, double-click Network.
	
	2. Click Access Control.
	
	3. Click User level access control.
	
	4. In the Obtain list of users and groups from box, type the name of your
	  domain, and then click OK.
	
	5. Restart the computer.
	
	6. Install the printer and share it, using a simple share name (8 characters or
	  less). Grant "the World" at least "Print" access.
	
	Configure the Windows NT Server 4.0-based print server:
	
	1. Make sure that the Microsoft TCP/IP Printing Service is installed, started,
	  and set to start automatically.
	
	2. Start the Add Printer Wizard.
	
	3. Click My Computer, and then click Next.
	
	4. Click Add Port.
	
	5. Click Local Port, and then click New Port.
	
	6. Type the Universal Naming Convention (UNC) path to the shared printer on the
	  Windows 95- or Windows 98-based client, click OK, and then click Close.
	
	7. Select the port you just created, and then click Next.
	
	8. Select the appropriate print driver, and then click Next.
	
	9. Type the printer name, and then click Next.
	
	10. Click Shared, type the print share name, select the types of clients that
	  will be using the printer, and then click Next.
	
	  NOTE: The print share name that you specify here is the printer name that
	  clients will use with the LPR command.
	
	11. When you are asked whether you want to print a test page, click Yes, and
	  then click Finish.
	
	12. From the Windows NT 4.0-based print server or from a UNIX client, use the
	  LPR command to submit a test print job.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

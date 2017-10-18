---
layout: page
title: "Q167101: Cannot Start FPNW Services If The Spooler Is Not Running"
permalink: kb/167/Q167101/
---

## Q167101: Cannot Start FPNW Services If The Spooler Is Not Running

	Article: Q167101
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the File and Print for NetWare (FPNW) service you will get
	the following error message if the Spooler service is not running:
	
	  Could not start the File and Print Services for NetWare service on \\<NT
	  server name>. Error 2140: An internal Windows NT error occurred.
	
	On a Windows NT 3.51 Server, File and Print Services fails to start with a Dr.
	Watson log being generated with the following error:
	
	  "An Application Error Has Occurred And An Application Error Log Is Being
	  Generated NWSSVC.EXE Exception: Access Violation (0x0000005), address..."
	
	The Event Viewer will create the following event ID log:
	
	  System log:
	     Event ID: 7023
	     Source: Service Control Manager
	     Description: The File and Print Service for NetWare service
	     terminated with the following error:
	     The System cannot find the path specified.
	
	  Application log:
	     Event ID: 2740
	     Source: FPNW
	     Description: The QMS library could not initialized.  The Spooler
	     change Thread failed to open the server printer \\<NT server name>.
	     The data is in the error.
	
	  Event ID: 2742
	     Source: FPNW
	     Description: The QMS library could not be initialized. QMS failed to
	     enumerate printers from WinSpool. The data is in the error.
	
	RESOLUTION
	==========
	
	Verify that the Spooler service has started by double-clicking the Settings icon
	in Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server
	versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch
	Version           : WinNT:3.51,4.0
	Solution Type     : kbfix
	
	=============================================================================
	

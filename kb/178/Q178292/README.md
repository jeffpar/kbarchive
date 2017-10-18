---
layout: page
title: "Q178292: Cannot Delete SNA Server Print Server"
permalink: kb/178/Q178292/
---

## Q178292: Cannot Delete SNA Server Print Server

	Article: Q178292
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	If you cannot delete the printer after stopping the SNA Print Service, use one
	of the following two methods to delete it:
	
	- Using SNA Server Manager, select File and then select Open Offline. Then
	  select the path to the com.cfg file. It will be located in the
	  <snaroot>\system\config directory. After SNA Server Manager has
	  displayed the SNA Server configuration offline, delete the print service.
	
	- Using snacfg the command-line parameter is:
	
	  snacfg [#configpath] printserver /delete
	
	SYMPTOMS
	========
	
	If the machine name of the SNA Server computer has been changed and SNA Server
	Manager lists two print servers with the same name, it may not be possible to
	delete the second instance even when the SNA Print Service is stopped.
	
	WORKAROUND
	==========
	
	An SNA Print Service cannot be deleted while the Print Server Service is active.
	The service can be stopped using one of the following three methods:
	
	- On Control Panel, double-click Services, select SnaPrint, and then select
	  Stop.
	
	- From SNA Manager, expand the Print Servers Folder in the left pane, select
	  the print server that you want to stop, and then right-click and select Stop,
	  (or select from the menu, Service, Stop).
	
	- From a command prompt, type "net stop snaprint" (without the quotation
	  marks).
	
	Additional query words: snaprint
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

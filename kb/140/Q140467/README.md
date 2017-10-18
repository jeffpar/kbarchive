---
layout: page
title: "Q140467: How to Set Up Printers on FPNW to Service PSERVER.EXE"
permalink: kb/140/Q140467/
---

## Q140467: How to Set Up Printers on FPNW to Service PSERVER.EXE

	Article: Q140467
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Novell offers two NetWare PSERVER utilities:
	
	- PSERVER.NLM, which runs on the NetWare file server, and
	
	- PSERVER.EXE, which runs on a dedicated workstation.
	
	The functions of the two utilities are basically the same; they run as a resident
	program, servicing up to 16 physical printers, and poll the queues attached to
	those printers. Microsoft supports clients printing on both type of printer
	servers.
	
	
	MORE INFORMATION
	================
	
	To setup print server on FPNW server to service PSERVER.EXE:
	
	NOTE: PSERVER.EXE runs on a workstation with a local printer, that is, on that
	workstations LPT1: port.
	
	1. Create a printer using Print Manager, on the FPNW server and call it PS1_Q.
	
	2. Select the correct driver for your printer from the printer driver list or
	  select other option and type in the path for the drivers provided by the
	  manufacturer.
	
	3. Type the description (optional).
	
	4. In the print to box, select NetWareCompatiblePServerX port.
	
	5. Share the printer on the network. ( FPNW will not see the queue unless it is
	  shared.)
	
	6. Under the Details button, set the Print Processor type to NWPRINT, if it
	  hasn't already been set.
	
	7. Click OK to save the configuration.
	
	8. Under Server Manager => FPNW => Print Servers, add a new print server
	  and call it PS1. Provide a password if needed or leave it blank.
	
	9. With PS1 highlighted, select the Printers button, and add a new printer and
	  call it PS1_PRN.
	
	10. Select the type to print to Parallel, LPT1: and select the correct settings
	  for the local port on the dedicated workstation.
	
	11. Select the OK button to save the configuration.
	
	12. Select the Queues button, on the Printers dialogue box and add the queue,
	  from the available queues box, that was created in Print manager above. The
	  FPNW install in now completed.
	
	13. On a VLM or NETX client, login to the FPNW server, and run PSERVER <print
	  server name>, in this case PSERVER PS1. The workstation will now run as a
	  dedicated print server. Clients logging onto the FPNW server will be able to
	  capture to the PS1_Q queue and print to the local printer on the dedicated
	  workstation.
	
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : :3.51
	
	=============================================================================
	

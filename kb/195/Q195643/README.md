---
layout: page
title: "Q195643: How to Configure Windows NT for LPR Printing"
permalink: /kb/195/Q195643/
---

## Q195643: How to Configure Windows NT for LPR Printing

	Article: Q195643
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure a Windows NT-based computer for line
	printer remote (LPR) printing.
	
	MORE INFORMATION
	================
	
	To Install LPR Printing
	-----------------------
	
	1. Right-click Network Neighborhood, and then click Properties.
	
	2. Click the Services tab, and then click Add.
	
	3. Click Microsoft TCP/IP Printing, and then click OK. Insert the source CD-ROM
	  if you are prompted to do so.
	
	4. Click Close, and then restart the computer when you are prompted to do so.
	
	To Add an LPR Printer
	---------------------
	
	1. Click Start, point to Settings, click Printers, and then double-click Add
	  Printer.
	
	2. Click My Computer, and then click Next.
	
	3. Click Add Port.
	
	4. In the Printer Ports dialog box, click LPR Port, and then click New Port.
	
	5. In the "Name or address of server providing lpd" box, type the Domain Name
	  System (DNS) name or the IP address of the host of the printer you are
	  adding. In the "Name of printer or print queue on that server" box, type the
	  name of the printer as it is known by the host.
	
	  Note that the host is the physical device actually attached to the printer.
	  For a stand-alone printer directly connected to the network, the host is the
	  internal JetDirect card. If the device has only one printer, the name of the
	  printer is not needed. If the printer is connected to a server, the device
	  name as shown on the network is required. If the printer is connected to an
	  external print server (Netport, Hewlett-Packard Jet Direct, and so on), check
	  the print server's documentation to determine the name of the port. If no
	  documentation is available, try "raw1," "serial1," or "parallel1" as
	  required.
	
	6. Click OK.
	
	  NOTE: The first time you add a port, you might receive a configuration warning
	  stating "The server name you specified could not be resolved" or some other
	  similar message. If you are sure that the name information is correct, click
	  OK to continue. To try again, click Cancel.
	
	7. Click Close.
	
	8. Click Next.
	
	9. Click the appropriate driver. If it is on a separate disk, click Have Disk.
	
	10. Type a name for the printer, and then click Next.
	
	11. If you want to share the printer for Point-and-Print printing, click Shared,
	  type a name for the shared printer, select the operating systems that will
	  use the printer, and then click Next. If you do not want to share the
	  printer, click Next.
	
	12. Print a test page if you want to.
	
	13. Click Finish.
	
	14. Insert the source CD-ROM if you are prompted to do so.
	
	NOTE: Please make sure that after you install any service from the original
	Windows NT media, you reapply the latest service pack.
	
	Additional query words: setup set up
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

---
layout: page
title: "Q260226: PRB: Attempting to Print to Remote Printer Via a TCP/IP in SNA"
permalink: /kb/260/Q260226/
---

## Q260226: PRB: Attempting to Print to Remote Printer Via a TCP/IP in SNA

	Article: Q260226
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1 and above,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Print Server session is configured to print to a remote print device
	through a Transmission Control Protocol/Internet Protocol (TCP/IP) protocol. The
	print session is configured when you specify either the universal naming
	convention (UNC) name of the printer share or the IP address. The SNA Print
	session may not respond at the pending status and the following event ID is
	recorded:
	
	  
	
	  Event Type:	Warning
	  Event Source:	SNA Virtual Print Driver
	  Event Category:	None
	  Event ID:	9
	  Date:		4/20/2000
	  Time:		3:15:03 AM
	  User:		N/A
	  Computer:	SNA01
	  Description:
	  The GDI routine OpenPrinter has returned an error to the SNA Virtual Printer Driver.<BR/>
	    Error Returned: 1801.<BR/>
	    Printer: \\XXX.XXX.XXX.XXX
	
	The return value of 1801 is the following printer device error:
	
	  
	
	  ERROR_INVALID_PRINTER_NAME
	
	CAUSE
	=====
	
	This problem occurs because the SNA Print Server is unable to resolve the UNC
	name to the proper IP address. This is caused because of a problem with the
	Windows Internet Name Service (WINS) server in the Windows NT domain. The SNA
	Print Server does not support the configuration of the IP addresses to direct
	the SNA Printer to the remote print server queue.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the IP address entered in the printer
	destination in the SNA Print session. Type in the UNC print server queue name,
	and then save the configuration. Create a Lmhosts file resolving the UNC name of
	the print server to the IP addresses. The Lmhosts file resolves the UNC name of
	the print server to the necessary IP address until the WINS server problem has
	been corrected.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q101927 The Lmhosts File for TCP/IP in Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 SP1 and above,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

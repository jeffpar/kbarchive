---
layout: page
title: "Q318612: How to Associate TN3270 Display LUs with TN3270 Printer LUs"
permalink: kb/318/Q318612/
---

## Q318612: How to Associate TN3270 Display LUs with TN3270 Printer LUs

	Article: Q318612
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to associate TN3270 terminal logical units (LUs) with
	TN3270 printer LUs.
	
	MORE INFORMATION
	================
	
	From Server Manager
	-------------------
	
	1. Add the number of logical unit application (LUA) LUs that you must have to
	  pair terminal LUs with printer LUs to a connection.
	
	2. Assign LUA LUs to the TN3270 Service (this is the only way that you can
	  configure the LUA LUs as terminal and printers).
	
	3. To configure a LUA LU as a printer, right-click the LUA, click Properties,
	  click the TN3270 tab, and then click Associate Printer.
	
	4. To configure the LUA that is designated as a terminal LU, right-click the
	  LUA, click Properties, click the TN3270 tab, and then select the printer you
	  want to associate from the Associated Printers list.
	
	5. Repeat steps 2 through 4 for each terminal LU that you want to associate with
	  a printer LU.
	
	6. On the Action menu, click Save configuration.
	
	From the Client Computer That Runs the Third-party Emulator
	-----------------------------------------------------------
	
	1. Configure a display session as you do normally.
	
	2. Configure a printer session. Select the Associated Printers option, type the
	  "Display Session name" (without the quotation marks) in the Device Name box,
	  and then connect.
	
	NOTE: The configuration of associated printers may vary depending on the
	emulator's implementation of the TN3270 enhancements that are mentioned in
	Request For Comments #2355. For more information about the configuration of
	associated printers, see the manufacturer's documentation. A client computer
	accesses a printer LU by sending an associate request and giving the name of the
	terminal LU with which the printer LU is partnered. Additionally, the Associated
	Printers feature permits you to direct the output of a terminal session to a
	particular printer session without needing to know the device name of the
	printer.
	
	For additional information about 3270 Printer Association, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q318611 How to Associate 3270 Display LUs with 3270 Printer LUs
	
	REFERENCES
	==========
	
	For more information about associating printers, see the "Associate 3270 Printer
	LUs with 3270 Display LUs" topic in the Host Integration Server online Help
	documentation.
	
	For more information about the TN3270 enhancements, see the Request for Comments
	#2355 at the following Internet Engineering Task Force Web site:
	
	  Request for Comments: 2355 - TN3270 Enhancements
	  http://www.ietf.org/rfc/rfc2355.txt
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbhowto
	
	=============================================================================
	

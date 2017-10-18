---
layout: page
title: "Q98585: Spooling Print Jobs from MS-DOS-Based Applications in Windows"
permalink: kb/098/Q98585/
---

## Q98585: Spooling Print Jobs from MS-DOS-Based Applications in Windows

	Article: Q98585
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	This article contains information about the use of Windows for Workgroups
	with third-party products or configurations that have not been tested and
	are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	Windows does not have the ability to spool local print jobs sent to the printer
	by MS-DOS-based applications. This article contains a potential workaround for
	this situation. This workaround may also alleviate device- contention errors.
	
	To spool print jobs from MS-DOS-based applications, you must print from one
	computer to another using a dummy port and then redirect the job back to the
	first computer. The print job is then put in the print queue. This process may
	eliminate device conflicts when you try to print to the local printer.
	
	NOTE: This workaround works only if the application has the ability to choose the
	LPT2 port instead of the LPT1 port.
	
	MORE INFORMATION
	================
	
	The following example shows how the print job is redirected over the network.
	The diagram illustrates the flow of the data, and the text explains how to
	configure your system to obtain this functionality.
	
	----------------                                    --------------
	|   Server     |=<<===LPT1=<<====<<====LPT2====<<===|   Client   |
	----------------     (shared)       (to network)    --------------
	      |     |                                           |
	      |     |                                           |
	      |      ==>>== LPT2 ====>>====>>==LPT2.DOS===>>====
	      |         (to network)           (shared)
	      |
	      |  (Local, LPT1)
	------------------
	|  Printer: LPT1 |
	------------------
	
	1. From the server, share LPT1.
	
	2. From the client, connect to the server using LPT2.
	
	3. From the client, install a printer driver for the port "LPT2.DOS" and share
	  it.
	
	4. From the server, connect to the client's newly created share using LPT2.
	
	5. From the server, print from the MS-DOS-based application to LPT2. Your print
	  job is now effectively spooled to the printer.
	
	Additional query words: 3.10 3.11 device contention printing dos msdos server client app apps spooler bounce prompt virtual machine vm printers drivers
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	

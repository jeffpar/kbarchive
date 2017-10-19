---
layout: page
title: "Q107570: SNA Server and 3287 Host Print Emulation"
permalink: /kb/107/Q107570/
---

## Q107570: SNA Server and 3287 Host Print Emulation

	Article: Q107570
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting sna4
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft SNA Server version 2.x package does not include support for IBM
	3287 host print emulation. However, several third-party companies do support
	printer emulation, which are listed in the ISV Companion Product Catalog that is
	included with SNA Server.
	
	SNA Server 3.0 and later removes the need for a third party emulator by including
	a print server. The print server allows 3270 printer emulation to be configured
	and maintained centrally, rather than at each client desktop. For more details
	about this feature, see the 3.0 or 4.0 product documentation or
	http:\\www.microsoft.com\sna.
	
	MORE INFORMATION
	================
	
	To support host print emulation (often referred to as 3287 print emulation) with
	SNA Server versions prior to 3.0, a third-party product must be used, because
	the low-end 3270 emulator included with the product only supports display
	emulation.
	
	To run the third-party print emulation package at the server, a 32-bit Windows
	host print emulation product must be used. Also, a third-party emulator could
	also run on any SNA Server client platform (that is, a Windows 3.x emulator runs
	on an SNA Server Windows 3.x client, and so on).
	
	To support print emulation, the administrator must define 3270 printer LUs in the
	SNA Server configuration file (using SNA Admin), and assign these LUs to an SNA
	Server user or to a group account where the print emulator will be running. When
	users route print data to the printer LU supported by a printer emulation
	package, SNA Server routes the host print job to the print emulator, whether it
	resides on the server or an SNA Server client (that is, it does not flow to the
	3270 display emulator user who initiated the host print job).
	
	Also, note that the Windows 16-bit and 32-bit 3270 applets that are shipped with
	SNA Server does include a local screen print capability, where screen data can
	be routed to a local printer, or redirected to a network printer.
	
	Additional query words: prodsna 3287 SNA print emulation
	
	======================================================================
	Keywords          : kbprint kbPrinting sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

---
layout: page
title: "Q246991: Event 4097 Occurs When an Invalid Printer Type Is Entered in HPT"
permalink: kb/246/Q246991/
---

## Q246991: Event 4097 Occurs When an Invalid Printer Type Is Entered in HPT

	Article: Q246991
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 U.S. SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 U.S. SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an invalid printer type is manually entered in the Host Print Transform
	Printer Type User Interface, the print session stays pending, and the
	Application Event Log may record the following event:
	
	  Event: 4097
	  Source: PPV5250
	  Description: Receive and Wait verb has completed with primary return code
	  Dealloc Normal
	
	CAUSE
	=====
	
	Host Print Transform (HPT) is a utility on the AS/400 that formats the data
	stream in an ASCII stream with embedded control characters to format the data to
	match the selected printer type. The printer type configured on the SNA Server
	computer is passed to the AS/400 in the ATTACH.
	
	RESOLUTION
	==========
	
	Although it is possible to manually enter values, and required in SNA Server
	3.0, the SNA Server 4.0 interface has a drop-down list box to select the printer
	type. Use the drop-down lest box instead of manual entry whenever possible.
	
	To view the HPT printer types, do the following:
	
	1. Type WRKDEVD "printerDevicename" (without the quotation marks) at a command
	  prompt.
	
	2. Enter 2 to change the parameters.
	
	3. Look for Host Print Transform= *Yes/No. The next line will be the device
	  types.
	
	4. Scroll down to the device types parameter and press the F4 key to select a
	  list of devices.
	
	5. Choose an appropriate printer device from the list, and then configure SNA
	  Server to match.
	
	The change is NOT reflected back to the SNA Server Print Server.
	
	MORE INFORMATION
	================
	
	There are many other reasons that this event is posted. For additional
	information, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q222940 SNA 5250 Print Service (PPV5250) May Log Event 4097 In Error
	
	  Q224825 Event 4097 Logged Continuously By 5250 Print Session
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 U.S. SP1
	
	=============================================================================
	

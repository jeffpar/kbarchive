---
layout: page
title: "Q195746: Print Server Sends a Continuous Stream of Formfeeds to Printer"
permalink: /kb/195/Q195746/
---

## Q195746: Print Server Sends a Continuous Stream of Formfeeds to Printer

	Article: Q195746
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain conditions, the status of a print server session may stay as
	"spooling" after a print job should have completed. When this is happening, the
	status of the print job in the Windows NT printer queue may also stay at
	spooling, while the size of the spool file keeps increasing. Under other
	conditions, the printing device may eject an endless stream of blank pages until
	the SNA Server print session is stopped and the print job is purged from the
	print queue.
	
	CAUSE
	=====
	
	This problem can occur if the following conditions are true:
	
	- An SCS code has set the top margin of the print job to a value greater than
	  1.
	
	- The last printable character in the host print job is a formfeed (0x0C).
	
	Normally, if the last printable character in a print job is a formfeed, SNA Print
	Server will not flush it to the printer, because the Windows NT printer will
	eject the page anyway. Otherwise, there would be an extra formfeed at the end of
	the job, resulting in a blank page being ejected. However, if the top margin on
	the job has been altered, SNA Print Server does some additional processing when
	a formfeed is encountered, in order to prepare to print the next character in
	the proper position on the next page. A problem with this additional processing
	was causing a continuous stream of formfeed characters to be sent to the
	printer.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	To work around this problem, a formfeed character is not needed at the end of a
	print job when printing through SNA Server. If this character is removed, the
	problem will not occur. Additionally, if a Set Vertical Format SCS code at the
	beginning of the print job sets the top margin to 1, or does not set the top
	margin at all, this problem will not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The Set Vertical Format SCS code is 2BC2. The Top Margin setting will always be
	the fifth byte in this SCS code (2B being the first byte).
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Solution Type     : kbfix
	
	=============================================================================
	

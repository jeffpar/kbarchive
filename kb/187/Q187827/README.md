---
layout: page
title: "Q187827: SNA Print to File Results in File Size of Zero KB"
permalink: kb/187/Q187827/
---

## Q187827: SNA Print to File Results in File Size of Zero KB

	Article: Q187827
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	SNA Manager does offer the option of Portrait or Landscape in the Print Session
	Properties dialog box. To do this, perform the following steps:
	
	1. Click the Printing tab.
	
	2. Select the Printer radio button, and then click Printer.
	
	The Print Setup dialog box allows a selection of Portrait or Landscape. No
	warning is issued to indicate this is not a supported option for the
	Generic/Text Only Printer Driver.
	
	Also, operation with Landscape selected has no effect on output directed to a
	printer. However, files produced by directing output to a file will contain no
	output and have a file size of zero KB.
	
	SYMPTOMS
	========
	
	Under certain configurations, print output directed to a file will result in a
	file size of zero KB.
	
	
	CAUSE
	=====
	
	The Properties dialog box of the Generic/Text Only Printer Driver does not offer
	a Portrait or Landscape setting. The driver supports Portrait only.
	
	RESOLUTION
	==========
	
	To resolve this problem, select Portrait in the Print Setup dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	
	=============================================================================
	

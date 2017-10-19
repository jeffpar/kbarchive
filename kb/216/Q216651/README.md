---
layout: page
title: "Q216651: Characters Are Faint When Printing to an HP LaserJet Printer"
permalink: /kb/216/Q216651/
---

## Q216651: Characters Are Faint When Printing to an HP LaserJet Printer

	Article: Q216651
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing may appear faint when you use SNA Print Server to print to an Hewlett
	Packard (HP) LaserJet printer. Characters may print so light, they are not
	easily readable.
	
	CAUSE
	=====
	
	The EconoMode setting may be enabled for the printer.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable EconoMode in the Control Panel Printer settings
	or on the printer driver. It is best to turn EconoMode on or off from the
	printer driver. Driver settings override the Control Panel settings on the
	printer. Refer to your printer documentation for the specific location of the
	EconoMode option, as it may be not be in the same place in the driver properties
	for all models.
	
	MORE INFORMATION
	================
	
	EconoMode is used to extend the life of the toner cartridge. EconoMode uses
	substantially less toner than normal printing, causing print jobs to print much
	lighter. This is generally adequate for printing drafts or proofs, but may not
	be preferable for SNA printing.
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q247540: Unable to View Printer Properties from SNA Server Manager"
permalink: /kb/247/Q247540/
---

## Q247540: Unable to View Printer Properties from SNA Server Manager

	Article: Q247540
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The printer properties for an SNA Print Session may not display in SNA Server
	Manager. The cursor briefly flickers; however, the Printer Properties dialog box
	never displays. There are no error messages posted in Event Viewer or displayed
	on the screen.
	
	CAUSE
	=====
	
	This problem may be caused by a damaged Rasddui.dll file (for Raster printers)
	or Pscrptui.dll file (for Postscript printers).
	
	RESOLUTION
	==========
	
	To resolve this problem, reinstall the Windows NT service pack.
	
	
	MORE INFORMATION
	================
	
	SNA Server uses the Windows NT Rasddui.dll file (for Raster Printers) and
	Pscrptui.dll (for Postscript printers) files to provide the user interface for
	printer configuration. To get to the printer properties through the SNA Manager,
	perform the following steps:
	
	1. Right-click the printer session.
	
	2. Click the Printer tab.
	
	3. Click the Printer button.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

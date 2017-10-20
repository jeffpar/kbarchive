---
layout: page
title: "Q157866: Msbatch.inf Parameters: Installing Printers"
permalink: /kb/157/Q157866/
---

## Q157866: Msbatch.inf Parameters: Installing Printers

{% raw %}

	Article: Q157866
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install printers using the Msbatch.inf file for
	batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	In the Msbatch.inf file, modify the [printers] section to select printers to be
	installed during Setup. The following sections illustrate various printer
	selections.
	
	No Printer
	----------
	
	If you do not want to install a printer, make sure the [printers] section exists
	but contains no entries.
	
	Local Printers
	--------------
	
	MyPrinter=HP LaserJet IIIsi,LPT1
	
	This entry specifies the friendly name of the printer (MyPrinter), the name of
	the printer from the Msprint.inf file (HP LaserJet IIISi), and the port to which
	it is connected.
	
	Network Printers
	----------------
	
	Networkprinter=HP LaserJet IIIsi,\\<printserver>\<printer>
	
	This entry specifies the friendly name (Networkprinter), the name of the printer
	from the Msprint.inf file (HP LaserJet IIISi), and the server and share name for
	the print queue.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}

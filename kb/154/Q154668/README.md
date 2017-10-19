---
layout: page
title: "Q154668: Computer Hangs Sending Large Print Jobs to WFW 3.11 Server"
permalink: /kb/154/Q154668/
---

## Q154668: Computer Hangs Sending Large Print Jobs to WFW 3.11 Server

	Article: Q154668
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message on a Windows for Workgroups 3.11
	shared Windows Printing System print server:
	
	  Printers Folder
	  There was an error writing to LPTx: for the printer (x):
	  The network printer is no longer available. Contact your system administrator,
	  or try using a different printer.
	
	CAUSE
	=====
	
	This error can occur on the printer server when you send large print jobs from a
	Windows 95-based computer to a Windows for Workgroups 3.11 shared Windows
	Printing System printer. When this does occur, the Windows 95- based that sent
	the print job may stop responding (hang).
	
	RESOLUTION
	==========
	
	On the Windows for Workgroups-based print server, increase the value for the
	NetHeapSize setting in the [386Enh] section of the System.ini file.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The default value for the NetHeapSize setting is 20. This value can be increased
	in 4K increments.
	
	Additional query words: wfw311
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

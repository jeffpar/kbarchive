---
layout: page
title: "Q172324: Unable to Print to AppleTalk Printer"
permalink: /kb/172/Q172324/
---

## Q172324: Unable to Print to AppleTalk Printer

{% raw %}

	Article: Q172324
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS NT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create an AppleTalk port connection to an AppleTalk printer, you may
	be unable to print to the AppleTalk printer. You may find that one Windows
	NT-based computer can print to the AppleTalk printer, but others cannot.
	
	CAUSE
	=====
	
	A Windows NT workstation or server has captured the AppleTalk printer and is
	preventing other computers from accessing the printer.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. On the Windows NT-based computer that can print to the AppleTalk printer,
	  double-click Printers in Control Panel.
	
	2. On the File menu, click Server Properties.
	
	3. Click the Ports tab.
	
	4. Click the AppleTalk port, and then click Properties.
	
	5. Click the Capture This AppleTalk Printing Device check box to clear it.
	
	6. Click OK.
	
	MORE INFORMATION
	================
	
	When you capture an AppleTalk printing device, you create a persistent
	connection to the device that prevents anyone else from connecting to the
	device. Disabling the Capture option tells Windows NT to create the connection,
	send the print job to the printer, and then disconnect.
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WINDOWS NT:3.51,4.0
	
	=============================================================================
	

{% endraw %}

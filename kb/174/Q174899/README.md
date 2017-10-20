---
layout: page
title: "Q174899: Canon BJC-610 Printer May Not Print After Restarting Computer"
permalink: /kb/174/Q174899/
---

## Q174899: Canon BJC-610 Printer May Not Print After Restarting Computer

{% raw %}

	Article: Q174899
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Canon BJC-610 printer and install the updated printer driver for
	Cannon Bubble Jet series printers (Nt4bjc2.exe), you may experience one or more
	of the following symptoms:
	
	- You may be unable to print.
	
	- You are unable to print a test page or document after you restart the
	  computer.
	
	- You are unable to print if you restart the computer and then attempt to print
	  a test page from any program.
	
	- The printer may appear to be printing, but the print job does not print.
	
	- The printed output may be garbled.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one or more of the following methods:
	
	- If the printer is connected to an enhanced capabilities port (ECP) or
	  enhanced parallel port (EPP), enable bi-directional support for the port in
	  the computer's CMOS.
	
	  NOTE: Refer to the computer's documentation or manufacturer before you change
	  the CMOS settings.
	
	
	- Do not turn the printer on until Windows NT is started. If the error light on
	  the printer turns on, put the printer back on-line and then click Retry when
	  you are prompted.
	
	- Remove the printer driver and then reinstall the original driver. For
	  information about how to do so, please see the following article in the
	  Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q135406
	  TITLE : Steps to Manually Remove and Reinstall a Printer Driver
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The printer driver installs normally and the printer appears to function
	properly until you restart the computer, and then print a test page or
	document.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q173007
	TITLE : Updated Cannon Bubble Jet drivers for Windows NT 4.0
	
	To print a test page in Windows NT, follow these steps:
	
	1. Click Start, point to settings, and then click Printers.
	
	2. Right-click the printer you are using, and then click Properties.
	
	3. On the General Tab, click Print Test Page.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}

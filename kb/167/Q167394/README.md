---
layout: page
title: "Q167394: Installed Modem Detected as Serial Mouse on Restart"
permalink: /kb/167/Q167394/
---

## Q167394: Installed Modem Detected as Serial Mouse on Restart

{% raw %}

	Article: Q167394
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the setup of Remote Access Service (RAS) on a Windows NT 4.0 server
	computer, a serial modem is installed and configured. When the server is
	restarted, the modem is detected as Microsoft Serial Mouse and the modem is no
	longer usable by RAS.
	
	CAUSE
	=====
	
	During startup of Windows NT, the NTDETECT program gathers information about the
	hardware installed on the system including pointing devices such as serial mice.
	If a mouse is detected, the system designates that port as a mouse port and does
	not allow it to be used for other purposes, such as a modem. Data is sent to the
	serial ports and the response from the modem is interpreted as the presence of a
	mouse. The system will attempt to load serial mouse software for that com port
	and prevent the use of the port for serial modems.
	
	RESOLUTION
	==========
	
	Edit the boot.ini file and add to the end of the "Operating Systems" lines one
	of the following;
	
	  /NoSerialMice (This disables detection of Serial Mice on all COM ports
	
	-or-
	
	  /NoSerialMice:COMx (This disables detection of Serial Mice on only the
	  COM port specified by x)
	
	For additional information, please see the following Microsoft Knowledge Base
	article:
	
	  ARTICLE-ID: Q131976
	  TITLE : How to Disable Detection of Devices on Serial Ports
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

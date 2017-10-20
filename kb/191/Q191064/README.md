---
layout: page
title: "Q191064: Error Messages When Running TCP/IP-Based Utilities or Programs"
permalink: /kb/191/Q191064/
---

## Q191064: Error Messages When Running TCP/IP-Based Utilities or Programs

{% raw %}

	Article: Q191064
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience the following symptoms when you attempt to use a Transmission
	Control Protocol/Internet Protocol-based (TCP/IP-based) utility or program:
	
	- When you attempt to use the Winipcfg utility, you receive the following error
	  message:
	
	  Fatal Error! Cannot read IP configuration.
	
	  NOTE: You will receive this error message if you do not currently have a
	  network client installed.
	
	- When you attempt to ping a Web site name or TCP/IP address using the Ping
	  utility, you receive either of the following error messages:
	
	      - Bad IP address <Web address>
	
	      - PING: transmit failed, error code 10091
	
	- When you attempt to load a Web page using Internet Explorer, you receive the
	  following error message:
	
	  Internet Explorer cannot open the Internet site <Web address>. A
	  connection with the server could not be established.
	
	- When you try to uninstall Microsoft Personal Web Server 4.0, you receive the
	  following error message:
	
	  WINSOCK2 is required to run this setup utility. Please click OK to exit
	  setup.
	
	CAUSE
	=====
	
	This behavior can occur if you attempt to uninstall the Winsock 2.0 update for
	Windows 95, but it is not uninstalled completely.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following commands, pressing ENTER after each
	  command
	
	  cd\<windows>\ws2bakup
	  ws2bakup.bat
	  exit
	
	  where <windows> is the folder in which Windows is installed.
	
	  NOTE: If you are prompted to abort, retry, or fail the operation, press A.
	  This causes the Ws2bakup.bat to continue restoring up all the necessary
	  files.
	
	  NOTE: If you receive sharing violation error messages when you run the
	  Ws2bakup.bat file, continue with step 3.
	
	3. Click Start, click Shut Down, click "Restart in MS-DOS mode," and then click
	  OK.
	
	4. Repeat step 2.
	
	  NOTE: If you receive error messages when you run the Ws2bakup.bat file stating
	  that some programs cannot be run outside of Windows 95, disregard them.
	
	MORE INFORMATION
	================
	
	For more information about the Winsock 2.0 update for Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	Additional query words: wsock
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

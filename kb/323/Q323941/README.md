---
layout: page
title: "Q323941: Zoo Tycoon Err Msg: Cannot Locate File Ws2_32.dll or Ws2help.dll"
permalink: /kb/323/Q323941/
---

## Q323941: Zoo Tycoon Err Msg: Cannot Locate File Ws2_32.dll or Ws2help.dll

{% raw %}

	Article: Q323941
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zoo Tycoon, used with:
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install or start Microsoft Zoo Tycoon, you may receive one of
	the following error messages:
	
	  Cannot locate file WS2_32.dll or WS2HELP.dll.
	
	  -or-
	
	  A required .DLL file, WS2_32.DLL was not found.
	
	CAUSE
	=====
	
	This problem can occur if the following files are missing from the
	Windows\System folder on the hard disk:
	
	  Ws2_32.dll
	  Ws2help.dll
	
	RESOLUTION
	==========
	
	To resolve this problem, install Dial-Up Networking and Transmission Control
	Protocol/Internet Protocol (TCP/IP) (if they are not already installed), and
	then install the Winsock 2.0 update. To do so, follow these steps.
	
	Part 1: Install Dial-Up Networking:
	
	1. Insert the Microsoft Windows 95 CD-ROM into the CD-ROM or DVD-ROM drive.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs, and then click the Windows Setup tab.
	
	4. Click Communications (but do not click to clear the check box), and then
	  click Details.
	
	5. Click to select the Dial-Up Networking check box, click OK, and then click
	  OK.
	
	6. When you are prompted, type the computer and workgroup names in the
	  appropriate boxes on the Identification tab, and then click Close.
	
	Part 2: Install TCP/IP:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network, and then click the Configuration tab.
	
	3. Click Add, click Protocol, and then click Add.
	
	4. Under Manufacturers, click Microsoft, click TCP/IP in the right pane under
	  Network Protocols, and then click OK.
	
	5. Click OK, and then click Yes when you are prompted to restart the computer.
	
	Part 3: Install the Winsock 2.0 Update:
	
	1. Remove the Windows 95 CD-ROM from the CD-ROM or DVD-ROM drive, and insert the
	  Zoo Tycoon CD-ROM.
	
	2. Start Windows Explorer, and then locate the Ws2setup.exe file on the root of
	  the Zoo Tycoon CD-ROM.
	
	3. Double-click Ws2setup.exe.
	
	4. Click OK when you receive the message that Winsock 2.0 is successfully
	  installed, and then restart the computer.
	
	MORE INFORMATION
	================
	
	For more information about Zoo Tycoon, visit the following Microsoft Web site:
	
	  Microsoft Game Studios - Zoo Tycoon
	  http://www.microsoft.com/games/pc/zootycoon.asp
	  (http://www.microsoft.com/games/pc/zootycoon.asp)
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbGamesSearch kbZooTycoon
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

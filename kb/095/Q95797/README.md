---
layout: page
title: "Q95797: RAS and TCPIP_HUB Conflict on One Server"
permalink: kb/095/Q95797/
---

## Q95797: RAS and TCPIP_HUB Conflict on One Server

	Article: Q95797
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	You may encounter problems if you run the Remote Access Service (RAS) and the
	TCPIP_HUB service simultaneously on one LAN Manager Server. The TCPIP_HUB
	service should start without any problems, but RAS fails with this error:
	
	  NET3055: A problem exists with the system configuration: The system is not
	  configured correctly.
	
	  The LAN Manager Error Log reports these errors:
	
	  3299 RAS0733. RAS was Unable to bind COM1 to ASYBEUI.
	  3299 RAS0731. RAS did not start because it was unable to open any COM ports.
	
	Note: Some customers have reported that this combination of services can cause a
	trap error.
	
	CAUSE
	=====
	
	The cause of this problem has not been completely identified. The redirector may
	not be allocating an additional LANA structure for one of the net x lines in the
	LANMAN.INI file.
	
	WORKAROUND
	==========
	
	1. Open the C:\LANMAN\LANMAN.INI file in a text editor (for example, Notepad).
	
	2. Remove the TCPIP_HUB and REMOTEACCESS parameters from the SRVSERVICES line.
	
	3. Open the C:\STARTUP.CMD file in a text editor (for example, Notepad).
	
	4. After the NET START SERVER line, add these two lines in this order:
	
	        net start remoteaccess
	        net start tcpip_hub
	
	Additional query words: 2.20 2.2 2.10a 2.1a lanman tcp ip hub ras tcp/ip
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

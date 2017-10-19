---
layout: page
title: "Q178687: WINS Resolution Is Automatically Disabled"
permalink: /kb/178/Q178687/
---

## Q178687: WINS Resolution Is Automatically Disabled

	Article: Q178687
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr2
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable Windows Internet Name Service (WINS) resolution in the TCP/IP
	Properties dialog box, WINS resolution may be automatically disabled when you
	restart your computer.
	
	CAUSE
	=====
	
	This issue can occur if you specify a Transmission Control Protocol/Internet
	Protocol (TCP/IP) address in the Primary WINS Server box, but not in the
	Secondary WINS Server box.
	
	RESOLUTION
	==========
	
	If your network has only one WINS server, you must specify its TCP/IP address in
	both the Primary WINS Server and Secondary WINS Server boxes. To do so, follow
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, click TCP/IP in the list of installed network
	  components, and then click Properties.
	
	4. On the WINS Configuration tab, click Enable WINS Resolution.
	
	5. Type the WINS server's TCP/IP address in both the Primary WINS Server and
	  Secondary WINS Server boxes.
	
	6. Click OK, click OK again, and then restart your computer when you are
	  prompted to do so.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	WINS servers maintain a database that maps TCP/IP addresses to network basic
	input/output system (NetBIOS) names (also known as computer names). A network
	can have several WINS servers that WINS clients can contact when they need to
	resolve a TCP/IP address to a NetBIOS name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr2 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

---
layout: page
title: "Q159203: PRB: Unattended Install Prompts for New IP if Zero Is in Address"
permalink: /kb/159/Q159203/
---

## Q159203: PRB: Unattended Install Prompts for New IP if Zero Is in Address

{% raw %}

	Article: Q159203
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbOPK kbSBK
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you do an unattended setup with the following section:
	
	     DetectAdapters = ""
	     InstallProtocols = SelectedProtocolsList
	     JoinWorkGroup = WORKGROUP
	
	     [SelectedProtocolsList]
	
	     TC = TCPIPParameters
	
	     [TCPIPParameters]
	
	     DHCP = NO
	     IPAddress = 126.0.10.132
	     Subnet = 255.0.0.0
	
	You get a dialog box with the following message:
	
	  The IPAddress key has an invalid IP address. Please correct the problem after
	  the property sheet is displayed.
	
	The property sheet will then be displayed with the IP address entered. Click OK,
	and the IP address is now accepted. This message only occurs when a zero is the
	second or third octet.
	
	RESOLUTION
	==========
	
	This problem has been fixed in the Tcpcfg.dll file contained in Windows NT 4.0
	Service Pack 2.0 and later service packs.
	
	To work around this issue:
	
	1. Rename the Tcpcfg.dl_ file to Tcpcfg.org on the distribution server.
	
	2. Copy the Tcpcfg.dll file from the latest service pack onto the distribution
	  server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt SBK OPK Install
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

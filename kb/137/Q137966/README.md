---
layout: page
title: "Q137966: Changing NetBIOS Name Resolution Order in Windows for Workgroups"
permalink: kb/137/Q137966/
---

## Q137966: Changing NetBIOS Name Resolution Order in Windows for Workgroups

	Article: Q137966
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32, version 1.0 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the NetBIOS name resolution mode used by NetBIOS over TCP/IP is
	B-node mode. If a WINS server is specified in the TCP/IP configuration, the
	default mode is H-node.
	
	MORE INFORMATION
	================
	
	In Windows for Workgroup running TCP/IP-32, these default settings can be
	modified to change to NetBIOS name resolution mode to B-node, P-node, M-node, or
	H-node.
	
	To change the NetBIOS name resolution order:
	
	1. Open the SYSTEM.INI file with a text editor.
	
	2. In the [NBT] section, add the following entry:
	
	  NodeType = 1, 2, 4, or 8
	
	  These values specify the mode of NetBIOS name resolution used by NetBIOS over
	  TCP/IP, where:
	
	  1 = b-node
	
	  2 = p-node
	
	  4 = m-node
	
	  8 = h-node.
	
	  NOTE: This value can also be configured via DHCP Manager on the DHCP server.
	  Under DHCP Options, select Scope or Global. The default is 1 (b- node). If no
	  value is specified and a WINS server is specified and its NodeType is blank,
	  then the default is 8 (h-node). On the Windows for Workgroups client
	  configure it to use DHCP under Control Panel, Network, highlight TCP/IP
	  Protocol in the Installed Network Software windows and select Configure.
	  Enter an X in the Enable Automatic DHCP Configuration box by clicking on it.
	  Click on OK and reboot the Windows for Workgroup client.
	
	3. Save your changes and restart Windows.
	
	NOTE: For more details on node type implementation refer to TCP/IP-32 online
	help.
	
	Additional query words: prodtcp 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbTCPIP100
	Version           : :1.0
	
	=============================================================================
	

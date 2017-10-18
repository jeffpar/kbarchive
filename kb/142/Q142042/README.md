---
layout: page
title: "Q142042: Description of TCP/IP Node-Type Settings in Windows 95/98"
permalink: kb/142/Q142042/
---

## Q142042: Description of TCP/IP Node-Type Settings in Windows 95/98

	Article: Q142042
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes the TCP/IP node-type settings in Windows.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The four TCP/IP node types are defined by number in Windows:
	
	  1 - bnode (broadcast only)
	  2 - pnode (WINS only)
	  4 - mnode (broadcast, then WINS)
	  8 - hnode (WINS, then broadcast)
	
	The default Windows TCP/IP node types are:
	
	  If DHCP=False, and WINS is disabled, then NodeType=1 (bnode)
	  If DHCP=False, and WINS is manually set, then NodeType=8 (hnode)
	  If DHCP=True, and DHCP sets WINS, then NodeType=8 (hnode)
	  If DHCP=True, and WINS is manually set, then NodeType=8 (hnode)
	  If DHCP=True, and WINS is disabled, then NodeType=1 (bnode)
	
	NOTE: If WINS server options are provided via DHCP then Node Type should be set
	using DHCP option 46; however, locally defining a WINS server on the client will
	override these two options, as locally defined WINS servers automatically set
	your node type to H-Node.
	
	The node type can be manually changed by editing the Windows registry. The
	location is under the HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	  SYSTEM\CURRENTCONTROLSET\SERVICES\VXD\MSTCP\NodeType
	
	The four values listed above (1, 2, 4, 8) are valid values for NodeType.
	
	NOTE: NodeType can be added as a String value under MSTCP if it does not already
	exist.
	
	For more information, please see the Windows 95 or the Windows 98 Resource Kit.
	
	Additional query words: win95
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	
	=============================================================================
	

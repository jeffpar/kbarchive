---
layout: page
title: "Q148693: IPX RAS Clients Unable To View or Access NetBIOS Resources"
permalink: kb/148/Q148693/
---

## Q148693: IPX RAS Clients Unable To View or Access NetBIOS Resources

	Article: Q148693
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Windows NT 3.5X Remote Access Server (RAS) using your RAS
	client software, which is configured to use only the IPX/SPX Compatible
	Transport (NWLINK) protocol, NetBIOS resources such as computer names, network
	shares or printers from Server Message Block (SMB) based clients are not
	viewable.
	
	When you use Net View \\<servername>, the following error message appears:
	
	  System error 53 has occurred.
	  The network path was not found.
	
	RESOLUTION
	==========
	
	By default, the RAS server is only configured to forward NetBIOS broadcast over
	IPX from the RAS client to the LAN, but not from the LAN to the client. To do
	this, you must enable two-way broadcasting of type 20 (14h) packets (NetBIOS
	over IPX).
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\NWlnkRip\Parameters
	
	2. Select the following value: NetBiosRouting
	
	3. From the Edit menu, select DWORD.
	
	4. Change the data from 2 to 6.
	
	  The following lists the data values you can use for NetBiosRouting:
	
	  0 = Do not forward broadcasts(default-in order to reduce network
	      traffic).
	
	  2 = Enables forwarding of NetBIOS packets from remote client to the
	      LAN.
	
	  4 = Enables forwarding of NetBIOS packets from the LAN to the remote
	      client.
	
	  6 = Enables two-way forwarding of NetBIOS packets between remote
	      clients and LAN.
	
	5. Click OK and quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	NOTE: Forwarding type 14h packets significantly increases network and RAS
	traffic. It is efficient to enable the NetBEUI protocol over the RAS connection
	rather than enabling two-way broadcasting of type 20 (14h) packets.
	
	Additional query words: prodnt 4.0
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.00
	
	=============================================================================
	

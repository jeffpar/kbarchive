---
layout: page
title: "Q142489: Problems After Modifying Maximum Connections or Sockets Value"
permalink: /kb/142/Q142489/
---

## Q142489: Problems After Modifying Maximum Connections or Sockets Value

{% raw %}

	Article: Q142489
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks, you may experience
	one or more of the following symptoms:
	
	- You receive the following error message:
	
	  Error loading protocol 0, error 254
	
	- You are not prompted to log on to your preferred NetWare server when you
	  start Windows 95.
	
	- You are unable to connect to NetWare servers.
	
	- You are unable to print to NetWare printers, causing the printers to go
	  offline.
	
	- You are unable to log on to NetWare servers using Dial-Up Networking.
	
	CAUSE
	=====
	
	These problems can occur when you choose to specify a value for Maximum
	Connections or Maximum Sockets on the Advanced tab in the IPX/SPX- Compatible
	Protocol Properties dialog box. If you specify a value that is lower than the
	normal default value, the problems described above may occur.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To work around this problem, configure Windows 95 so that the default values for
	Maximum Connections and Maximum Sockets are used, or modify the values that you
	specified so that they are equal to or greater than the default values. To
	configure Windows 95 so that the default values for Maximum Connections or
	Maximum Sockets are used, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click IPX/SPX-Compatible Protocol, and then click Properties.
	
	3. Click the Advanced tab.
	
	4. Click Maximum Connections in the Property box, and then click Not Present.
	
	5. Click Maximum Sockets in the Property box, and then click Not Present.
	
	6. Click OK.
	
	7. Use Registry Editor to remove the Maxconnect and Maxsockets values in the
	  following registry key:
	
	     Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Nwlink
	
	To modify the Maximum Connections and Maximum Sockets values so that they are
	equal to or greater than the default values, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click IPX/SPX-Compatible Protocol, and then click Properties.
	
	3. Click the Advanced tab.
	
	4. Click Maximum Connections in the Property box, click Value, and then type a
	  value of at least 16 in the Value box.
	
	5. Click Maximum Sockets in the Property box, click Value, and then type a value
	  of at least 32 in the Value box.
	
	6. Click OK.
	
	MORE INFORMATION
	================
	
	If you do not specify Maximum Connections and Maximum Sockets values, Windows 95
	uses the default values of 16 for Maximum Connections and 32 for Maximum
	Sockets. When you click Maximum Connections or Maximum Sockets in the Property
	box and then click the Value option button, the default values that appear in
	the Value box are 1 for Maximum Connections and 2 for Maximum Sockets. If you do
	not modify these values so that they are greater than or equal to the default
	values, the problems described in this article may occur.
	
	For information about other problems that may prevent the NetWare logon dialog
	box from appearing when you start Windows 95, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q141858 No Windows or Network Logon Dialog Box at Startup
	
	Note that the resolution listed in this article also corrects the "Error loading
	protocol 0, error 254" error message that can occur when you are using the
	Microsoft Client for Microsoft Networks.
	
	
	Additional query words: client32 uninstall
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}

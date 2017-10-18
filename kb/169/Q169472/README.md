---
layout: page
title: "Q169472: File and Printer Sharing for Microsoft Networks Is Unavailable"
permalink: kb/169/Q169472/
---

## Q169472: File and Printer Sharing for Microsoft Networks Is Unavailable

	Article: Q169472
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbnetwork 3rdpartynet msnets kb3rdPartyNetClient
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
	
	When you use the right mouse button to click a drive, folder, or printer, there
	may be no Sharing command on the menu that appears even though the "File and
	printer sharing for Microsoft Networks" component is installed in Network
	properties.
	
	CAUSE
	=====
	
	The Nwserver.vxd file may be loading even though the "File and printer sharing
	for NetWare Networks" component is not installed in Network properties.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	Method 1
	--------
	
	If the Microsoft Client for NetWare Networks is installed on your computer and
	you do not connect to a NetWare server, remove the client from Network
	properties. To remove the Microsoft Client for NetWare Networks, follow these
	steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click Client For NetWare Networks.
	
	3. Click Remove, and then click OK.
	
	4. Restart your computer when you are prompted to do so.
	
	Method 2
	--------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	If sharing is still not available, determine if the Nwserver.vxd file is loading
	by following these steps:
	
	1. Click the Start button, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type:
	
	  " nwserver.vxd " (without the quotation marks)
	
	3. Click Find Now.
	
	4. If the file is found, use the right mouse button to click the Nwserver.vxd
	  file, and then click Rename on the menu that appears.
	
	5. Rename the file to Nwserver.xxx, and then press ENTER.
	
	6. Shut down and restart your computer. If you receive the following error
	  message when you computer starts, the Nwserver.vxd file is being called from
	  the registry:
	
	  Cannot find a device necessary to run Windows. Nwserver.vxd
	
	  If you receive this error message, sharing should now be available.
	
	7. To remove the reference to Nwserver.vxd in the registry, use Registry Editor
	  to delete the StaticVxD value in the NWServer subkey under the following
	  registry entry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\NWServer
	
	MORE INFORMATION
	================
	
	The Nwserver.vxd file provides file and printer sharing for NetWare networks in
	Windows 95; the Vserver.vxd file provides file and printer sharing for Microsoft
	networks. These two components cannot function simultaneously in Windows 95.
	
	Additional query words: cannot share installed
	
	======================================================================
	Keywords          : kbenv kbnetwork 3rdpartynet msnets kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

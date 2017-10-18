---
layout: page
title: "Q140010: Microsoft Plus! Setup Inadvertently Installs NetWare Client"
permalink: kb/140/Q140010/
---

## Q140010: Microsoft Plus! Setup Inadvertently Installs NetWare Client

	Article: Q140010
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer after installing Microsoft Plus!, you may receive
	various error messages indicating that certain Novell NetWare files cannot be
	loaded. These error messages may include:
	
	- Cannot find a device necessary to run Windows.
	
	- Unable to load the dynamic link library Nwnp32.dll.
	
	- The system cannot find the file specified.
	
	- Some or all of the following feature is not available: NetWare.
	
	Various files that cannot be loaded are listed. This list of files may include
	all or most of the following files:
	
	- Vnetsup.Vxd
	
	- Nwlink.vxd
	
	- Nwredir.vxd
	
	- Nscl.vxd
	
	- Vredir.vxd
	
	- Nwnp32.dll
	
	- Ndis.vxd
	
	- Ndis2sup.vxd
	
	- Vnetbios.vxd
	
	CAUSE
	=====
	
	This problem can occur if you do not have the Windows 95 CD-ROM, or you do not
	enter the correct path to it, when Microsoft Plus! Setup prompts you for it.
	When this occurs, the virtual device drivers (VxDs) may be registered even
	though the files are not copied.
	
	RESOLUTION
	==========
	
	Add and then remove the Microsoft Client for NetWare Networks to resolve this
	problem. To do so, follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click Add, click Client, and then click Add.
	
	3. In the Manufacturers box, click Microsoft. In the Network Clients box, click
	  Client For NetWare Networks, and then click OK.
	
	4. Click OK.
	
	5. Restart your computer.
	
	6. In Control Panel, double-click the Network icon.
	
	7. Click Client For NetWare Networks, and then click Remove.
	
	8. Click OK.
	
	9. Restart your computer.
	
	The above steps should resolve the problem. If the error messages persist, remove
	all the components in Network properties, and then reinstall them. To do so,
	follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Note the installed components so you can reinstall them.
	
	3. If necessary, note items such as Dial-Up Networking phone numbers and TCP/IP
	  settings.
	
	4. Remove all the components by clicking each component and clicking Remove.
	
	5. Restart your computer.
	
	6. Reinstall the network components. If you add a network adapter, the NetWare
	  client will be added by default. You can remove the client if there is no
	  NetWare network.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

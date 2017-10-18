---
layout: page
title: "Q82724: Maintenance Mode Setup of Windows 3.1 and Networks"
permalink: kb/082/Q82724/
---

## Q82724: Maintenance Mode Setup of Windows 3.1 and Networks

	Article: Q82724
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Microsoft Windows operating system version 3.1, the Setup program can be
	used to change the configuration of the network after Windows has been
	installed.
	
	MORE INFORMATION
	================
	
	There are several limitations in the Windows version of maintenance mode Setup.
	In general, Setup should be run from the command prompt outside of Windows when
	modifying the network configuration.
	
	Although Setup can add entries to the LOAD= line in the WIN.INI file, it cannot
	remove them. Therefore, when changing from a network that puts a utility on the
	LOAD= line in the WIN.INI file to a network that provides different network
	utilities, the first utility installed will continue loading, probably causing
	an error message. An example is NWPOPUP.EXE in Novell NetWare.
	
	When changing networks, you should remove network utilities from the LOAD= line
	in the WIN.INI file.
	
	Some networks have Windows components that do not ship with Windows. If these
	components are found in the network directory during Setup, Setup will configure
	Windows to use them; otherwise, Setup will use a default installation and notify
	you of the missing software.
	
	Because the descriptions for these network versions are the same, Setup will not
	automatically reconfigure Windows to use the components if they are later copied
	to the machine. To correctly reconfigure Windows to use the added network
	components, you must run maintenance mode Setup twice; once to set the network
	to "No Network Installed," and once to set it back to the original network
	version. Note that maintenance mode Setup does not perform detection. You must
	know which network entry to select.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

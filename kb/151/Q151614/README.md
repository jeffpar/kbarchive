---
layout: page
title: "Q151614: Differences in Dhcpcmd.exe in WinNT 3.5, 3.51, and 4.0"
permalink: kb/151/Q151614/
---

## Q151614: Differences in Dhcpcmd.exe in WinNT 3.5, 3.51, and 4.0

	Article: Q151614
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the differences between the Windows NT 3.5, 3.51 and 4.0
	versions of the Windows NT Resource Kit utility Dhcpcmd.exe. This utility
	generates DHCP information and is useful to network administrators who are
	responsible for managing DHCP servers.
	
	MORE INFORMATION
	================
	
	Dhcpcmd.exe can be used as an auxiliary tool to administer DHCP servers.
	
	The command line syntax is:
	
	  dhcpcmd  <server ip address>  <command>  [<command parameters>].
	
	For more information on the DHCPCMD command-line parameters, see the Dhcpcmd.txt
	file in the directory where the Windows NT Resource Kit was installed.
	
	There are 14 commands available with the Dhcpcmd.exe found on the Windows NT
	Resource Kit 3.5 (dated 4/12/95).
	
	Dhcpcmd.exe commands:
	
	  0. CreateSubnet
	  1. AddIpRange
	  2. AddReservedIp
	  3. AddExcludeRange
	  4. RemoveReservedIp
	  5. RemoveExcludeRange
	  6. SetSubnetState
	  7. DeleteSubnet
	  8. CreateOption
	  9. SetGlobalOptionValue
	 10. SetSubnetOptionValue
	 11. SetReservedOptionValue
	 12. EnumClients
	 13. MibCounts
	
	There are only 6 commands available with Dhcpcmd.exe on the Windows NT Resource
	Kit 3.51 (dated 8/24/95) and the Windows NT Resource Kit 4.0 (dated 3/1/96).
	
	Dhcpcmd.exe on Resource Kit 3.51 and 4.0 commands:
	
	  0. AddIpRange
	  1. AddReservedIp
	  2. EnumClients
	  3. MibCounts
	  4. ServerConfig
	  5. GetVersion
	
	
	Additional query words: prodnt ntreskit
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

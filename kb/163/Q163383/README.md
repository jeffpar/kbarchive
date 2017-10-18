---
layout: page
title: "Q163383: Failure to Obtain IP Address Via DHCP on Token Ring w/ SP2"
permalink: kb/163/Q163383/
---

## Q163383: Failure to Obtain IP Address Via DHCP on Token Ring w/ SP2

	Article: Q163383
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT version 4.0, with Service Pack 2 applied, in a source
	routed Token Ring environment and configured as a DHCP client, you may receive
	the following message when you start:
	
	  The DHCP client could not obtain an IP address.
	
	  If you want to see DHCP messages in the future, choose YES, otherwise choose
	  NO.
	
	Event ID 1003 may be logged in the System.log file, and visible in Event Viewer
	with the following detail:
	
	  DHCP failed to obtain a lease for the card with network address <12-digit
	  hexadecimal media access control address of the local network adapter>.
	  The following error occurred: The semaphore timeout period had expired.
	
	CAUSE
	=====
	
	This problem was caused by the way that Tcpip.sys read the registry value that
	indicates that source routing should be used.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To change this value in the Registry on the client, perform the following steps:
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the Registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	  Tcpip\Parameters
	
	3. Change the ArpAlwaysSourceRoute value to 1. If this value is not present,
	  click on Edit, Add Value, and enter the following settings:
	
	  Value Type: REG_DWORD - Boolean
	  Valid Range: 0,1 (False or True)
	  Default: 0 (False)
	
	4. Restart the computer for the change to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt dhcp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

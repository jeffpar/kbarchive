---
layout: page
title: "Q151399: Using DHCP with FTP Software's OnNet for Windows"
permalink: /kb/151/Q151399/
---

## Q151399: Using DHCP with FTP Software's OnNet for Windows

	Article: Q151399
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.1,3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use DHCP server to assign reserved addresses to FTP Software's
	DHCP-enabled client OnNet for Windows or PCTCP for DOS, if you type the client's
	media access control address as the "Unique Identifier" in DHCPADMIN, the client
	will not get the reserved address, but rather, it will be assigned the next
	available address in the scope.
	
	MORE INFORMATION
	================
	
	FTP Software's DHCP client does not, by default pass its media access control
	address to the DHCP server when it request an address. Instead, it passes what
	FTP Software calls a Client ID. Under their Advance Configuration Options, you
	can assign a unique Client ID. You can then change network interface cards
	(NICs) without updating your reservation. If you do not assign a Client ID, one
	with be generated. It will look similar to the following:
	
	  69642d303041413030333745303238
	
	To find out the Client ID, let the Client register without a DHCP reservation,
	and then check the properties of the active least. You can then cut and paste
	that value into the Unique Identifier field under Add Reservation.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: TCP/IP
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW311
	Version           : WINDOWS:3.1,3.11; winnt:3.5,3.51
	
	=============================================================================
	

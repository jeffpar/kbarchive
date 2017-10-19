---
layout: page
title: "Q138925: Requesting an IP Address with NT RAS or Win95 Dial Up Networking"
permalink: /kb/138/Q138925/
---

## Q138925: Requesting an IP Address with NT RAS or Win95 Dial Up Networking

	Article: Q138925
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A pre-determined IP address can be requested from a PPP server when using
	Windows 95 or Windows NT to connect through dial up networking or RAS. The IP
	address can be accepted or declined by the PPP server. Windows NT displays a
	
	  request denied
	
	message and drops the connection if the address is denied by the PPP server while
	Windows 95 does not. Windows 95 will connect normally with no error or status
	messages.
	
	MORE INFORMATION
	================
	
	Windows NT will terminate the connection if the requested address is not
	accepted by the PPP server. This is by design. If a Windows 95 client is denied
	the requested IP address, it queries the PPP server for a server assigned
	address. If an address is available for assignment from the PPP server, Windows
	95 accepts the address and continues the connection normally. To verify this,
	run Winipcfg from a command prompt after the connection is established and check
	the address of the RAS connection to see if it is the address that was
	requested.
	
	Use one of the following steps to resolve this problem:
	
	- Have the Administrator of the PPP server (or the Internet Service Provider)
	  verify the settings for your requested address.
	
	- Edit the RAS or dial-up networking TCP/IP configuration and choose Server
	  Assigned IP Address. This is the default setting in both Windows 95 and
	  Windows NT.
	
	Additional query words: prodnt refused failed require reserve
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51
	
	=============================================================================
	

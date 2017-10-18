---
layout: page
title: "Q153713: Changing the WINS Refresh Interval for WFW Clients"
permalink: kb/153/Q153713/
---

## Q153713: Changing the WINS Refresh Interval for WFW Clients

	Article: Q153713
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51,4.0; :3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, a client computer running Windows for Workgroups using the Microsoft
	TCP/IP-32 protocol refreshes its name with the Windows Internet Name Service
	(WINS) server every 16 minutes.
	
	This behavior is different from the behavior of client computers running WINS on
	Windows NT Workstation, which refresh initially at one-eighth and subsequently
	at one-half of the WINS Renewal Interval (as defined on the WINS server).
	
	MORE INFORMATION
	================
	
	To change the interval at which a client computer running Windows for Workgroups
	TCP/IP-32 refreshes its WINS registration, perform the following steps:
	
	1. Open the System.ini file in a text editor such as Notepad.
	
	2. In the [NBT] section of the System.ini file, add the following entry:
	
	  " InitialRefreshT.O.="X" " (without the quotation marks)
	
	  Where "X" is the WINS refresh interval in milliseconds. The minimum (and
	  default) setting is InitialRefreshT.O.=960000 (16*60*100=960000, or 16
	  minutes) and the maximum is 4294967295, or about 50 days.
	
	The default refresh interval of 16 minutes may cause unwanted network traffic on
	networks using dial-up routers.
	
	For additional TCP/IP settings, see the TCP/IP-32 Help file, Mtcpip32.hlp.
	
	Additional query words: 3.11 prodnt prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : winnt:3.5,3.51,4.0; :3.11,3.11a,3.11b
	
	=============================================================================
	

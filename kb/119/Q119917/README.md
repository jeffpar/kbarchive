---
layout: page
title: "Q119917: Location of DHCP Information on Local Clients"
permalink: /kb/119/Q119917/
---

## Q119917: Location of DHCP Information on Local Clients

{% raw %}

	Article: Q119917
	Product(s): Microsoft Windows NT
	Version(s): 2.2c,2000,3.0,3.5,3.51,4.0,95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	- Microsoft Windows 95 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Windows NT Server version 3.5 supports the following Dynamic Host
	Configuration Protocol (DHCP) clients:
	
	- Windows 2000 Professional
	
	- Windows 2000 Server
	
	- Windows 2000 Advanced Server
	
	- Windows NT Server versions 3.5, 3.51, and 4.0
	
	- Windows NT Workstation versions 3.5, 3.51, and 4.0
	
	- Microsoft Windows for Workgroups with TCP/IP-32
	
	- Microsoft MSNETWORK client version 3.0
	
	- Microsoft LAN Manager client for MS-DOS version 2.2c
	
	- Microsoft Windows 95
	
	These clients use different methods to store the DHCP-related information on the
	local system so that when the client system boots, it can attempt to lease the
	same IP address again. Another advantage of using local storage is that when a
	DHCP server is down, a client with a valid lease can still use its allocated IP
	address.
	
	MORE INFORMATION
	================
	
	Following is information on where to find DHCP information in the various local
	clients:
	
	Windows 2000
	------------
	
	Windows 2000 stores the local DHCP-related information in the Registry.
	
	\HKEY_LOCAL_MACHINE
	
	       \SYSTEM
	            \CurrentControlSet
	                 \Services
	                      \TCPIP
	                           \Parameters
	                                \Interfaces
	                                     \<Network Adapter>
	
	Windows NT 3.5, 3.51, and 4.0
	-----------------------------
	
	Windows NT Workstation and Windows NT Server version 3.5 store the local
	DHCP-related information in the Registry.
	
	  \HKEY_LOCAL_MACHINE
	
	       \SYSTEM
	            \CurrentControlSet
	                 \Services
	                      \<Network Adapter>
	                           \Parameters
	                                \Tcpip
	
	Windows 95
	----------
	
	Windows 95 stores the local DHCP-related information in the Registry.
	
	  \HKEY_LOCAL_MACHINE
	
	       \SYSTEM
	            \CurrentControlSet
	                 \Services
	                      \VxD
	                           \DHCP
	                                \DhcpInfo00
	
	LAN Manager 3.0 and MS-DOS LAN Manager 2.2c
	-------------------------------------------
	
	LAN Manager version 3.0 and LAN Manager for MS-DOS version 2.2c clients both
	store the local DHCP-related information in the Dhcp.prm file in the
	<NETWORK_ROOT> folder. This file is in a binary format.
	
	NOTE: The LAN Manager for OS/2 client does not support DHCP or WINS.
	
	TCP/IP-32
	---------
	
	Windows for Workgroups with TCP/IP-32 stores the DHCP-related information in the
	Dhcp.bin file under the <WINDOWS_SYSTEM_ROOT> subfolder. This file is in
	binary format.
	
	Additional query words: prodtcp32 wfw wfwg prodnt wins
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbZNotKeyword kbTCPIPSearch kbLanManSearch kbWinAdvServSearch kbZNotKeyword3 kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : :2.2c,2000,3.0,3.5,3.51,4.0,95
	
	=============================================================================
	

{% endraw %}

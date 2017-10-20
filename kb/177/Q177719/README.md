---
layout: page
title: "Q177719: How to Identify Winsock 2.0 Run-Time Components for Windows 95"
permalink: /kb/177/Q177719/
---

## Q177719: How to Identify Winsock 2.0 Run-Time Components for Windows 95

{% raw %}

	Article: Q177719
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has released the Microsoft Windows Sockets 2 (Winsock 2.0) run-time
	components for Windows 95. This article describes how to determine if the
	Winsock 2.0 run-time components are installed on a Windows 95-based computer.
	
	MORE INFORMATION
	================
	
	How to Determine If the Winsock 2.0 Run-Time Components Are Installed
	---------------------------------------------------------------------
	
	To determine if the Winsock 2.0 run-time components are installed on a Windows
	95-based computer, verify that the following files and registry keys exist.
	
	The Winsock 2.0 update for Windows 95 installs the following files on your
	computer:
	
	  Arp      exe        20,768  02-06-98  1:00p
	  Delw2reg exe         8,016  02-06-98  1:00p
	  Ftp      exe        36,400  02-06-98  1:00p
	  Nbtstat  exe        34,069  02-06-98  1:00p
	  Netstat  exe        24,944  02-06-98  1:00p
	  Ping     exe        15,328  02-06-98  1:00p
	  Route    exe        27,664  02-06-98  1:00p
	  Setup    exe        25,088  02-06-98  1:00p
	  Snmp     exe        18,704  02-06-98  1:00p
	  Telnet   exe        74,720  02-06-98  1:00p
	  Tracert  exe        11,696  02-06-98  1:00p
	  Winipcfg exe        39,424  02-06-98  1:00p
	  Wsasrv   exe         7,040  02-06-98  1:00p
	  Cfgmgr32 dll        23,552  02-06-98  1:00p
	  Icmp     dll         9,632  02-06-98  1:00p
	  Inetmib1 dll        53,584  02-06-98  1:00p
	  Msafd    dll        27,648  02-06-98  1:00p
	  Mstcp    dll        31,872  02-06-98  1:00p
	  Msvcrt   dll       295,360  02-06-98  1:00p
	  Mswsock  dll        70,144  02-06-98  1:00p
	  Mswsosp  dll        24,064  02-06-98  1:00p
	  Rnr20    dll        42,496  02-06-98  1:00p
	  Setupapi dll       327,072  02-06-98  1:00p
	  Snmpapi  dll        22,080  02-06-98  1:00p
	  Winsock  dll        21,520  02-06-98  1:00p
	  Ws2help  dll         5,120  02-06-98  1:00p
	  Ws2thk   dll         8,704  02-06-98  1:00p
	  Ws2_32   dlx        55,808  02-06-98  1:00p
	  Wsock32  dlx        21,504  02-06-98  1:00p
	  Telnet   hlp        11,436  02-06-98  1:00p
	  Afvxd    vxd        29,567  02-06-98  1:00p
	  Ndis     vxd       116,301  02-06-98  1:00p
	  Vdhcp    386        55,155  02-06-98  1:00p
	  Vip      386        75,873  02-06-98  1:00p
	  Vnbt     386        87,745  02-06-98  1:00p
	  Vtcp     386        60,245  02-06-98  1:00p
	  Vtdi     386         5,711  02-06-98  1:00p
	  Vudp     386        20,637  02-06-98  1:00p
	  Wshtcp   vxd         9,937  02-06-98  1:00p
	  Wsipx    vxd        14,546  02-06-98  1:00p
	  Wsock    vxd        15,547  02-06-98  1:00p
	  Wsock2   vxd        23,203  02-06-98  1:00p
	
	The Winsock 2.0 update for Windows 95 installs the following registry keys and
	subkeys under the HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services registry
	branch:
	
	  VxD\Winsock2
	  Winsock2
	  Winsock2\Setup
	  Winsock2\Parameters (includes subkeys)
	  Winsock2\Providers (includes subkeys)
	
	How to Obtain the Winsock 2.0 Run-Time Components
	-------------------------------------------------
	
	The Winsock 2.0 run-time components are included in the Winsock 2.0 SDK for
	Windows 95.
	
	The latest version of the Winsock 2.0 run-time components is available from the
	following location on the Microsoft FTP site:
	
	  ftp://ftp.microsoft.com/bussys/winsock/winsock2
	
	This location contains the Winsock 2.0 SDK for Windows 95, which includes a
	utility you can use to install the Winsock 2.0 run-time components on a Windows
	95-based computer.
	
	You can also download the Winsock 2.0 update for Windows 95 from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/windows95/downloads/contents/wuadmintools/s_wunetworkingtools/w95sockets2/default.asp?
	
	For a current file list of the Winsock 2.0 update, see the following article in
	the Microsoft Knowledge Base:
	
	  Q182381 Download File List for Windows Sockets 2.0 Update (Ws2setup.exe)
	
	Additional query words: winsock2 ws2
	
	======================================================================
	Keywords          : kbnetwork win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q151237: Error Message When Installing TCP/IP or Adding TCP/IP Service"
permalink: /kb/151/Q151237/
---

## Q151237: Error Message When Installing TCP/IP or Adding TCP/IP Service

	Article: Q151237
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to reinstall TCP/IP or add a TCP/IP service, you may receive
	one or more of the following error messages:
	
	  - Registry service subkey already exists
	
	-or-
	
	  - Unable to remove name space provider
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that all of the components of a given TCP/IP
	Service are properly removed, and then make sure that the following registry
	subkeys are also removed before you restart the computer:
	
	IMPORTANT: If you have Windows NT 4.0 with Service Pack 2, see the following
	article in the Microsoft Knowledge Base before removing any registry keys:
	
	Q162837Replacing TCPIP after SP2 causes STOP 0x00000050
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	NOTE: You may or may not have all of the following Registry entries depending on
	your TCP/IP configuration.
	
	NOTE: CCS=CurrentControlSet
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\DhcpMibAgent
	HKEY_LOCAL_MACHINE\Software\Microsoft\DhcpServer
	HKEY_LOCAL_MACHINE\Software\Microsoft\FTPSVC
	HKEY_LOCAL_MACHINE\Software\Microsoft\LPDSVC
	HKEY_LOCAL_MACHINE\Software\Microsoft\NetBT
	HKEY_LOCAL_MACHINE\Software\Microsoft\RFC1156Agent
	HKEY_LOCAL_MACHINE\Software\Microsoft\SNMP
	HKEY_LOCAL_MACHINE\Software\Microsoft\SimpTcp
	HKEY_LOCAL_MACHINE\Software\Microsoft\Tcpip
	HKEY_LOCAL_MACHINE\Software\Microsoft\TcpipCU
	HKEY_LOCAL_MACHINE\Software\Microsoft\TcpPrint
	HKEY_LOCAL_MACHINE\Software\Microsoft\Wins
	HKEY_LOCAL_MACHINE\Software\Microsoft\WinsMibAgent
	
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\DHCP
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\DhcpServer
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\FTPSVC
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\Lmhosts
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\LPDSVC
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\NetBT
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\SimpTcp
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\SNMP
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\Tcpip
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\Wins
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\WinSock
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\WinSock2
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\<NetDriver><x>\Parameters\Tcpip
	where <NetDriver> is the name of network card installed on system and
	where <x> is the number of the network adapter.
	
	It may also be necessary to remove the following keys:
	
	HKEY_LOCAL_MACHINE\System\CCS\Enum\Root\Legacy_DHCP
	HKEY_LOCAL_MACHINE\System\CCS\Enum\Root\Legacy_Lmhosts
	HKEY_LOCAL_MACHINE\System\CCS\Enum\Root\Legacy_LPDSVC
	HKEY_LOCAL_MACHINE\System\CCS\Enum\Root\Legacy_NetBT
	HKEY_LOCAL_MACHINE\System\CCS\Enum\Root\Legacy_TCPIP
	HKEY_LOCAL_MACHINE\System\CCS\Services\LanManServer\Linkage\Bind
	HKEY_LOCAL_MACHINE\System\CCS\Services\LanManWorkstation\Linkage\Bind
	HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\PPTP
	
	NOTE: Removing these additional keys requires manipulation of the rights on those
	keys. The default rights for Everyone is Read. This needs to be done for each
	key you wish to remove. To change the rights, log on as Administrator, run
	Regedt32.exe, and select the key you want to delete. From the menu, select
	Security, Owner, Take ownership. Then, Select Security, Permissions, and give
	full control to Everyone, selecting "Replace permission on existing subkeys."
	
	Restart the computer so that registry changes are recognized by Windows NT.
	
	If Remote Access Service (RAS) is installed, you may also need to manually delete
	the following RAS and NDISWANx registry entries:
	
	1. Locate HKEY_LOCAL_MACHINE\System\CCS\Services\NetBIOS\Linkage.
	
	2. Double-click Bind, and remove all NetBT_xxxx entries, such as:
	
	       \Device\NetBT_El59x1
	       \Device\NetBT_NdisWan1
	       \Device\NetBT_NdisWan2
	       \Device\NetBT_NdisWan3
	       \Device\NetBT_NdisWan4
	  HKEY_LOCAL_MACHINE\System\CCS\Services\RASARP
	  HKEY_LOCAL_MACHINE\System\CCS\Services\RASAUTO
	  HKEY_LOCAL_MACHINE\System\CCS\Services\RASMAN
	 HKEY_LOCAL_MACHINE\System\CCS\Services\RASACD
	 HKEY_LOCAL_MACHINE\System\CCS\Services\RASPPTPE
	 HKEY_LOCAL_MACHINE\System\CCS\Services\RASPPTPF
	 HKEY_LOCAL_MACHINE\System\CCS\Services\RASPPTPM
	 HKEY_LOCAL_MACHINE\System\CCS\Services\NDISWANx\Parameters\TCPIP
	  (where x reflects the numbers corresponding to the preceding  \Device\NetBT_NDISWANx.
	 HKEY_LOCAL_MACHINE\System\CCS\ENUM\Root\Legacy_RASARP
	 HKEY_LOCAL_MACHINE\System\CCS\ENUM\Root\Legacy_RASACD
	 HKEY_LOCAL_MACHINE\System\CCS\ENUM\Root\Legacy_RASAUTO
	 HKEY_LOCAL_MACHINE\System\CCS\ENUM\Root\Legacy_RASMAN
	 HKEY_LOCAL_MACHINE\System\CCS\ENUM\Root\Legacy_RASPPTPE
	 HKEY_LOCAL_MACHINE\System\CCS\ENUM\Root\Legacy_RASPPTPF
	 HKEY_LOCAL_MACHINE\System\CCS\ENUM\Root\Legacy_RASPPTPM
	
	Additional query words: remove manual manually regedt32 how to howto removing tcpip
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

---
layout: page
title: "Q137567: Configuring RPC in Windows 95"
permalink: /kb/137/Q137567/
---

## Q137567: Configuring RPC in Windows 95

{% raw %}

	Article: Q137567
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
	
	To implement client-side RPC, Windows 95 uses a Name Service Provider on
	a Windows NT Workstation or Windows NT Server. This service is provided
	by the Windows NT Locator which is a database that contains a list of
	servers and the information to connect to them. To allow Windows 95 to
	point to the computer running the locator service, modify the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. On the computer running Windows 95, run Registry Editor and add the
	  NameService key under:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc
	
	2. The NameService key should contain the following string values:
	
	     DefaultSyntax        "3"
	     Endpoint             "\pipe\locator
	     NetworkAddress       "\\<Machine running Locator service>
	     Protocol             "ncacn_np"
	     ServerNetworkAddress "\\<Machine running Locator service>
	
	3. For other protocol entries, view the registry under:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\ClientProtocols
	
	     Default              (value not set)
	     ncacn_ip_tcp         "rpcltc3.dll"
	     ncacn_nb_nb          "rpcltc5.dll"
	     ncacn_np             "rpcltc1.dll"
	     ncacn_spx            "rpcltc6.dll"
	     ncalrpc              "ncalrpc"
	
	REFERENCES
	==========
	
	Programming Windows 95 Unleashed, SAMS Publishing, pp. 919-920.
	
	Additional query words: win95 win95x
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}

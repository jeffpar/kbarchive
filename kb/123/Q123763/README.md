---
layout: page
title: "Q123763: Share Names Displayed as DELETED in GSNW"
permalink: /kb/123/Q123763/
---

## Q123763: Share Names Displayed as DELETED in GSNW

{% raw %}

	Article: Q123763
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the service dependencies for the Server service is reset in Windows NT, the
	Share Name in the Configure Gateway dialog box for Gateway Service for NetWare
	displays the following:
	
	  *DELETED*
	
	CAUSE
	=====
	
	When you run the Network option in Control Panel to configure your network, it
	will occasionally reset the service dependencies for the Server service. Since
	the server no longer depends on the gateway (NetWare), it starts up before the
	gateway is there and hence does not create the shares.
	
	This behavior may also occur if communication with the NetWare server on which
	the share is located cannot be established when the NT server is restarted.
	After login, a "NetWare Authentication Failure" dialog box will appear and
	indicate "The network path was not found" to the NetWare server.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Edit the registry to verify or correct the DependOnService as follows:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (REGEDT32.EXE)
	
	2. Find the following key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet \Services\LanmanServer
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Verify the following entry is correct or add it if it is not present:
	
	  Value Name: DependOnService
	  Data Type : REG_MULTI_SZ
	  Data : NWCWorkstation
	
	4. Exit the Registry.
	
	5. Shutdown and restart Windows NT.
	
	  -or-
	
	- Re-establish communication with the NetWare server on which the share is
	  located and restart the NT Server. The GSNW share will be restored if
	  communication with the NetWare server is successful.
	
	
	Additional query words: prodnt 3.1 3.5 gsnw csnw novell
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}

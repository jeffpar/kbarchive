---
layout: page
title: "Q133032: Event ID 20087 Appears When You Dial a RAS Server"
permalink: /kb/133/Q133032/
---

## Q133032: Event ID 20087 Appears When You Dial a RAS Server

{% raw %}

	Article: Q133032
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NWLink and dial in from a Windows NT Remote Access Service (RAS)
	client to a Windows NT RAS server, the following system event may appear in the
	Event Viewer:
	
	  Event ID: 20087
	  Source: RemoteAccess
	  Type: Error
	  Description: The IPX network number for the LAN adapter with the MAC
	  address <MAC address> on the local machine has not been configured
	  or could not be auto-detected. The IPX Router will not work on this LAN
	  segment.
	
	CAUSE
	=====
	
	This problem occurs when the network segment that the Windows NT RAS server is
	on does not have an IPX network number.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Run Registry Editor to change NetworkNumber from 0 to a valid network
	  number.
	
	  -or-
	
	- Install a NetWare server on the network segment that contains the RAS server,
	  configure it with a unique network number, and then shutdown and restart the
	  Windows NT RAS server.
	
	To change NetworkNumber from 0 to a valid network number:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE) on the RAS server.
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     \SYSTEM\CurrentControlSet\Services\NwLnkIpx
	       \NetConfig\<Network or RAS adapter>
	
	3. Highlight NetworkNumber.
	
	4. From the Edit menu, choose Multi String.
	
	5. Change the value from 0 to a valid network number.
	
	6. Choose OK and quit the Registry Editor.
	
	7. Shutdown and restart Windows NT.
	
	Additional query words: prodnt nw link
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}

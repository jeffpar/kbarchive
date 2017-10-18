---
layout: page
title: "Q139270: How to Change Name Resolution Order on Windows 95 and Windows NT"
permalink: kb/139/Q139270/
---

## Q139270: How to Change Name Resolution Order on Windows 95 and Windows NT

	Article: Q139270
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following registry entries control name resolution order for Windows NT
	version 3.5x and Windows 95:
	
	  DnsPriority
	  LocalPriority
	  HostsPriority
	  NetbtPriority
	
	Each value is a BINARY value between -32768 and 32767, specified in hexadecimal
	notation. The lower the value, the higher the priority in the search order.
	
	You can use existing values by rearranging them in a needed order. (Use
	scientific calculator, for example, to compare hexadecimal numbers). Deleting an
	entry disables the corresponding resolution method.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q170619 Windows 95 ServiceProvider Priority Values Not Applied
	
	The following registry entry controls name resolution order for Windows NT
	version 4.0:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\DnsNbtLookupOrder
	
	  Value Type: REG_SZ - Character string
	  Valid Range: 0 or 1
	  Default: 0 (False)
	  Description: This parameter specifies that NBT name resolution should be
	  attempted before DNS name resolution.
	
	A value of 0 (default) indicates that DNS name resolution has priority over
	NetBIOS over TCPIP (NetBT). A value of 1 indicates that NetBT name resolution
	has priority over DNS.
	
	NOTE: Windows 2000, by default, will try to resolve a name via DNS first before
	trying to resolve via the legacy node type configuration. This can be modified
	by applying the registry entry above.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q171567 NT 4.0 ServiceProvider Priority Values Not Applied
	
	MORE INFORMATION
	================
	
	The above entries are found in the following registry locations:
	
	Windows NT
	----------
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TCPIP\ServiceProvider
	
	Windows 95
	----------
	
	In order to set priorities in Windows 95, you must create new keys and values
	with the following steps:
	
	1. Use regedit to open the following location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	2. Click on Edit, New, then Key to create a new key under Services and name it
	  MSTCP.
	
	3. Move to the new MSTCP key, and click on Edit, New, then Key to create a new
	  key under MSTCP and name it ServiceProvider.
	
	  The registry path should now look like this:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSTCP\ServiceProvider
	
	4. Move to the new ServiceProvider key, and click on Edit, New, then Binary
	  Value to add the priority values noted above (DnsPriority, LocalPriority,
	  HostsPriority, and NetbtPriority).
	
	5. Set the priority values as needed.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

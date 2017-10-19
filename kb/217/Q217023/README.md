---
layout: page
title: "Q217023: Event ID 5701 Starting Netlogon on Domain Controller"
permalink: /kb/217/Q217023/
---

## Q217023: Event ID 5701 Starting Netlogon on Domain Controller

	Article: Q217023
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	While starting the Netlogon service on a domain controller, the service fails
	with an error 5701. There is also an event logged to the Event Log:
	
	  Netlogon Event ID 5701:
	
	  The Netlogon service failed to update the domain trust list. The following
	  error occurred: There are currently no logon servers to validate the logon
	  request.
	
	CAUSE
	=====
	
	The result of running out of buffer space in the NetBT datagram buffer may be
	one cause of this error.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, increase MaxDgramBuffering from 128 KB to 256 KB.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NetBT\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: MaxDgramBuffering
	  Data Type: REG_DWORD
	  Value: 0x40000
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	MaxDgramBuffering
	-----------------
	
	  Key: Netbt\Parameters
	  Value Type: REG_DWORD - Count of bytes
	  Valid Range: 0 - 0xFFFFFFFF
	  Default: 0x20000 (128 KB)
	  Description: This parameter specifies the maximum amount of memory that NetBT
	  will dynamically allocate for all outstanding datagram sends. After this
	  limit is reached, further sends will fail due to insufficient resources.
	
	Additional query words: 5701
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

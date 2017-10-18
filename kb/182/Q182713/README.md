---
layout: page
title: "Q182713: Multiple Entries in Zone File Cause Memory Leak in Dnsadmin.exe"
permalink: kb/182/Q182713/
---

## Q182713: Multiple Entries in Zone File Cause Memory Leak in Dnsadmin.exe

	Article: Q182713
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the
	"Restoring the Registry" online Help topic in Regedit.exe or the
	"Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When a zone file contains a large number (approximately 100) of "A" records for
	a single host name (each one mapped to a different IP address), the user
	interface appears to stop responding (hang) when trying to display the zone
	information.
	
	During this time, the amount of memory used by Dnsadmin.exe progressively
	increases until such time as the system displays a dialog box saying that the
	system is running low on virtual memory and instructing the user to increase the
	size of the paging file.
	
	Several minutes later, the system displays another dialog box, this one stating
	that there is not enough memory to get all the records. An "out of memory"
	message is also displayed in the lower right hand corner of DNS Manager,
	followed by another message stating that the system is running low on virtual
	memory.
	
	CAUSE
	=====
	
	The DNS Admin tool hangs when there are a lot of records for a particular node
	because it is running out of the RPC buffer space.
	
	RESOLUTION
	==========
	
	To resolve this problem, edit the registry to increase the default RPC Buffer
	size for the DNS Admin:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\DNS Administrator
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	  Value Name: RpcBufferAlloc
	  Data Type:  REG_Dword
	  Value:      0-FFFFFFFF
	  Default:    800(2048)
	
	  Description: This parameter determines the Size of the RPC Buffer Allocation
	  used by the DNS Administrator.
	
	4. Repeat steps 2 and 3 for the following key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\DNS Administrator
	
	5. Increase the value of RpcBufferAlloc from 2048 to 16384.
	
	6. Close Registry Editor.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: DNSAdmin ZONE Data
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

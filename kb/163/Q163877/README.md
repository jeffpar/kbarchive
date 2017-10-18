---
layout: page
title: "Q163877: Problems Copying Files To Novell NetWare 3.11"
permalink: kb/163/Q163877/
---

## Q163877: Problems Copying Files To Novell NetWare 3.11

	Article: Q163877
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience problems copying files on a Token Ring network from a
	computer running Windows NT to a Novell server running NetWare 3.11 (or
	earlier).
	
	Attempts to copy files (using File Manager, for example) over a certain size may
	fail with the following error :
	
	  The Remote Computer is Not Available
	
	CAUSE
	=====
	
	Windows NT's Nwrdr.sys calculates an incorrect maximum packet size under these
	specific circumstances.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To work around this problem, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NWRDR
	  \Parameters\DefaultMaxPacketSize
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Select the DefaultMaxPacketSize parameter and set number to a MaxPktSize
	  number minus 85.
	
	  For example, if you have specified a MaxPktSize of 1500, you should set
	  DefaultMaxPacketSize to 1415. That is, 1500 minus 85 = 1415.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 And
	Windows NT version 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For this problem to occur, the following conditions must apply:
	
	1. PBURST is enabled on the computer running Windows NT.
	
	2. The NetWare server refuses the computer running Windows NT PBURST request.
	
	3. You have specified a value for the following registry parameter:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NWLinkIPX
	  \NetConfig\<drivername>\MaxPktSize
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	  that is smaller than the buffer size the computers would normally negotiate by
	  default if this value was absent from the registry.
	
	MaxPktSize (a REG_DWORD) is usually used to limit the size of transmitted frames,
	to permit communications through routers whose largest maximum transfer unit
	(MTU) is smaller than that of the Token Ring medium in use.
	
	If MaxPktSize is specified, problems may be encountered when attempting to
	transfer files larger in size than MaxPktSize number minus 85.
	
	Note that for the NetWare server to refuse a PBURST request it must be running a
	version of NetWare earlier than 3.11 (for which PBURST is not available) or it
	must be running NetWare 3.11 and not have PBURST.NLM loaded. In NetWare 3.12 and
	later, PBURST support is built into the operating system and it cannot be
	disabled. If the NetWare server is running 3.11 with PBURST.NLM loaded, or is
	running 3.12 or later, you should not see this problem.
	
	The Magic Number of 85 is an allowance for the following:
	
	  Token Ring Header................ 14 bytes
	  Token Ring Source Routing Info... 18 bytes max
	  LLC Header.......................  3 bytes
	  NCP Packet Header................ 30 bytes
	  NCP Write Request................  7 bytes
	  File Write Request............... 13 bytes
	
	  Total............................ 85 bytes max
	
	Additional query words: CSNW GSNW
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

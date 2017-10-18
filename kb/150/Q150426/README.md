---
layout: page
title: "Q150426: Ethernet Packet Size Incorrectly Determined w/ Packet Burst Off"
permalink: kb/150/Q150426/
---

## Q150426: Ethernet Packet Size Incorrectly Determined w/ Packet Burst Off

	Article: Q150426
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you turn off Packet Burst on Windows NT 3.51 , the computer may not be able
	to copy files larger than 1450 bytes to or from a Novell server over Ethernet.
	The copy can also fail if the NetWare server does not have Packet Burst turned
	on and Packet Burst is enabled on Windows NT. Most versions of NetWare have
	Packet Burst enabled by default, but NetWare Version 3.11 does not. This problem
	does not occur on Windows NT 3.5.
	
	You may receive one of the following error messages:
	
	  File Manager cannot copy <filename>: The remote computer is not
	  available.
	
	  -or-
	
	  File Manager cannot copy <filename>: Error performing inpage operation.
	
	CAUSE
	=====
	
	When Packet Burst is turned off on Windows NT 3.51, the computer fails to
	negotiate the proper packet size for Ethernet and attempts to use a packet size
	which is too large. Negotiations occur properly if Packet Burst is turned on.
	
	RESOLUTION
	==========
	
	You can use either one of the following resolutions:
	
	Resolution 1
	------------
	
	1. Make sure Packet Burst is turned on for both Windows NT and the NetWare
	  server.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\NWCWorkstation\Parameters
	
	4. Check for the following entry:
	
	  MaxBurstSize:REG_DWORD: 0
	
	5. If the value is present, delete the value. Do not change this entry to 1,
	  because Packet Burst will not be turned in Windows NT 3.51.
	
	6. Choose OK and quit Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	NOTE: On the NetWare Server make sure that the PBurst NetWare loadable module
	(NLM) is loaded. This is only necessary in Version 3.11, because the NLM is
	enabled by default in later versions.
	
	Resolution 2
	------------
	
	1. Edit the Registry of the Windows NT computer to change the packet size being
	  used by Windows NT.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	2. Run Registry Editor (Regedt32.exe).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\NwRdr\Parameters
	
	4. Add the following value:
	
	  DefaultMaxPacketSize:REG_DWORD: 1450(decimal)5aa(Hex).
	
	Note: This change will force the proper packet size.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q134385
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	
	Additional query words: prodnt copy GSNW CSNW
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

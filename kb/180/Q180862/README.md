---
layout: page
title: "Q180862: Single Form Feed Sent by Host on LU3 Print Session Is Ignored"
permalink: /kb/180/Q180862/
---

## Q180862: Single Form Feed Sent by Host on LU3 Print Session Is Ignored

	Article: Q180862
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A single form feed (FF) that is sent by the host on a LU3 printer session is
	ignored by the SNA Print Server.
	
	CAUSE
	=====
	
	The SNA Server Print Service is designed to execute a form feed (FF) included in
	an LU3 print job when any of the following conditions are met:
	
	- If the FF is inserted as the first character after the WCC in a 3270
	  Erase/Write or Erase/Write Alternate command.
	
	- If the FF is located after a valid NL (New Line) order.
	
	- If the FF is located after the last printable character position of any print
	  line.
	
	This is by design according to IBM's 3270 Information Display System manual.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0. This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack and the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining these Service Packs, query on the following
	word in the Microsoft Knowledge Base(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To include form feeds that are not at the beginning of lines, add the following
	registry entry. Start the Windows NT Registry Editor (Regedt32.exe) and find
	this key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint\Parameters\
	
	Add the following entry to this key:
	
	  
	
	  Value Name: DoAllLU3FFs
	  Data Type: REG_SZ
	  String: TRUE
	
	NOTE: If this registry entry exists, it will be used. The only way to disable
	this registry entry is to remove it.
	
	Additional query words: LU3 snaprint
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

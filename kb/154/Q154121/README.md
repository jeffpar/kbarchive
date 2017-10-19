---
layout: page
title: "Q154121: How to Increase the Lotus Notes Client Timeout Value"
permalink: /kb/154/Q154121/
---

## Q154121: How to Increase the Lotus Notes Client Timeout Value

	Article: Q154121
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT Lotus Notes client fails to connect or continually drops
	connections to a database.
	
	CAUSE
	=====
	
	The client time-out value needs to be increased to maintain a dormant
	connection.
	
	RESOLUTION
	==========
	
	To prevent this problem, you can to increase the KeepConn value in the Registry
	Database, as shown below.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanWorkstation
	  \Parameters
	
	2. Click Add Value from the Edit menu.
	
	3. In the Value Name box, type "KeepConn" (without the quotation marks), select
	  REG_DWORD as the Data Type, and click OK.
	
	4. From the Radix box, select Decimal, type "2000" (without the quotation marks)
	  in the Data box, and click OK.
	
	5. Exit the Registry Editor. Log off and reboot the computer.
	
	Additional query words: prodnt lotusnotes client time out
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	

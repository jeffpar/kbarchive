---
layout: page
title: "Q124357: Err Msg Using NET USE: System Error 1130 Has Occurred"
permalink: /kb/124/Q124357/
---

## Q124357: Err Msg Using NET USE: System Error 1130 Has Occurred

{% raw %}

	Article: Q124357
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NET USE command to connect to computer running Windows NT, the
	following error message appears:
	
	  System Error 1130 has occurred.
	  Not enough server storage is available to process this command.
	
	In some cases the following text is written to the Event Viewer system log:
	
	  The server was unable to perform an operation due to a shortage of
	  available resources.
	
	     0000: 000c0000 005c0001 00000000 c00007d1
	     0010: 00000000 c000009a 00000000 00000000
	     0020: 00000000 00000000 000007d2 0000000b
	     0030: 0000003c
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	3. From the Edit menu, choose Add Value.
	
	4. Use the following values:
	
	  Value Name: MinFreeConnections
	  Data Type: REG_DWORD
	  Decimal: 5
	
	5. Close Registry Editor.
	
	6. Run Control Panel and choose Network.
	
	7. Under Installed Network Software, highlight Server and then choose Configure.
	
	8. Under Optimization, select Maximize Throughput for File Sharing and then
	  choose OK.
	
	9. Either shutdown and restart Windows NT, or from a command prompt, type the
	  following two commands (pressing ENTER after each line):
	
	  net stop server
	  net start server
	
	Additional query words: prodnt srv balance
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}

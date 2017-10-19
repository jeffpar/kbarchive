---
layout: page
title: "Q126967: New TCP/IP Registry Parameter Ignores Push Bit on Receives"
permalink: /kb/126/Q126967/
---

## Q126967: New TCP/IP Registry Parameter Ignores Push Bit on Receives

	Article: Q126967
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has added a registry parameter for Afd.sys, in the Windows NT 3.51
	Service Pack 3, that allows TCP/IP to ignore the push bit on receives. However,
	TCP still waits until the receive buffer is full if the push bit is not set.
	
	MORE INFORMATION
	================
	
	To allow TCP/IP to ignore the push bit on receives, do the following:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\Afd\Parameters
	
	2. Select the following value name: IgnorePushBitOnReceives
	
	3. From the Edit menu, select DWORD.
	
	4. Change the Data to 1.
	
	5. Click OK and quit the Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	In Windows NT version 3.1, TCP/IP behaved as if the PUSH bit was always set by
	the sender. In Windows NT 3.5, the receive logic was optimized to use the PUSH
	bit. This reduces the number of times an application has to wake up for incoming
	data. However, when Windows NT is communicating with a TCP/IP implementation (or
	application) that does not set the PUSH bit at the appropriate times,
	performance can suffer.
	
	Performance degrades because, when data arrives without the PUSH bit set, TCP
	holds onto the application's recv() while waiting for the rest of the data.
	Windows NT TCP/IP completes a recv() call when:
	
	- Data arrives with the PUSH bit set.
	
	  -or-
	
	- The user recv() buffer is full.
	
	  -or-
	
	- 0.5 seconds have elapsed since any data arrived.
	
	When the third test above is required to complete a recv() call, performance
	degrades.
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, AFD.SYS, to allow TCP/IP to ignore push bit on
	receives.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

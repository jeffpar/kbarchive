---
layout: page
title: "Q186081: STOP 0x0000000A When Restoring Tape"
permalink: /kb/186/Q186081/
---

## Q186081: STOP 0x0000000A When Restoring Tape

	Article: Q186081
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange Backup or NTBackup to restore a
	DLT2000/4000/7000 tape to a local or remote disk at network speed of 100
	megabits per second or higher, the Windows NT computer may receive the following
	error:
	
	  STOP: 0x0000000A (7fff0000 00000002 00000000 80176524)
	
	The problem is seen only on multiprocessor systems, but it may occur on single
	processor systems also.
	
	CAUSE
	=====
	
	During a high throughput DLTxxxx restore operation (that is, backup- dedicated
	servers), the computer may receive a stop error. This error is caused by a
	divide overflow in the Tcpip.sys function, TDIQueryInformation.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: crash hang bugcheck 0x0a 4MB/sec
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

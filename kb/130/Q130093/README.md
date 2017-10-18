---
layout: page
title: "Q130093: Err Msg: Incorrect Response from the Network"
permalink: kb/130/Q130093/
---

## Q130093: Err Msg: Incorrect Response from the Network

	Article: Q130093
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears:
	
	  Incorrect Response from the Network
	
	This error message can occur when you run NetBench version 3.0 under Windows NT
	with Windows NT file system (NTFS) file compression enabled.
	
	CAUSE
	=====
	
	The Windows NT client receiving this error message timed out during an MPX write
	request.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	NOTE: If the Windows NT Server's CPU usage is at 100% direct host IPX clients may
	experience unreliable service and should therefore switch to a connection
	oriented protocol like NetBEUI or TCP/IP, etc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt net bench
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

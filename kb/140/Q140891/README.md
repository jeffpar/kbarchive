---
layout: page
title: "Q140891: Remote Shutdown May Fail"
permalink: /kb/140/Q140891/
---

## Q140891: Remote Shutdown May Fail

	Article: Q140891
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A remote shutdown of Windows NT may fail to shut down the remote system. Remote
	shutdown is typically performed by using the Windows NT Resource Kit utilities,
	Shutdown.exe or Shutgui.exe.
	
	CAUSE
	=====
	
	This occurs because the Remote shutdown of Windows NT does not deallocate memory
	as expected. A problem has been found in the cleanup operations when shutting
	down a remote system that does not have a user logged on at its console.
	
	
	WORKAROUND
	==========
	
	To resolve this problem on Windows NT 3.51 Workstation or Server, obtain the fix
	described below, or upgrade to Windows NT Workstation and Server version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

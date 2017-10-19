---
layout: page
title: "Q162563: WINS Restore Fails on Windows NT Server 4.0"
permalink: /kb/162/Q162563/
---

## Q162563: WINS Restore Fails on Windows NT Server 4.0

	Article: Q162563
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to restore a WINS backup using WINS Administrator
	(Winsadmn.exe), the following error message is returned:
	
	  WINS encountered an error while processing the command.
	
	CAUSE
	=====
	
	Winsrpc.dll has a version mismatch with the Jet database used in Windows NT 4.0.
	
	RESOLUTION
	==========
	
	A new version of Winsrpc.dll has been created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The above error may also occur if you do not specify the parent folder of the
	folder where the backup resides. For example, if your WINS backup folder is
	C:\Wins_bak, then you should specify C:\ as the folder from which to restore.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

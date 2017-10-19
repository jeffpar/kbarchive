---
layout: page
title: "Q149903: File Manager Performs a Move Instead of a Copy"
permalink: /kb/149/Q149903/
---

## Q149903: File Manager Performs a Move Instead of a Copy

	Article: Q149903
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to copy a compressed file from a Windows NT file system (NTFS)
	partition located on a Windows NT 4.0 server or workstation using a down-level
	client (for example, Windows 95 or Windows for Workgroups), the file is moved
	instead of copied. This will only happen if you are using the File Manager
	included with a down-level client.
	
	If you do not have permissions to delete the file, the file will not be moved and
	will instead be copied correctly. Windows NT File Manager and Windows Explorer
	work correctly.
	
	CAUSE
	=====
	
	Windows NT 4.0 is sending additional information about the file that down- level
	clients cannot understand correctly. The File Manager on the down- level client
	then attempts to move the file instead of copy it.
	
	RESOLUTION
	==========
	
	Windows NT 4.0 has been changed so that the server will not send the additional
	information to a down-level client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

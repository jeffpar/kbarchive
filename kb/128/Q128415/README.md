---
layout: page
title: "Q128415: NT to LAN Manager UAS Replication Problem after using PORTUAS"
permalink: /kb/128/Q128415/
---

## Q128415: NT to LAN Manager UAS Replication Problem after using PORTUAS

	Article: Q128415
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the user account database (UAS) is ported from a LAN Manager server to a
	Windows NT 3.5 server (using PORTUAS) and later modified, UAS replication
	problems may occur. The LAN Manager server's error log may contain Error 3226,
	with the following two bytes in the data field:
	
	  00 EA
	
	These two bytes represent "ERROR_MORE_DATA." This error is the final return code;
	the actual error is:
	
	  0x57 (ERROR_INVALID_PARAMETER)
	
	This error is not recorded in the LAN Manager server error log. The replication
	process is halted and UAS replication is never successfully completes.
	
	CAUSE
	=====
	
	If a home directory exists for a user account that is being ported, then PORTUAS
	sets a flag UF_HOMEDIR_REQUIRED FLAG (bit 3 in usri2_flags) indicating home
	directory is required. If the user account is later modified to not include a
	home directory, Windows NT does not reset this bit.
	
	When a home directory is specified for a user account that was created using User
	Manager (or Net User ), UF_HOMEDIR_REQUIRED FLAG is not set. Therefore, UAS
	replication works correctly.
	
	RESOLUTION
	==========
	
	To correct this problem, clear the UF_HOMEDIR_REQUIRED FLAG when Windows NT
	replicates to a LAN Manager Backup Domain controller.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt NTS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

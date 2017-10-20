---
layout: page
title: "Q123215: Backup Incorrectly Sets Archive Bit on WFWG 3.11 Files"
permalink: /kb/123/Q123215/
---

## Q123215: Backup Incorrectly Sets Archive Bit on WFWG 3.11 Files

{% raw %}

	Article: Q123215
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbtool kbinterop kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable the Verify option in the Windows NT version 3.5 Backup program
	to backup a Windows for Workgroups version 3.11 computer over the network, the
	archive bits are set during the verification process. Consequently, you cannot
	perform an incremental backup of the Windows for Workgroups computer.
	
	NOTE: The correct behavior is to clear the archive bits on all files, which is
	done when you run Backup on a Windows NT version 3.5 computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}

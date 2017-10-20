---
layout: page
title: "Q149857: MoveFileEx API Does Not Work After Applying SP4"
permalink: /kb/149/Q149857/
---

## Q149857: MoveFileEx API Does Not Work After Applying SP4

{% raw %}

	Article: Q149857
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply Service Pack 4 for Windows NT 3.51 Server or Workstation, the
	MoveFileEx API stops responding. Files that are marked for deletion or rename
	upon next restart are not deleted or renamed when you restart the system.
	
	CAUSE
	=====
	
	When you use the MoveFileEx API with the MOVEFILE_DELAY_UNTIL_REBOOT parameter,
	a setup program can mark a file for deletion, or rename, upon the next system
	restart. This is needed when a specific file is currently in use by the system
	and cannot be deleted.
	
	The API appears to work, returns the correct error code, and the registry keys
	are created. However, on restart the files still exist and the registry keys are
	not deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.5 and 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt movefileex movefile_delay_until_reboot
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}

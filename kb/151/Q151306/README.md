---
layout: page
title: "Q151306: WINS Partner Registry Settings May Be Deleted"
permalink: /kb/151/Q151306/
---

## Q151306: WINS Partner Registry Settings May Be Deleted

	Article: Q151306
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
	
	User-defined WINS partner registry settings are deleted after you double- click
	the OK button in the WINS Replication Partners dialog box.
	
	CAUSE
	=====
	
	The HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\Partners key has
	two subkeys, \Pull and \Push, under which are subkeys for the IP addresses of
	all push and pull partners, respectively, of the WINS server. When you click the
	OK button in the WINS Replication Partners dialog box, the registry keys above
	are flushed and reset to default values. The keys are immediately re-created and
	only default values are reset.
	
	
	RESOLUTION
	==========
	
	Obtain the latest U.S. Microsoft Windows NT 3.51 Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

---
layout: page
title: "Q131059: Security Log Close Handles Don't Match Open Handles"
permalink: /kb/131/Q131059/
---

## Q131059: Security Log Close Handles Don't Match Open Handles

{% raw %}

	Article: Q131059
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	About half the close audit entries in the security log display the same constant
	value for handle identification numbers (IDs), even though those handle IDs are
	supposed to match the open audit routine handle IDs which vary.
	
	NOTE: You can still follow the audit trail in the Security log and find a
	corresponding open audit entry for each close audit entry, but the handle IDs in
	the close audit entries will be wrong.
	
	CAUSE
	=====
	
	The service controller handle ID passing routine does not always correctly pass
	along the handle IDs.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q138415: Windows NT Fails to Check for Low Disk Space (No Admin Alerts)"
permalink: /kb/138/Q138415/
---

## Q138415: Windows NT Fails to Check for Low Disk Space (No Admin Alerts)

{% raw %}

	Article: Q138415
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run below 10% (default setting) free disk space on any of your hard
	drives on your computer running Windows NT 3.51, Windows NT fails to notify you
	with Event 2013 "The C: disk is at or near capacity. You may need to delete some
	files".
	
	CAUSE
	=====
	
	The Windows NT 3.51 SRV.SYS driver drive name calculation algorithm is
	incorrect, which causes it not to check periodically for the amount of remaining
	free disk space.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt alerts diskspace disk space
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}

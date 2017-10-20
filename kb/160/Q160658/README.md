---
layout: page
title: "Q160658: Stop C000021A Using MoveFileEx MOVEFILE_DELAY_UNTIL_REBOOT"
permalink: /kb/160/Q160658/
---

## Q160658: Stop C000021A Using MoveFileEx MOVEFILE_DELAY_UNTIL_REBOOT

{% raw %}

	Article: Q160658
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 4.0 may fail with the following stop message:
	
	  STOP: c000021a {fatal system error}
	
	
	CAUSE
	=====
	
	MoveFileEx using the MOVEFILE_DELAY_UNTIL_REBOOT flag appears to corrupt the
	registry on Windows NT 4.0 after a certain unknown number of calls. Attempting
	to reboot in this situation fails, and the Windows NT 4.0 Emergency Repair Disk
	is required to recover from the failure.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q156669
	  TITLE : How to troubleshoot a STOP 0xC000021A
	
	Additional query words: 0x21a 0xc000021a hang hung prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}

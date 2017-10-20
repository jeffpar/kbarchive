---
layout: page
title: "Q135667: STOP 1E When Using File Manager and Services for Macintosh (SFM)"
permalink: /kb/135/Q135667/
---

## Q135667: STOP 1E When Using File Manager and Services for Macintosh (SFM)

{% raw %}

	Article: Q135667
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	When you use File Manager to drag and drop large files that were created on
	Macintosh clients, Windows NT 3.51 Server displays the following STOP message:
	
	  Bugcheck 0000001e : c0000005 801704a7 00000001 00000001
	
	
	CAUSE
	=====
	
	SFM.SYS does not initialize a structure properly.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 3.51 prodnt Services for Macintosh (SFM) trap blue screen
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}

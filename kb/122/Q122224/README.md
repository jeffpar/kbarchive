---
layout: page
title: "Q122224: Format Limits Stripe Sets to 4 GB"
permalink: /kb/122/Q122224/
---

## Q122224: Format Limits Stripe Sets to 4 GB

{% raw %}

	Article: Q122224
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbother kbbug3.10 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a hard disk drive that is larger than 4 GB as a stripe set,
	with or without parity and format the disk drive from Disk Administrator or at
	the Command Prompt, the disk capacity is incorrectly shown as 4 GB.
	
	
	CAUSE
	=====
	
	The FTDISK.SYS driver limits stripe sets to 4 GB.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1 and Windows NT Server version 3.5. This problem was corrected in the
	latest U.S. Service Pack for Windows NT version 3.5. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.10 fault tolerance
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNT310Search
	
	=============================================================================
	

{% endraw %}

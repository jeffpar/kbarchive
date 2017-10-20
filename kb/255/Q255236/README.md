---
layout: page
title: "Q255236: Windows NT 4.0 Does Not Start and a STOP Error Message Appears"
permalink: /kb/255/Q255236/
---

## Q255236: Windows NT 4.0 Does Not Start and a STOP Error Message Appears

{% raw %}

	Article: Q255236
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start your Microsoft Windows NT Server 4.0-based computer, the
	computer may not start and you may receive the following error message:
	
	  STOP 0x00000074(0x00000005, 0x00000003, 0x00000003 0xc000000d)
	  bad_system_config_info
	
	CAUSE
	=====
	
	This behavior can occur when the permissions to the %SystemRoot%\System32\Config
	folder are changed so the system account does not have Full Control permissions
	to this folder.
	
	RESOLUTION
	==========
	
	To resolve this behavior, install a parallel copy of Windows NT Server 4.0 and
	restart to the parallel installation. Grant the system account Full Control
	permissions to the Winnt/System32/Config folder. Restart to the original
	installation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

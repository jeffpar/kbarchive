---
layout: page
title: "Q164635: SNA 3.0 Mngagent.exe Traps on NT4.0-J"
permalink: /kb/164/Q164635/
---

## Q164635: SNA 3.0 Mngagent.exe Traps on NT4.0-J

{% raw %}

	Article: Q164635
	Product(s): Microsoft SNA Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT, Japanese Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Mngagent.exe traps during system shutdown. The trap messages are as follows:
	
	  The instruction at 0x60984891 referenced memory at 0x014D1A00. The memory
	  could not be read.
	
	This trap can be reproduced by using the following steps:
	
	1. Stop the MngAgent service using Control Panel Services.
	
	2. Type mngagent at an MS-DOS command prompt.
	
	3. Press CTRL+C.
	
	This error does not occur on the U.S. version of Microsoft Windows NT 4.0.
	
	CAUSE
	=====
	
	During Process Detach cleanup, if this is the last process using shared manage
	objects, MngAgent traps. However, the final cleanup is not necessary because
	Windows NT should free all resources on its own.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. The updated
	module is:
	
	  <snaroot>\system\mngbase.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snaprog sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbHLangJapanese kbWinNT400 kbWinNT400search
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

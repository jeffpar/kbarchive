---
layout: page
title: "Q109203: Sharing Violations Executing Logon Scripts and SHARE.EXE"
permalink: /kb/109/Q109203/
---

## Q109203: Sharing Violations Executing Logon Scripts and SHARE.EXE

{% raw %}

	Article: Q109203
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Users may get an intermittent sharing violation when their logon script is
	running and SHARE.EXE is running.
	
	CAUSE
	=====
	
	The sharing mode used to open the script file was not compatible with multiple
	user access when workstations run SHARE.EXE.
	
	RESOLUTION
	==========
	
	This problem is fixed by CSD00.074. The fix is not in LAN Manager patch 2.2b.
	
	Additional query words: 2.20 2.2 2.20a 2.2a 2.20b 2.2b
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}

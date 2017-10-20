---
layout: page
title: "Q130660: STOP 0x1E in SFMSRV.SYS When Using Services for Macintosh"
permalink: /kb/130/Q130660/
---

## Q130660: STOP 0x1E in SFMSRV.SYS When Using Services for Macintosh

{% raw %}

	Article: Q130660
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Windows NT 3.5 server with Services for the Macintosh (SFM) as a
	file server, the following STOP errors may appear:
	
	  STOP 0x0000001E (0xC0000005, 0xFAEA0A87, 0x00000000, 0x0000002F)
	
	
	CAUSE
	=====
	
	When translating some paths sent from a Macintosh client, an attempt to access
	the parent directory of the root is made. This results in an access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: 3.50 prodnt sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}

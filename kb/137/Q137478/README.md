---
layout: page
title: "Q137478: Error Browse Server Shares with File Manager: The Interface..."
permalink: /kb/137/Q137478/
---

## Q137478: Error Browse Server Shares with File Manager: The Interface...

{% raw %}

	Article: Q137478
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error appears when you attempt to browse server shares from File
	Manager:
	
	  The Interface is Unknown
	
	CAUSE
	=====
	
	This error occurs when the Gateway Services for NetWare (GSNW) service is
	installed but the service is stopped. The error should be mapped and File
	Manager should bypass Gateway Services for NetWare.
	
	WORKAROUND
	==========
	
	To work around this problem, restart Gateway Services for NetWare.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: 3.51 prodnt winfile GSNW
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}

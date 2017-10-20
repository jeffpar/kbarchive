---
layout: page
title: "Q170670: Renaming LU Pools is not a Dynamic Change"
permalink: /kb/170/Q170670/
---

## Q170670: Renaming LU Pools is not a Dynamic Change

{% raw %}

	Article: Q170670
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server service must be stopped and restarted after renaming an LU pool.
	
	MORE INFORMATION
	================
	
	Adding an LU Pool in SNA Server versions 3.0 and 4.0 is a dynamic change. This
	means that the SNA Server service does not need to be stopped and restarted in
	order to take effect. Renaming an existing LU Pool, however, is not a dynamic
	change and the SNA Server service must be restarted before the new name will be
	recognized. The addition of an LU Pool in SNA Server version 2.10, 2.11, 2.11
	SP1, and 2.11 SP2 is not a dynamic change, nor is renaming the LU Pool.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

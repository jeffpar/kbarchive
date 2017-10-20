---
layout: page
title: "Q129118: FoxPro Obtains Exclusive Open on Shared Database"
permalink: /kb/129/Q129118/
---

## Q129118: FoxPro Obtains Exclusive Open on Shared Database

{% raw %}

	Article: Q129118
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT 3.5, Microsoft FoxPro can obtain an exclusive open of a DBF
	file when it should be denied access.
	
	CAUSE
	=====
	
	When a FoxPro database file is stored on a Netware Server, and accessed from a
	Windows NT Workstation or Server, it is possible to obtain an exclusive open of
	the file when it is not appropriate. The attributes of the DBF file must be set
	to R, W and S (read, write, and share) for this to occur. Deleting the DBF file
	S attribute prevents the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt Fox Pro
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}

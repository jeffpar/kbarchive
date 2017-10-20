---
layout: page
title: "Q246107: WINAT Returns Error When Current Day Is Sunday"
permalink: /kb/246/Q246107/
---

## Q246107: WINAT Returns Error When Current Day Is Sunday

{% raw %}

	Article: Q246107
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Three 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Four ISBN 0-7356-0837-7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a new job using WINAT, you may receive the following
	error:
	
	  The parameter is incorrect.
	
	CAUSE
	=====
	
	This behavior occurs when the computer's date is set to Sunday and you attempt
	to create a job set to occur "Tomorrow."
	
	RESOLUTION
	==========
	
	Microsoft has released a fix for this problem at the following location:
	
	x86 version: ftp://ftp.microsoft.com/reskit/nt4/x86/winat/
	Alpha version: ftp://ftp.microsoft.com/reskit/nt4/alpha/winat/
	
	MORE INFORMATION
	================
	
	While this issue is not technically a Year 2000 issue, it has been documented on
	the Year 2000 site to remove any confusion that may exist surrounding compliance
	of WINAT.
	
	Additional query words: mspress nt40 reskit rkbook 1-57231-344-7 1-57231-559-8 1-57231-626-8 0-7356-0837-7
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q155138: Stop 0x00000077 in Fpnwsrv.sys During Burst Mode Read"
permalink: /kb/155/Q155138/
---

## Q155138: Stop 0x00000077 in Fpnwsrv.sys During Burst Mode Read

{% raw %}

	Article: Q155138
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Windows NT Server 3.51 the following stop error message may appear
	in Fpnwsrv.sys during a burst mode read:
	
	  Stop 0x0000077 (KERNEL_STACK_INPAGE_ERROR)
	
	CAUSE
	=====
	
	A call is made to paged out INLINE function code during the burst mode read.
	
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}

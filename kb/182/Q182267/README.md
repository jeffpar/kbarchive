---
layout: page
title: "Q182267: &#91;MC_&#93;ALLOCATE May Return Sense 00000805 Instead of 08050000"
permalink: /kb/182/Q182267/
---

## Q182267: &#91;MC_&#93;ALLOCATE May Return Sense 00000805 Instead of 08050000

{% raw %}

	Article: Q182267
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Win32 APPC program calls [MC_]ALLOCATE and the request fails on an
	Intel-based server, in some instances the returned sense_data may not indicate a
	valid sense code. For example, if session limits are exceeded, APPC returns a
	sense code of 0x00000805, instead of 0x08050000.
	
	CAUSE
	=====
	
	The SNA Server APPC interface (Wappc32.dll) is not properly formatting the
	4-byte sense_code returned parameter on Intel systems. Because APPC is
	implemented in a platform-independent fashion and Intel systems store
	double-word values in byte-inversed order in memory, the APPC DLL is not
	properly formatting the sense code before returning to the APPC application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 (all service
	packs) and SNA Server 4.0. We are researching this problem in SNA Server version
	3.0 and will post more information here in the Microsoft Knowledge Base as it
	becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

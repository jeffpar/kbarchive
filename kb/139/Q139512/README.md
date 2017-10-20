---
layout: page
title: "Q139512: SNA Server MS-DOS Router Session Limit Increased to 10"
permalink: /kb/139/Q139512/
---

## Q139512: SNA Server MS-DOS Router Session Limit Increased to 10

{% raw %}

	Article: Q139512
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 MS-DOS router is limited to 5 sessions.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file <sna_cd_root>\CLIENTS\MSDOS\ROUTER.EXE to
	correct this problem.
	
	The new file allows 10 sessions over the MS-DOS router.
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

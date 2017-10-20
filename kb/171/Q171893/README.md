---
layout: page
title: "Q171893: NT Client Setup Fails to Properly Install SNANLS Support"
permalink: /kb/171/Q171893/
---

## Q171893: NT Client Setup Fails to Properly Install SNANLS Support

{% raw %}

	Article: Q171893
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When applying the SNA 3.0 SP1 Windows NT client software, the SNANLS
	functionality is not properly upgraded. Although the SNANLS conversion files are
	copied to the Windows NT client system, the necessary registry settings are not
	added and the SNANLS character conversion API fails to work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: update registry NLS
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

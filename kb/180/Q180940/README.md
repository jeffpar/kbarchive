---
layout: page
title: "Q180940: Unable to Use Host Print Transform After Applying SP2"
permalink: /kb/180/Q180940/
---

## Q180940: Unable to Use Host Print Transform After Applying SP2

{% raw %}

	Article: Q180940
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 5250 print server Host Print Transform option does not work correctly after
	you apply SNA Server 3.0 Service Pack 2.
	
	CAUSE
	=====
	
	The new PRINTSESSIONAPPC record written when the Host Print Transform is enabled
	is not properly setting the PAEXTRA_EXTENDED bit in the dwExtra flag. Therefore,
	the 5250 print service creates a 5224 device instead of a 3812 device on the
	AS/400.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q180621: Symbol Files for 5250 Applet Not Available with SNA Server 3.0"
permalink: /kb/180/Q180621/
---

## Q180621: Symbol Files for 5250 Applet Not Available with SNA Server 3.0

{% raw %}

	Article: Q180621
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server 3.0, including Service Pack 1 (SP1) and SP2, does not include the
	Symbol files for the bundled 5250 Applet. Symbol files for the 5250 Applet are
	only needed to help troubleshoot application exceptions and Dr. Watson errors
	that occur with the 5250 Applet.
	
	SNA Server 3.0 does include Symbol files for all of its other components
	including the 3270 Applet.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2. All future versions of SNA Server 3.0 will include the Symbol
	files for the 5250 Applet. SNA Server 4.0 already includes the symbol files for
	the 5250 Applet.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

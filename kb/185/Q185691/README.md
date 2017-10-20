---
layout: page
title: "Q185691: X.25 Link Service May Hang When Using IBM's ARTIC Driver"
permalink: /kb/185/Q185691/
---

## Q185691: X.25 Link Service May Hang When Using IBM's ARTIC Driver

{% raw %}

	Article: Q185691
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SNA Server is configured to use an X.25 connection and configured to use
	switched virtual circuit (SVC), the link service may stop responding (hang)
	shortly after initialization. This problem has also been seen on X.25
	connections supporting permanent virtual circuits (PVC).
	
	CAUSE
	=====
	
	The X.25 link service was incorrectly calling Read Interface Record before
	setting the link protocol parameters required by the driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: freeze stuck
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

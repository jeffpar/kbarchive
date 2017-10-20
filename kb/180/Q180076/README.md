---
layout: page
title: "Q180076: Manager Should Only Allow QPCSUPP Mode For TN5250"
permalink: /kb/180/Q180076/
---

## Q180076: Manager Should Only Allow QPCSUPP Mode For TN5250

{% raw %}

	Article: Q180076
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TN5250 only allows one session when another mode other than QPCSUPP is used in
	the TN5250 Server AS/400 definition.
	
	CAUSE
	=====
	
	QPCSUPP is the only mode that is supported by TN5250.
	
	WORKAROUND
	==========
	
	Use only QPCSUPP mode when you create AS/400 definitions for TN5250.
	
	STATUS
	======
	
	This is a known problem with all versions of SNA server that support TN5250.
	
	Additional query words: QPCSUPP TN5250
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q249967: LU1 Print Job Loses First Line When DelayPrintStart Implemented"
permalink: /kb/249/Q249967/
---

## Q249967: LU1 Print Job Loses First Line When DelayPrintStart Implemented

{% raw %}

	Article: Q249967
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first line of data in an LU1 print job from the host may be lost when the
	DelayPrintStart registry option is enabled.
	
	CAUSE
	=====
	
	The SNA Host Print service incorrectly interprets the first line of print data
	as control data when the DelayPrintStart registry entry is enabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information about the DelayPrintStart registry parameter, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q172283 Blank Page Is Printed Between Each Print Job
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

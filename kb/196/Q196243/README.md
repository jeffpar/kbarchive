---
layout: page
title: "Q196243: Host Print Sessions Using GDI May Stop Printing"
permalink: /kb/196/Q196243/
---

## Q196243: Host Print Sessions Using GDI May Stop Printing

	Article: Q196243
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Print sessions may fail to print after successfully printing for some time. When
	this occurs, print sessions may appear to stop responding or get stuck in a
	spooling status when attempting to start the session or sessions. This problem
	may cause other symptoms as well.
	
	For more information on a problem that may cause the same symptoms, please refer
	to the following Knowledge Base article:
	
	  ARTICLE-ID: <LINK TYPE="ARTICLE" VALUE="Q180864">Q180864</LINK>
	  TITLE     : Print Sessions Stop with Host Print Service
	
	CAUSE
	=====
	
	SNA Server's host print service uses an internal counter to track the number of
	Device Contexts (DCs) that are currently in use. The count is decremented when a
	DC is freed. This counter may be decremented twice when one DC is freed causing
	a negative value to be displayed in the counter. Further DC creation requests
	may fail, causing print sessions to stop responding.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 Service Pack
	1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service Pack 1. This
	problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

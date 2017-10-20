---
layout: page
title: "Q196327: Access Violation When 2 LUs have Same Name &amp; Same Connection"
permalink: /kb/196/Q196327/
---

## Q196327: Access Violation When 2 LUs have Same Name &amp; Same Connection

{% raw %}

	Article: Q196327
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	It is possible to get an access violation when trying to add a remote Advanced
	Program-to-Program Communications (APPC) logical unit (LU) using the same alias
	as an already existing remote APPC LU on the same connection.
	
	Microsoft SNA Server Manager will first give a warning message in a dialog box:
	
	  The LU Alias has already been use. The LU Alias cannot be the same as any
	  other APPC LU on its connection.
	
	After you click OK to get rid of that dialog box, and then click OK on the Remote
	APPC LU Properties dialog box, an Application Error in Snaexp.exe may occur.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

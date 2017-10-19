---
layout: page
title: "Q168681: Cannot Drag and Drop Connection Between SNA Servers"
permalink: /kb/168/Q168681/
---

## Q168681: Cannot Drag and Drop Connection Between SNA Servers

	Article: Q168681
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Manager does not allow you to use a drag-and-drop operation to move a
	connection to another computer running SNA Server. This feature, which was part
	of SNA Server 2.x, was not included in SNA Server 3.0 or 3.0 Service Pack 1.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem. With the fix, the administrator can
	use a mouse to move connections between servers. However, keyboard support does
	not exist. A message will appear after the drag-and-drop operation, warning you
	of the need to manually set up a new link service for this connection. The
	connection must be dragged to a server and not a connection folder under a
	server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q164644: Clear Text Passwords Could Be Left in SNAP Buffers"
permalink: /kb/164/Q164644/
---

## Q164644: Clear Text Passwords Could Be Left in SNAP Buffers

	Article: Q164644
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even after enabling SNA Server 3.0 client encryption, some SNA Server Windows 95
	client logon information may inadvertently appear in clear- text, viewable to a
	network monitor.
	
	CAUSE
	=====
	
	A buffer carrying SNA Server Windows 95 client logon information is not being
	cleared before being used for subsequent SNA Server client-server messages. This
	may cause a subsequent message to inadvertently include client logon
	information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	
	The updated module is:
	
	  <win95root>\System\Snakrnl.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30 snaencrypt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

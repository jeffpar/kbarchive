---
layout: page
title: "Q165658: Possible RPC Error When Performing a &quot;Remove All&quot; from Setup"
permalink: /kb/165/Q165658/
---

## Q165658: Possible RPC Error When Performing a &quot;Remove All&quot; from Setup

	Article: Q165658
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Remote Procedure Call (RPC) Service has been stopped, an RPC error will
	result when performing a Remove All from SNA Server Setup. This will occur
	during the removal of the SNA Server performance counters.
	
	CAUSE
	=====
	
	This problem occurs because the RPC Service has been stopped by the user.
	
	RESOLUTION
	==========
	
	Each of the Link Service Configuration DLLs now uses a direct call to Perfutl()
	instead of using the SNA RPC Service with RemoveAllLinkServices().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: RPC
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

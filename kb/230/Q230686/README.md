---
layout: page
title: "Q230686: Print Server Doesn't Support Print Filter DLL for APPC Printing"
permalink: /kb/230/Q230686/
---

## Q230686: Print Server Doesn't Support Print Filter DLL for APPC Printing

	Article: Q230686
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp2
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to configure an APPC Print Session using SNA Server Manager,
	the configuration options for enabling a Print Filter DLL are missing. Also,
	when APPC Print Sessions are successfully configured for Print Filter DLL
	support using the SNACFG command line tool, the SNA Print Server will never
	activate the newly configured DLL when a print job is sent from the AS/400.
	
	CAUSE
	=====
	
	The SNA Print Server was not designed to support APPC print filters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0,3.0SP1,3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

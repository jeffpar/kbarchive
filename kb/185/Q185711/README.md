---
layout: page
title: "Q185711: Stop 0x50 When Shared Folders Gateway (Sffsd.sys) Is Stopped"
permalink: kb/185/Q185711/
---

## Q185711: Stop 0x50 When Shared Folders Gateway (Sffsd.sys) Is Stopped

	Article: Q185711
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the host connection shuts down due to an error condition while it is
	copying files to the AS/400, if you stop the Shared Folders Gateway (SFGW)
	Service, you may receive a Windows NT blue screen STOP 0x50 error.
	
	CAUSE
	=====
	
	The blue screen STOP error occurs because the SFGW Service is trying to prevent
	a possible blue screen STOP error when it is later restarted. The problem occurs
	only if you try to stop the SFGW Service when it cannot close all open files (if
	the host connection went down, for example). If the SFGW Service cannot close a
	file, it tries to invalidate the associated file control block (FCB) in the
	Sffsd.sys driver. This was failing to happen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	
	=============================================================================
	

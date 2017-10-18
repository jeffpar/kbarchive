---
layout: page
title: "Q185719: Removing Host Security Option Causes Trap in SNA Manager"
permalink: kb/185/Q185719/
---

## Q185719: Removing Host Security Option Causes Trap in SNA Manager

	Article: Q185719
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Removing the Host Security option through SNA Server Setup may cause the SNA
	Server Manager to trap immediately when it starts up. This can occur on either
	the SNA Server system or the Windows NT SNA Client system.
	
	CAUSE
	=====
	
	The Host Security option was removed which caused the removal of two DLLs which
	were required by SNA Manager.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q245966: Winmgt32.dll May Complete Same Verb Three Times"
permalink: kb/245/Q245966/
---

## Q245966: Winmgt32.dll May Complete Same Verb Three Times

	Article: Q245966
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server Winmgt32.dll file may complete the same asynchronous
	ACTIVATE_SESSION or DEACTIVATE_SESSION verb three times in error.
	
	CAUSE
	=====
	
	This can happen if the Activate/Deactivate_SESSION verb completes before the
	calling thread has exited the Winmgt32.dll file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server Version 4.0
	SP2, 4.0 SP3.
	
	
	MORE INFORMATION
	================
	
	Support for ACTIVATE_SESSION and DEACTIVATE_SESSION is included in SNA Server
	4.0 SP2 and later versions. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q195010 Activate_session/Deactivate_session Unavailable in SNA Server
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

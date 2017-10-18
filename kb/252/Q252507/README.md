---
layout: page
title: "Q252507: SNA Server Service Pack 3 Appears to Update but Does Not"
permalink: kb/252/Q252507/
---

## Q252507: SNA Server Service Pack 3 Appears to Update but Does Not

	Article: Q252507
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an administrative account is not used to execute the update process, even if
	the other steps in the readme are followed, the update will appear to run
	normally, ending with a successful completion message. But the files may not be
	updated. This can be verified by using the SNAVER utility at a command prompt.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q173284 SNA Server Version Information and Windows NT Dependencies
	
	CAUSE
	=====
	
	Setup, which is called by update, requires administrative privileges to finish
	successfully.
	
	RESOLUTION
	==========
	
	Log on as a user with administrative privileges.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

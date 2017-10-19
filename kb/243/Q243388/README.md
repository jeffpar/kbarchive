---
layout: page
title: "Q243388: Shared Folders Connections Fail Using Same User ID"
permalink: /kb/243/Q243388/
---

## Q243388: Shared Folders Connections Fail Using Same User ID

	Article: Q243388
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 (all SP), 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Shared Folders connections fail when two or more AS/400 definitions use the same
	User ID, but different passwords. When attempting to connect to a folder
	definition on one of the AS/400s, customers may receive the following error
	message:
	
	  X:\ is not accessible.
	  While accessing the hard disk, a disk operation failed even after retries.
	
	CAUSE
	=====
	
	The Shared Folders gateway service stores only one instance of the User ID and
	password. Because of this, one password is used for all AS/400 definitions with
	the same User ID. This results in security violations, which can be seen in a
	Shared Folders Gateway API trace.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	This problem only affects two or more AS/400 definitions using the same User ID,
	but different passwords. Customers can avoid this problem by using a unique User
	ID for each AS/400 definition, or by using the same User ID and same password
	for each AS/400 definition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The Shared Folders gateway service should be stopped before applying this fix,
	and then restarted after the fix has been successfully applied.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

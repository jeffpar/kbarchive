---
layout: page
title: "Q172681: Print Server Does Not End Job on &quot;Flush Print Buffer&quot;"
permalink: /kb/172/Q172681/
---

## Q172681: Print Server Does Not End Job on &quot;Flush Print Buffer&quot;

	Article: Q172681
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print from an AS/400, a print job may appear to stop responding and not
	produce any output. SNA Server DLC message traces indicate that at the end of
	the print job the AS/400 is sending:
	
	  000A 12A0 0102 0400 0002 ("Flush Print Buffer")
	
	Print Server expects to get
	
	  0011 12A0 0101 0A08 0001 0000 0000 0000 00 ("End Print Job")
	
	to end the print job.
	
	
	CAUSE
	=====
	
	SNA Print Server ignores the "Flush Print Buffer" command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, Print Server accepts both "Flush Print Buffer" and "End
	Print Job" as print ended signals.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

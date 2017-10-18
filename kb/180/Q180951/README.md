---
layout: page
title: "Q180951: Pool Name Not Displayed in the 3270 LU &quot;Assigned To&quot; Field"
permalink: kb/180/Q180951/
---

## Q180951: Pool Name Not Displayed in the 3270 LU &quot;Assigned To&quot; Field

	Article: Q180951
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server 3.0 Manager does not show which 3270 LUs have not been assigned
	to an LU pool. This makes it difficult to determine which LUs are not being
	used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the 3270 Pool name appears in the Assigned To field when a
	3270 LU is assigned to a Pool. In addition, the Assign To context menu allows
	3270 LUs to be assigned to Pools as well as to Users and Workstations.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

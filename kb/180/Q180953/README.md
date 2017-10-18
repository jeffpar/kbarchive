---
layout: page
title: "Q180953: &quot;Missing Component&quot; When Applying Service Pack"
permalink: kb/180/Q180953/
---

## Q180953: &quot;Missing Component&quot; When Applying Service Pack

	Article: Q180953
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a non-administrative account to install an SNA Server Service Pack,
	an error message about a missing component appears at the beginning of the
	update process. The message does not indicate which component is missing.
	
	CAUSE
	=====
	
	The Update program incorrectly reports a missing component error message if the
	logged on user does not have Admin rights.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Before running the Update program, log on to the system with an account that
	  has administrative privileges.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP1 and
	3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, a check examines administrative privileges before running
	the update. A message appears that states:
	
	  Installing this service pack requires administrative privileges.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

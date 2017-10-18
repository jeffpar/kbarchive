---
layout: page
title: "Q180874: Control Unit Image Number Should be a 1 Digit Field"
permalink: kb/180/Q180874/
---

## Q180874: Control Unit Image Number Should be a 1 Digit Field

	Article: Q180874
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Control Unit Image Number field (on page 2 of the Channel connection
	property page) currently accepts two hex digits.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0
	Service Pack 1 (SP1), and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem is fixed in the retail release of SNA Server 4.0.
	
	MORE INFORMATION
	================
	
	This field should only accept one character because the allowed range is 0 - F.
	<snaroot>\system\SNAPAGE.DLL has been modified to accept 1 Hex digit.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

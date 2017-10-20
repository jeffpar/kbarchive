---
layout: page
title: "Q171257: Assignment of LUs to Null Subnet (0.0.0.0) Not Fully Supported"
permalink: /kb/171/Q171257/
---

## Q171257: Assignment of LUs to Null Subnet (0.0.0.0) Not Fully Supported

{% raw %}

	Article: Q171257
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server 3.0 supports the ability to assign 3270 LUs to workstations. Although
	it is possible to assign 3270 LUs to an IP subnet address, this does not work
	reliably in SNA Server versions 3.0 and 3.0 Service Pack 1 (SP1).
	
	Assigning an LU to a null (0.0.0.0) subnet will fail in SNA Server version 3.0
	SP1 if any other IP subnets or workstation addresses are subsequently added.
	
	CAUSE
	=====
	
	The ability to assign an LU to a null subnet was added in SNA Server version 3.0
	SP1; however, in order for this feature to work properly, the null subnet must
	be the last address in the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the null subnet no longer needs to be the last address on
	the list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

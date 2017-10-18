---
layout: page
title: "Q172298: SNA Manager Redraws TN5250 IP Address List Incorrectly"
permalink: kb/172/Q172298/
---

## Q172298: SNA Manager Redraws TN5250 IP Address List Incorrectly

	Article: Q172298
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a name that is longer than the column width for the IP Address field is added
	to a TN5250 AS/400 definition, the name is not redrawn correctly if the column
	width is subsequently resized. The overflow part of the name is truncated and
	appears in the Subnet Mask column. The overflow part of the name stays in the
	Subnet Mask even the if column is resized.
	
	CAUSE
	=====
	
	The TN5250 portion of SNA Manager fails to redraw the column correctly to an Add
	Name entry. Instead of not showing any overflow in the Subnet Mask column, the
	extra characters stay on screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and
	3.0.Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, SNA Manager redraws the columns correctly. Any overflow
	from the long name is not displayed in the Subnet Mask column.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

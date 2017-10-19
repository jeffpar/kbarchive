---
layout: page
title: "Q196572: Assign LU Dialog Box May Not Show All Available Connections"
permalink: /kb/196/Q196572/
---

## Q196572: Assign LU Dialog Box May Not Show All Available Connections

	Article: Q196572
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The "Assign LU..." dialog box that is displayed when assigning LUs to
	Users/Groups or Pools may not list the first connection available in the SNA
	Server subdomain. LUs that are configured on this connection are listed in the
	"Assign LU..." dialog box.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a connection in SNA Server Manager with a name of "A" (without the
	  quotes). This will insure that this is the first connection in the list.
	
	2. Add a 3270 Display LU to this new connection.
	
	3. Right click on a User/Group in the Configured Users folder, and select
	  "Assign LUs..." from the pop-up dialog box.
	
	4. The "Assign LU..." dialog box does not show connection "A" in the column that
	  lists the available connections. However, the 3270 Display LU created in Step
	  2 above is listed as an available LU that can be assigned to a User/Group.
	
	NOTE: This also occurs in the "Assign LU..." dialog box that is displayed when
	you select "Assign LUs..." after right-clicking on a Pool, if you are using SNA
	Server 4.0 or later. Prior to SNA Server 4.0, the "Assign LUs..." option was not
	available when right-clicking on a configured Pool.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

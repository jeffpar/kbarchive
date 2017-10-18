---
layout: page
title: "Q182651: Error Msg. When Editing Properties for Multiple Print Servers"
permalink: kb/182/Q182651/
---

## Q182651: Error Msg. When Editing Properties for Multiple Print Servers

	Article: Q182651
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to edit the properties for multiple host print sessions at the same
	time, you may receive the following error message:
	
	  The session name must be provided.
	
	Do the following to reproduce the problem:
	
	1. Select the first print session from the right pane of SNA Manager.
	
	2. Hold down the CTRL key while selecting multiple print sessions.
	
	3. From the View menu, select Properties.
	
	4. When you select a tab other than the General tab to change the properties,
	  the error message will appear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Session Name field was disabled so it would not request a validation when
	trying to change pages within the properties of multiple print sessions.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix kbnofix
	
	=============================================================================
	

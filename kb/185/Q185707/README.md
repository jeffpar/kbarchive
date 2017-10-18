---
layout: page
title: "Q185707: Allow Assignment of an LU to a User and Workstation"
permalink: kb/185/Q185707/
---

## Q185707: Allow Assignment of an LU to a User and Workstation

	Article: Q185707
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you assign LUs/Pools to a workstation and select the "Allow Access to
	Workstation Resources Only" option, any user who logs on to that workstation has
	access to that LU.
	
	Also note that if you assign LUs/Pools to a user with no limits on the
	workstation, the user can log on to any workstation and get a session.
	
	CAUSE
	=====
	
	This behavior is by design in Microsoft SNA Service versions 3.0, 3.0 SP1, 3.0
	SP2, 3.0 SP3, and 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. We are researching this problem in versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3 and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	You can now configure any 3270 Display, LUA, and Printer LU to allow access to
	it only if the LU is assigned to both a user and a workstation (or a set of
	users and a set of workstations). Thus only a specific user logged on to a
	specific workstation (or a set of users who are logged on to a specific set of
	workstations) can access these LUs.
	
	For all other cases, access is denied to the LUs.
	
	To configure the LU for the user-plus-workstation-based security, there is a new
	User Workstation Secured check box in the LU property page. This security is
	turned off by default.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

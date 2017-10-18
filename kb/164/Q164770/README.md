---
layout: page
title: "Q164770: Host Account Manager Incorrectly Prompts User to Reapply Changes"
permalink: kb/164/Q164770/
---

## Q164770: Host Account Manager Incorrectly Prompts User to Reapply Changes

	Article: Q164770
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply changes for a user ID using the Host Account Manager (UDCONFIG),
	choosing the Select option to change to a new user account causes the following
	message to appear:
	
	  
	
	  You have not applied your changes, do you really wish to exit?
	  Yes / No
	
	Because the changes were already applied, this message should not appear.
	
	CAUSE
	=====
	
	The Host Account Manager incorrectly detects user changes if multiple host
	security domains were configured for the user.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The updated file is:
	
	  <Snaroot>\Hssystem\Udconfig.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snahostsec
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

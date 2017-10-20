---
layout: page
title: "Q172637: User Able to Open Display Session If Associated Printer in Use"
permalink: /kb/172/Q172637/
---

## Q172637: User Able to Open Display Session If Associated Printer in Use

{% raw %}

	Article: Q172637
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using the Associated Printers function in SNA Manager to assign a
	particular Printer Session to a particular Display LU and a user disconnects the
	display session while keeping the Associated Printer session active, a new user
	can connect to this display session. The new user is unable to get a printer
	session because it is already in use.
	
	CAUSE
	=====
	
	SNA Server is not checking to see whether the associated printer LU is in use by
	another user.
	
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
	
	With the fix applied, SNA Server does not allow a user to obtain a display LU if
	it has an associated printer session that already in use by another user.
	
	NOTE: The user who has the printer session open will still be able to reopen the
	associated 3270 display session. This problem only affects the case where
	another user was being allowed to open a display session when its associated
	printer is already open.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

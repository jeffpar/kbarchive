---
layout: page
title: "Q170672: Config File Security does not Display Correct Domain Name"
permalink: /kb/170/Q170672/
---

## Q170672: Config File Security does not Display Correct Domain Name

	Article: Q170672
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In SNA Server Admin version 2.11 SP1, Security/Owner shows 2 fields, SNA Domain
	and Owner. The value displayed in the SNA Domain field is actually the value for
	the NT Domain, rather than for the SNA SubDomain.
	
	With SNA Server version 3.0, in SNA Server Manager under Domain Properties/
	Config File Security/Take Ownership, the fields are SNA SubDomain and Owner. The
	value for SNA SubDomain correctly displays the SNA SubDomain. However, the Owner
	field displays the complete NT Domain Name/UserName only in some cases.
	
	For example:
	
	- If the NT Domain Username and/or Machine account exist in the same domain as
	  the domain that the Owner exists in, the Owner field will display only the
	  UserName.
	
	- If the NT Domain Username and/or Machine account exist in a different domain
	  than the Owner exists in, the Owner field will display both the NT Domain
	  Name and the UserName.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	

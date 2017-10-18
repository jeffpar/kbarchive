---
layout: page
title: "Q173615: Unable to Specify LU Number 1 When Adding Range of 3270 LUs"
permalink: kb/173/Q173615/
---

## Q173615: Unable to Specify LU Number 1 When Adding Range of 3270 LUs

	Article: Q173615
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Range of LUs wizard used by SNA Server Manager to configure a range of 3270
	LUs does not allow the first LU number to be specified as 1. LU number 1 would
	correspond to an LU defined as LOCADDR=001 in the PU definition in VTAM.
	
	CAUSE
	=====
	
	The Range of LUs wizard is designed with a check to validate that the first LU
	number is 2 or greater.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Create the first LU using LU number 1 individually in SNA Server Manager and
	  then to use the Range of LUs wizard to create the rest of the Lus, starting
	  with an LU number of 2.
	
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
	
	With the fix applied, the Range of LUs wizard validates that the first LU number
	is greater than 0 instead of 2 or greater.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

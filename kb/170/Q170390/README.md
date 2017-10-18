---
layout: page
title: "Q170390: Changing Security Options on MIPS System Results in 4116 Error"
permalink: kb/170/Q170390/
---

## Q170390: Changing Security Options on MIPS System Results in 4116 Error

	Article: Q170390
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all versions)
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error is displayed when trying to exit the SNA Server Admin
	Security options under SNA Server 2.11 when it is running on a MIPS system.
	
	  Error: 4116
	
	  An error occurred at the server in attempting to process your request.
	  Your changes may not have been applied.
	
	This problem occurs on both the Japanese and U.S. versions of SNA Server 2.11
	when running on a MIPS system.
	
	CAUSE
	=====
	
	This problem is caused because of a structure member alignment problem with SNA
	Server 2.11 when running on a MIPS system. Because the structure member is
	passed across the network, it could not be aligned correctly. The result is that
	a new security structure is allocated and the misaligned member structure is
	copied into it before the Windows NT security call is made. This results in the
	4116 error.
	
	
	RESOLUTION
	==========
	
	The security component of the SnaBase service has been updated to correct this
	problem. In addition, ACL caching is no longer done when SNA Server 2.11 is used
	on a MIPS system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	MORE INFORMATION
	================
	
	To reproduce this problem, follow these steps:
	
	1. Log on to Windows NT on MIPS system using the Administrator account.
	
	2. Install SNA Server and start SNA Server Admin.
	
	3. Click Permissions on the Security menu in SNA Server Admin.
	
	4. Click OK after adding some users or groups, or only choose OK.
	
	5. The error 4116 popup message is displayed.
	
	  - or -
	
	1. Log on to Windows NT on MIPS system using the Administrator account.
	
	2. Install SNA Server and start SNA Server Admin.
	
	3. Click Owner on the Security menu in SNA Server Admin.
	
	4. Click the Take Ownership button.
	
	5. The error 4116 popup message is displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2
	Version           : WINDOWS:2.11 (all versions)
	Issue type        : kbbug
	
	=============================================================================
	

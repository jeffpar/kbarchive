---
layout: page
title: "Q149208: Large File Transfers Fail w/MS-DOS Router and IBM PC Support"
permalink: /kb/149/Q149208/
---

## Q149208: Large File Transfers Fail w/MS-DOS Router and IBM PC Support

	Article: Q149208
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	File transfers that use the IBM PC Support Program's RTOPC utility to transfer
	data from an AS/400 to a IBM-compatible computer may fail when you use the
	MS-DOS SNA Server client's ROUTER.EXE.
	
	One possible symptom of the failure is an unknown error 9999 returned by the IBM
	PC Support program.
	
	CAUSE
	=====
	
	The SNA Server MS-DOS Router was not properly handling an APPC verb timeout
	condition if the APPC verb did not complete in 65 seconds. Instead of returning
	a timeout error, the MS-DOS Router was returning AP_OK (no error).
	
	
	RESOLUTION
	==========
	
	The ROUTER.EXE has been updated to correct the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.0, 2.10,
	2.11, and 2.11.sp1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: ca/400 service pack 1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

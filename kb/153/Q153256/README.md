---
layout: page
title: "Q153256: Unable to Build Wrui3270.exe Sample App. with VC++ 4.0"
permalink: /kb/153/Q153256/
---

## Q153256: Unable to Build Wrui3270.exe Sample App. with VC++ 4.0

	Article: Q153256
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to build the Wrui3270.exe sample application from the SNA SDK with
	Microsoft Visual C++ version 4.0, the build would fail with the following
	compiler output:
	
	  
	
	  LINK : warning LNK4049: locally defined symbol _exit imported
	  rui3270.obj : error LNK2001: unresolved external symbol __imp__printf
	  wrui3270.exe : fatal error LNK1120: 1 unresolved externals
	  NMAKE : fatal error U1077: 'link' : return code '0x19'
	  Stop.
	  Error executing NMAKE.
	  n3271.exe - 3 error(s), 1 warning(s)
	
	CAUSE
	=====
	
	The make file was compiling with options from one C Runtime library and linking
	with another, leading to the unresolved externals.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.0, 2.1,
	2.11, and 2.11.sp1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

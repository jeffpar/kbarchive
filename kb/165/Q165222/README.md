---
layout: page
title: "Q165222: Application Violation Error Occurs on Windows 95 Client"
permalink: kb/165/Q165222/
---

## Q165222: Application Violation Error Occurs on Windows 95 Client

	Article: Q165222
	Product(s): Microsoft SNA Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Client for Windows 95 client receives an application violation error
	in Snabase.exe during a sponsor connection to an SNA Server that has encryption
	enabled on the user account when the client is not in the same Windows NT
	Domain.
	
	CAUSE
	=====
	
	SNABASE caused an invalid page fault in Snakrnl.dll.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The SNA Server client for Windows 95 has been updated to correct this problem.
	The updated file is:
	
	  Snakrnl.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300NT kbSNAServ400NT
	Version           : winnt:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

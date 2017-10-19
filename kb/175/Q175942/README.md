---
layout: page
title: "Q175942: Support Windows NT Services Using SNA Windows 95 Client"
permalink: /kb/175/Q175942/
---

## Q175942: Support Windows NT Services Using SNA Windows 95 Client

	Article: Q175942
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT service (running under the local system security context) is unable
	to access any SNA resources when running on a Windows NT computer installed with
	the SNA Server Windows 95 client software. The exact errors will vary, depending
	on the service itself. However, if the Windows NT service attempts to use the
	APPC or CPIC API interfaces, the following API errors are returned to the
	application:
	
	  APPC primary return code - 0xF004 (AP_COMM_SUBSYSTEM_NOT_LOADED)
	
	  CPIC error code = 20 (PRODUCT_SPECIFIC_ERROR)
	
	This problem occurs when you are using the Wall Data Rumba Office 5.1 AS/400
	shared folders feature on a Windows NT computer, using the SNA Server Windows 95
	client software. The Rumba Office AS/400 shared folders feature fails to display
	any AS/400 shared folders to the user.
	
	This problem does not occur if the SNA Server Windows NT client software is
	installed on the Windows NT computer.
	
	
	CAUSE
	=====
	
	The SNA Server 3.0, 3.0 Service Pack 1, and 3.0 Service Pack 2 Windows 95 client
	software requires that the Windows NT application or service be run under a user
	context and will not function under the Windows NT local system security
	context.
	
	WORKAROUND
	==========
	
	To work around this problem, run the SNA application under a Windows NT user
	security context that can connect to the Windows NT computer or computers where
	SNA Server is running. If the Windows NT service must run under the local system
	context, then the SNA Server Windows NT client software should be installed
	instead of the SNA Server Windows 95 client software.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SNA Server Windows 95 client
	included in SNA Server versions 3.0, 3.0 Service Pack 1, and 3.0 Service Pack
	2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With this SNA Server Windows 95 client hotfix applied, the SNA application must
	still be run under a Windows NT user context that is known to the Windows NT
	computer where SNA Server is running. For example, when the application is
	running on a Windows NT Workstation computer, the user must log on to a domain
	user account (or trusted domain account) of the Windows NT computer where SNA
	Server is running.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q161355: TP_START Stops Responding If SnaBase Fails on Win95 Client"
permalink: kb/161/Q161355/
---

## Q161355: TP_START Stops Responding If SnaBase Fails on Win95 Client

	Article: Q161355
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A 5250/APPC application appears to stop responding indefinitely on a SNA Server
	client computer running Windows 95.
	
	CAUSE
	=====
	
	If SnaBase successfully connects to a computer running SNA Server, but then the
	connection is aborted either by SNA Server due to either an invalid username or
	password, or by some user action (such as clicking Cancel in the SNA Server
	Logon dialog box), the Snakrnl.dll file does not report a lost locality
	correctly. Because the lost locality is not reported correctly, a
	WinAPPCStartup() call issued by the 5250/APPC application may return
	successfully, even though SnaBase is not started. If the application then issues
	a TP_START verb, it will stop responding indefinitely.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. The Snakrnl.dll file
	has been updated to correctly report the lost locality, so that a
	WinAPPCStartup() call does not complete successfully if SnaBase fails to start.
	
	This fix is already incorporated into the Windows 95 client for SNA Server 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 and
	2.11 Service Pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna lock lockup win95 freeze hang 2.11.sp1 sp1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

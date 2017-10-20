---
layout: page
title: "Q269134: Multiple Shared Folders Clients Fail Over Same Local LU"
permalink: /kb/269/Q269134/
---

## Q269134: Multiple Shared Folders Clients Fail Over Same Local LU

{% raw %}

	Article: Q269134
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two or more types of Shared Folders clients attempt to attach to the same
	AS/400 system through the same Local LU, only one type of client can connect at
	any given time. For example, if a NetManage RUMBA Shared Folders client is
	attached through SNA Server, and the SNA Server Shared Folders service attempts
	to attach to the same AS/400 through the same Local LU, it fails.
	
	When this occurs, a CPFAD08 message is sent to the QSYSOPR message queue on the
	AS/400. When the SNA Server Shared Folders service is the client that fails, the
	following symptoms also occur:
	
	- When you attempt to access the drive letter for the shared folders drive, the
	  following error message occurs:
	
	  While accessing the hard disk, a disk operation failed even after retries
	
	- Event IDs 38 , 91 , 5005 , 5001 , and 5007 (not necessarily in that order)
	  are logged in the Application event log on the computer running SNA Server.
	
	CAUSE
	=====
	
	Previously, when two types of Shared Folders clients tried to attach to the same
	AS/400 through the same Local LU, the QPWFSERV job on the AS/400 would
	occasionally use a large amount of CPU time. The only way to recover once it was
	in that state was to IPL the AS/400. To prevent this from occurring, the AS/400
	operating system OS/400 V4R4 now denies requests for a second type of Shared
	Folders client to attach through the same Local LU.
	
	WORKAROUND
	==========
	
	To avoid these error messages, Microsoft recommends that you configure a
	separate Local LU for each type of Shared Folders client that will be attaching
	to the AS/400.
	
	MORE INFORMATION
	================
	
	To view the QSYSOPR message queue on the AS/400, type the following command at
	an AS/400 command prompt:
	
	  DSPMSG QSYSOPR
	
	NOTE: You need appropriate rights to be able to run this command.
	
	For additional information on displaying a specific AS/400 message, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q245450 Displaying a Specific AS/400 Message
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	
	=============================================================================
	

{% endraw %}

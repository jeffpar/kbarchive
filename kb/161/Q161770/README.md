---
layout: page
title: "Q161770: Event 560 Leads to Inability to Restart SNA Server or SnaBase"
permalink: kb/161/Q161770/
---

## Q161770: Event 560 Leads to Inability to Restart SNA Server or SnaBase

	Article: Q161770
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you stop the SnaBase service, you may encounter the following SnaBase
	critical internal error:
	
	  Event: 560
	  Description: Read from mailslot failed, rc = 6 (invalid handle)
	
	The SnaBase service treats the Event 560 error as a critical internal error,
	causing the SnaBase to create an SNA Server dump file (Snadump.log). However,
	once the SnaBase fails in this way, any TCP/IP sockets it had opened are not
	closed. Any attempt to restart the SnaBase service then leads to the following
	errors:
	
	  Event: 567
	  Description: Creation of a named pipe failed, rc = 10048
	
	  -or-
	
	  Event: 553
	  Description: Could not create mailslot, rc = 10048
	
	These errors are logged if SnaBase encounters problems creating the TCP/IP
	sockets used to communicate to other servers. The 10048 socket error indicates
	"Address in use." These errors are also treated as critical internal errors by
	SnaBase, causing the creation of an SNA Server dump file (Snadump.log, in the
	<Snaroot>\Traces directory) to be created for these events as well. The
	only way to recover SNA Server at this point is to shut down and restart the
	computer running Windows NT Server.
	
	CAUSE
	=====
	
	Event 560 is treated as a critical internal error, causing SNA Server to
	generate the Snadump.log file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With this fix, event
	560 is treated as a lower severity error, so no SNA Server dump is generated. If
	this error occurs when stopping SnaBase, an SNA Server dump file is no longer
	created, so any TCP/IP resources are then closed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	and 2.11.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: prodsna snafaqtop
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

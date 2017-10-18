---
layout: page
title: "Q259293: Allocate Request May Stop Responding When Host Rejects SNASVCMG"
permalink: kb/259/Q259293/
---

## Q259293: Allocate Request May Stop Responding When Host Rejects SNASVCMG

	Article: Q259293
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An APPC or CPIC application's Allocate request may stop responding indefinitely.
	This can occur if the Allocate request is issued when the host has previously
	rejected SNA Server LU6.2 BIND requests to reestablish a new LU6.2 session. In
	this case, the Allocate request should complete with an error message instead of
	failing to respond.
	
	CAUSE
	=====
	
	The SNA Server may fail to respond to a client's Allocate request if the host
	has previously rejected a SNASVCMG mode BIND command sent by SNA Server for the
	LU-LU pair. This problem is due to a timing window in the SNA Server LU6.2 BIND
	retry code.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	In the client application, you can cancel the outstanding [MC_]ALLOCATE request
	that has stopped responding.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server 4.0, SP1,
	SP2 and SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	When you apply the update, the server properly reports an error message back to
	the client application, which causes the APPC [MC_]ALLOCATE or CPIC CMALLC
	request to complete with an error message. The cause for the host rejection of
	the SNA Server SNASVCMG BIND attempts should still be investigated on the host
	side.
	
	
	Additional query words: hang
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
